import os

from app.utils.pdf_reader import extract_text_from_pdf
from app.utils.text_cleaner import clean_resume_text
from app.utils.skill_extractor import extract_skills

UPLOAD_FOLDER = "uploads"


def process_resume(filename: str):

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    extracted_text = extract_text_from_pdf(pdf_path)

    cleaned_text = clean_resume_text(extracted_text)

    detected_skills = extract_skills(cleaned_text)

    return {
        "filename": filename,
        "skills": detected_skills
    }