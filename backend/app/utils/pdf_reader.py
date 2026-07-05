import fitz  # PyMuPDF


def extract_text_from_pdf(pdf_path: str) -> str:
    """
    Reads a PDF file and returns all extracted text.
    """

    document = fitz.open(pdf_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return text