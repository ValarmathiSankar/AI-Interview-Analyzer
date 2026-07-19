from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.resume import router as resume_router
from app.api.interview import router as interview_router
from app.api.speech import router as speech_router
from app.api.evaluation import router as evaluation_router

app = FastAPI(
    title="AI Interview Analyzer",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://ai-interview-analyzer-five.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    resume_router,
    prefix="/resume",
    tags=["Resume"],
)

app.include_router(
    speech_router,
    prefix="/speech",
    tags=["Speech"]
)

app.include_router(interview_router)

app.include_router(
    evaluation_router,
    prefix="/interview",
    tags=["Evaluation"],
)


@app.get("/")
def root():
    return {
        "message": "Backend Running Successfully 🚀"
    }

