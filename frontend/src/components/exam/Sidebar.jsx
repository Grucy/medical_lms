import React from "react";
import Question from "./Question";
import ExitIcon from "../icons/ExitIcon";
import { useNavigate } from "react-router-dom";

function Sidebar({ currentQuestion, setQuestion, questions, closeSideBar }) {
  const navigator = useNavigate()
  return (
    <div className="flex flex-col h-full">
      <div className="text-center text-white p-8 pb-4 font-bold text-lg">
        QI OPHTALMOLOGIE
      </div>
      <div className="flex-1 overflow-auto">
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            num={index + 1}
            active={index === currentQuestion}
            onClick={() => {
              setQuestion(index);
              if (closeSideBar) closeSideBar();
            }}
          />
        ))}
      </div>
      <div className="text-center text-white p-8 flex">
        <div className="flex-1">TERMINER</div>
        <button onClick={()=>navigator(-1)}>
          <ExitIcon />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
