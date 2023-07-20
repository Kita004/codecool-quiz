import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const QuizPage = ({ fetchAnswer, children }) => {
  const nav = useNavigate();
  const onNext = () => {
    fetchAnswer();
    nav("/contact");
  };
  return (
    <div id="quiz-page">
      <h2>My...</h2>
      <div id="quiz-select-container" className="flex-container">
        {children}
      </div>
      <button onClick={() => onNext()}>
        Next <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};
