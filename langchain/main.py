from src.chains.simple import simple_chain
from src.retrievers.vectorstore import build_vectorstore
from src.chains.rag import build_rag_chain

def demo_simple():
    print("=== Simple Chain ===")
    result = simple_chain(
        system_prompt="You are a concise assistant. Reply in one sentence.",
        user_message="What is LangChain?",
    )
    print(result)

def demo_rag():
    print("\n=== RAG Chain ===")
    sample_texts = [
        "Foxora is an AI-powered coding IDE built with Tauri and React.",
        "Foxora uses Mastra as its internal engine for agent orchestration.",
        "The Foxora engine runs on port 4111 and supports multiple AI models.",
        "Foxora supports voice interaction via a voice assistant called Ria.",
    ]
    print("Building vectorstore...")
    build_vectorstore(sample_texts)
    chain = build_rag_chain()
    question = "What port does Foxora engine run on?"
    print(f"Question: {question}")
    print(f"Answer: {chain.invoke(question)}")

if __name__ == "__main__":
    demo_simple()
    demo_rag()
