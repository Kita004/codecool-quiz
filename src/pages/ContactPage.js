import { useNavigate } from "react-router-dom";

export const ContactPage = ({ children }) => {
  const nav = useNavigate();
  const onBack = () => {
    nav(-1);
  };
  return (
    <div id="contact-page">
      <h2>My...</h2>
      <div id="contact-input-container" className="flex-container">
        {children}
      </div>
      <button onClick={() => onBack()}>Back</button>
      <button>Next</button>
    </div>
  );
};
