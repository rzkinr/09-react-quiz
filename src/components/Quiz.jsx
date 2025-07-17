import { useState } from "react";
import Qeustions from "../questions.js";

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Currently active question</p>;
}
