import os

from app.utils.pdf_reader import extract_text_from_pdf


UPLOAD_FOLDER = "uploads"


def process_resume(filename: str):

    pdf_path = os.path.join(UPLOAD_FOLDER, filename)

    extracted_text = extract_text_from_pdf(pdf_path)

    return {
        "filename": filename,
        "text": extracted_text
    }