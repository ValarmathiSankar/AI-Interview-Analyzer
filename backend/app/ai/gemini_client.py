import os

from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

# Read API Key
API_KEY = os.getenv("GEMINI_API_KEY")
print("API KEY:", API_KEY[:10])
# Create Gemini Client
client = genai.Client(api_key=API_KEY)


def ask_gemini(prompt: str):
    """
    Sends a prompt to Gemini and returns the response.
    """

    try:

        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=prompt,
        )

        return response.text

    except Exception as e:

        raise Exception(str(e))