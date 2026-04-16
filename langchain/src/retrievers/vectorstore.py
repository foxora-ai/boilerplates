from langchain_openai import OpenAIEmbeddings
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv
import os

load_dotenv()

def get_embeddings() -> OpenAIEmbeddings:
    return OpenAIEmbeddings(
        model=os.getenv("EMBEDDING_MODEL", "text-embedding-3-small"),
        api_key=os.getenv("OPENAI_API_KEY"),
    )

def build_vectorstore(texts: list[str], persist_dir: str = "./chroma_db") -> Chroma:
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    docs = [Document(page_content=t) for t in texts]
    chunks = splitter.split_documents(docs)
    vectorstore = Chroma.from_documents(
        chunks,
        embedding=get_embeddings(),
        persist_directory=persist_dir,
    )
    return vectorstore

def load_vectorstore(persist_dir: str = "./chroma_db") -> Chroma:
    return Chroma(
        persist_directory=persist_dir,
        embedding_function=get_embeddings(),
    )
