import streamlit as st
import pandas as pd
import plotly.express as px

st.set_page_config(
    page_title="Streamlit Boilerplate",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded",
)

st.title("Streamlit Boilerplate")
st.markdown("A minimal Streamlit app with charts, sidebar, and multipage support.")

with st.sidebar:
    st.header("Controls")
    n_points = st.slider("Number of data points", 10, 200, 50)
    chart_type = st.selectbox("Chart type", ["Line", "Bar", "Scatter"])

import numpy as np
df = pd.DataFrame({
    "x": range(n_points),
    "y": np.cumsum(np.random.randn(n_points)),
})

if chart_type == "Line":
    fig = px.line(df, x="x", y="y", title="Line Chart")
elif chart_type == "Bar":
    fig = px.bar(df, x="x", y="y", title="Bar Chart")
else:
    fig = px.scatter(df, x="x", y="y", title="Scatter Chart")

st.plotly_chart(fig, use_container_width=True)

col1, col2, col3 = st.columns(3)
col1.metric("Mean", f"{df['y'].mean():.2f}")
col2.metric("Max", f"{df['y'].max():.2f}")
col3.metric("Min", f"{df['y'].min():.2f}")

with st.expander("View raw data"):
    st.dataframe(df, use_container_width=True)
