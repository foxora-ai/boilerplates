from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from src.retrievers.vectorstore import build_vectorstore, load_vectorstore
from dotenv import load_dotenv
import os

load_dotenv()

RAG_PROMPT = ChatPromptTemplate.from_messages([
    ("system", """You are a helpful assistant. Answer questions using only the context below.
If the answer is not in the context, say "I don't know."

Context:
{context}"""),
    ("human", "{question}"),
])

def format_docs(docs) -> str:
    return "\n\n".join(d.page_content for d in docs)

def build_rag_chain(persist_dir: str = "./chroma_db"):
    vectorstore = load_vectorstore(persist_dir)
    retriever = vectorstore.as_retriever(search_kwargs={"k": 3})
    llm = ChatOpenAI(
        model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
        api_key=os.getenv("OPENAI_API_KEY"),
    )
    chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | RAG_PROMPT
        | llm
        | StrOutputParser()
    )
    return chain
