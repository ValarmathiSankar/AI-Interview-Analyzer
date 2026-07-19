import json

from app.ai.gemini_client import ask_gemini
from app.ai.prompts import evaluation_prompt


def evaluate_answer(question, answer):

    prompt = evaluation_prompt(question, answer)

    response = ask_gemini(prompt)

    print("\n========== GEMINI RESPONSE ==========\n")
    print(response)
    print("\n=====================================\n")

    return json.loads(response)