import React, { useEffect, useState } from "react";

function Question({ question, num, active, onClick }) {
  const [discordance, setDiscordance] = useState(null);
  useEffect(() => {
    if (question.result) {
      const correctItems = question.result.choices.filter(
        ({ correctAnswer, yourAnswer }) => correctAnswer !== yourAnswer
      );
      setDiscordance(correctItems.length);
    }
  }, [question]);
  var color;
  if (!question.result) {
    color='text-white';
  } else if (discordance === 0) {
    color= 'text-green-light';
  } else if (discordance < 3) {
    color= 'text-orange-light'
  } else {
    color= 'text-red-light';
  }
  return (
    <div onClick={onClick} className={`${active && "bg-primary-700"} hover:cursor-pointer mx-8 mb-1 p-1 min-w-fit text-left rounded-md text-primary-100 hover:bg-primary-700 active:bg-primary-600 focus:bg-primary-600`}>
      <i className={`ri-checkbox-blank-circle-fill px-2 ${color}`}></i>
      Question {num}
    </div>
  );
}

export default Question;
