import json

from app.ai.gemini_client import ask_gemini
from app.ai.prompts import interview_prompt


def generate_questions(skills):

    prompt = interview_prompt(skills)

    response = ask_gemini(prompt)

    try:

        return json.loads(response)

    except Exception:

        return {
            "questions":[response]
        }