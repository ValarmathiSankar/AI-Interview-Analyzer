def interview_prompt(skills):

    return f"""
You are a Senior Technical Interviewer.

Generate EXACTLY 10 interview questions.

Return ONLY valid JSON.

Format:

{{
    "questions":[
        "Question 1",
        "Question 2"
    ]
}}

Rules:

- No markdown
- No explanation
- No answers
- Only JSON

Skills:

{', '.join(skills)}
"""

def evaluation_prompt(question, answer):

    return f"""
You are an expert technical interviewer.

Evaluate the candidate's answer.

Question:
{question}

Answer:
{answer}

Return ONLY valid JSON.

Format:

{{
    "technical_score": 0,
    "communication_score": 0,
    "overall_score": 0,
    "feedback": "..."
}}

Rules:

- Scores must be between 0 and 10.
- Give short constructive feedback.
- Return ONLY JSON.
"""