from app.utils.load_skills import load_skills


def extract_skills(text: str):
    """
    Extract skills from cleaned resume text.
    """

    skills_database = load_skills()

    detected_skills = []

    text = text.lower()

    for skill in skills_database:

        if skill.lower() in text:

            detected_skills.append(skill)

    return sorted(list(set(detected_skills)))