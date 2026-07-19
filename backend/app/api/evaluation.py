from fastapi import APIRouter

from app.ai.answer_evaluator import evaluate_answer
from app.schemas.evaluation_schema import (
    EvaluationRequest,
    EvaluationResponse,
)

router = APIRouter()


@router.post(
    "/evaluate",
    response_model=EvaluationResponse,
)
def evaluate(request: EvaluationRequest):

    result = evaluate_answer(
        request.question,
        request.answer,
    )

    return result