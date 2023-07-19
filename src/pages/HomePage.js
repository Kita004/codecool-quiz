import {MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const nextPage = "/quiz";
    const nav = useNavigate();

    return <div onClick={() => nav(nextPage)} id="greeting-msg" className="flex-container greeting-msg">
        <MdOutlineKeyboardDoubleArrowLeft className="decorative-arrow"/>
        <h1>Tell My Future!</h1>
        <MdOutlineKeyboardDoubleArrowRight className="decorative-arrow"/>
    </div>
}