from pydantic import BaseModel


class EvaluationRequest(BaseModel):
    question: str
    answer: str


class EvaluationResponse(BaseModel):
    technical_score: int
    communication_score: int
    overall_score: int
    feedback: str