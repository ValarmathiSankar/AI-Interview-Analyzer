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