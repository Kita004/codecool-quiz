import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const greetingMsg = "* insert greeting message *";
  const nextPage = "/quiz";
  const nav = useNavigate();

  return (
    <div id="home-page" className="flex-container greeting-msg">
      <MdOutlineKeyboardDoubleArrowLeft className="decorative-arrow" />
      <h1 onClick={() => nav(nextPage)}>{greetingMsg}</h1>
      <MdOutlineKeyboardDoubleArrowRight className="decorative-arrow" />
    </div>
  );
};
