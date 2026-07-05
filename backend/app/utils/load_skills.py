import json


def load_skills():
    """
    Load technical skills from skills.json
    """

    with open("data/skills.json", "r", encoding="utf-8") as file:
        skills = json.load(file)

    return skills