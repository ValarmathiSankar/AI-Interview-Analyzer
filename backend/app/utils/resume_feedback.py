def generate_resume_feedback(text, skills):

    suggestions = []

    text_lower = text.lower()

    # Cloud Skills
    cloud_skills = ["aws", "azure", "gcp"]

    if not any(skill in text_lower for skill in cloud_skills):
        suggestions.append(
            "Consider learning cloud technologies like AWS, Azure, or GCP."
        )

    # Projects
    if "project" in text_lower:
        suggestions.append(
            "Add measurable achievements to your project descriptions (e.g., improved accuracy by 15%)."
        )

    # GitHub
    if "github" not in text_lower:
        suggestions.append(
            "Include your GitHub profile."
        )

    # Portfolio
    if "portfolio" not in text_lower and "framer" not in text_lower:
        suggestions.append(
            "Add a portfolio website."
        )

    # Technical Skills
    if len(skills) < 12:
        suggestions.append(
            "Expand your technical skill set with more relevant technologies."
        )

    return suggestions