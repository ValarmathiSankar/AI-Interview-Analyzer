import os

from app.utils.pdf_reader import extract_text_from_pdf
from app.utils.text_cleaner import clean_resume_text

UPLOAD_FOLDER = "uploads"


def process_resume(filename: str):

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    extracted_text = extract_text_from_pdf(pdf_path)

    cleaned_text = clean_resume_text(extracted_text)

    return {
        "filename": filename,
        "cleaned_text": cleaned_text
    }