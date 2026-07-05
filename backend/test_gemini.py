from app.ai.question_generator import generate_questions

skills = [
    "Python",
    "FastAPI",
    "SQL",
    "Machine Learning"
]

questions = generate_questions(skills)

print(questions)