def calculate_ats_score(text, skills):

    score = 0

    strengths = []

    improvements = []

    # Contact Details

    if "@" in text:
        score += 5
    else:
        improvements.append("Add Email")

    if "+91" in text or "phone" in text.lower():
        score += 5
    else:
        improvements.append("Add Phone Number")

    # Education

    if "b.tech" in text.lower():
        score += 10
        strengths.append("Education Section Present")

    else:
        improvements.append("Education Missing")

    if "cgpa" in text.lower():
        score += 5

    # Skills

    if len(skills) >= 15:

        score += 30
        strengths.append("Strong Technical Skills")

    elif len(skills) >= 10:

        score += 20

    elif len(skills) >= 5:

        score += 10

    else:

        improvements.append("Add More Skills")

    # Projects

    if "project" in text.lower():

        score += 20
        strengths.append("Projects Included")

    else:

        improvements.append("Projects Missing")

    # Internship

    if "intern" in text.lower():

        score += 15
        strengths.append("Internship Experience")

    else:

        improvements.append("Add Internship")

    # Certifications

    if "certificate" in text.lower() or "certification" in text.lower():

        score += 10
        strengths.append("Certifications Included")

    else:

        improvements.append("Add Certifications")

    return {

        "ats_score": score,

        "strengths": strengths,

        "improvements": improvements

    }