from fastapi import APIRouter

from app.ai.question_generator import generate_questions
from app.schemas.interview_schema import (
    InterviewRequest,
    InterviewResponse
)

router = APIRouter(
    prefix="/interview",
    tags=["Interview"]
)


@router.post(
    "/questions",
    response_model=InterviewResponse
)
def interview_questions(
    request: InterviewRequest
):

    result = generate_questions(request.skills)

    return result