import { createContext, useState } from "react";

export const InterviewContext = createContext();

export function InterviewProvider({ children }) {

  const [analysis, setAnalysis] = useState(null);

  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  return (
    <InterviewContext.Provider
      value={{
        analysis,
        setAnalysis,

        questions,
        setQuestions,

        currentQuestion,
        setCurrentQuestion,

        answers,
        setAnswers,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
}