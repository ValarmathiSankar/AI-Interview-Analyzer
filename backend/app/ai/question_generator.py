import json

from app.ai.gemini_client import ask_gemini
from app.ai.prompts import interview_prompt


FALLBACK_QUESTIONS = [
    "Tell me about yourself.",
    "Explain your strongest technical skill.",
    "What is Machine Learning?",
    "What is the difference between supervised and unsupervised learning?",
    "Explain one AI project you have built.",
    "What is FastAPI?",
    "Explain REST APIs.",
    "What is overfitting?",
    "What challenges did you face while building your project?",
    "Why should we hire you?"
]


def generate_questions(skills):

    prompt = interview_prompt(skills)

    try:

        response = ask_gemini(prompt)

        return json.loads(response)

    except Exception as e:

        print("Gemini Error:", e)
        print("Using fallback interview questions.")

        return {
            "questions": FALLBACK_QUESTIONS
        }