import os

from app.utils.pdf_reader import extract_text_from_pdf
from app.utils.text_cleaner import clean_resume_text
from app.utils.skill_extractor import extract_skills
from app.utils.ats_calculator import calculate_ats_score

UPLOAD_FOLDER = "uploads"


def process_resume(filename):

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    extracted_text = extract_text_from_pdf(pdf_path)

    cleaned_text = clean_resume_text(extracted_text)

    detected_skills = extract_skills(cleaned_text)

    ats_result = calculate_ats_score(
        cleaned_text,
        detected_skills
    )

    return {

        "filename": filename,

        "skills": detected_skills,

        "ats_score": ats_result["ats_score"],

        "strengths": ats_result["strengths"],

        "improvements": ats_result["improvements"]

    }