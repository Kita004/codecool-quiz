import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import { Select } from "./components/Select";
import { careers, zodiacs } from "./data/selectOptions";
import { QuizPage } from "./pages/QuizPage";
import { ContactPage } from "./pages/ContactPage";
import { Input } from "./components/Input";

function App() {
  const [errMsg, setErrMsg] = useState();
  const [careerValue, setCareerValue] = useState(null);
  const [zodiacValue, setZodiacValue] = useState(null);
  const [answer, setAnswer] = useState();
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();

  const checkValidity = (toValidate) => {
    const message = "Fill out Everything!!";
    let values;

    if (toValidate === "quiz") {
      values = [careerValue, zodiacValue];
      console.log("quiz", values);
    } else {
      values = [nameInput, emailInput];
      console.log("contact");
    }

    const isAllValid = values.every((val) => val !== null);

    console.log("isAllValid value: ", isAllValid);
    if (isAllValid) {
      setErrMsg(null);
      console.log("Is All Valid");
    } else {
      setErrMsg(message);
      console.log("Not All Valid");
    }
    return isAllValid;
  };

  // naming convention >> handleSelection etc (?)
  const fetchAnswer = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/answers?career=${careerValue}&zodiac=${zodiacValue}`
      );
      setAnswer(response.data[0].answer);
    } catch (err) {
      console.info("Error when fetching Answer..", err);
    }
  };

  return (
    <div className="App">
      <Router>
        {careerValue} | {zodiacValue}
        <br />
        {nameInput} | {emailInput}
        <br />
        {errMsg}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/quiz"
            element={
              <QuizPage
                fetchAnswer={fetchAnswer}
                checkValidity={checkValidity}
                errMsg={errMsg}
              >
                <Select
                  label={"career"}
                  options={careers}
                  setter={setCareerValue}
                />
                <Select
                  label={"horoscope"}
                  options={zodiacs}
                  setter={setZodiacValue}
                />
              </QuizPage>
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage>
                <Input content="Name" setter={setNameInput} />
                <Input content="Email" type="email" setter={setEmailInput} />
              </ContactPage>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
