import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import { Select } from "./components/Select";
import { careers, zodiacs } from "./data/selectOptions";
import { QuizPage } from "./pages/QuizPage";

function App() {
  const [careerValue, setCareerValue] = useState();
  const [zodiacValue, setZodiacValue] = useState();
  const [answer, setAnswer] = useState();

  const checkValidity = (...values) => {
    let isValid;
    for (const val of values) {
      if (val) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    return isValid;
  };

  const fetchAnswer = async () => {
    const isValuesValid = checkValidity(careerValue, zodiacValue);

    if (!isValuesValid) {
      console.log("Fill out Everything!!");
    } else {
      try {
        const response = await axios.get(
          `http://localhost:3500/answers?career=${careerValue}&zodiac=${zodiacValue}`
        );
        setAnswer(response.data[0].answer);
      } catch (err) {
        console.info("Error when fetching Answer..", err);
      }
    }
  };

  return (
    <div className="App">
      <Router>
        {careerValue} | {zodiacValue}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/quiz"
            element={
              <QuizPage fetchAnswer={fetchAnswer}>
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
          <Route path="/contact" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
