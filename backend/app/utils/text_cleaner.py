import re


def clean_resume_text(text: str) -> str:
    """
    Clean extracted resume text by removing
    unnecessary spaces and line breaks.
    """

    text = text.replace("\n", " ")

    text = re.sub(r"\s+", " ", text)

    text = text.strip()

    return text