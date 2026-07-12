from app.services.speech_service import transcribe_audio

text = transcribe_audio("sample.wav")

print("\n========== TRANSCRIPT ==========\n")
print(text)