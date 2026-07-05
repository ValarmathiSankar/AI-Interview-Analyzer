from pydantic import BaseModel


class InterviewRequest(BaseModel):
    skills: list[str]


class InterviewResponse(BaseModel):
    questions: list[str]