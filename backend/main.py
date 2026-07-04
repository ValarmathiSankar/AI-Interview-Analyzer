from fastapi import FastAPI

app = FastAPI(
    title="AI Interview Analyzer API",
    version="1.0.0",
    description="Backend API for AI Interview Analyzer"
)

@app.get("/")
def root():
    return {
        "message": "AI Interview Analyzer Backend is Running 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "Healthy"
    }