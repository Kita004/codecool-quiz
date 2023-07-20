import { Capitalize } from "../utils/capitalize";

export const Select = ({ label, options, setter }) => {
  const handleSelection = (value) => {
    setter(value);
  };

  return (
    <div
      id={label + "-select-container"}
      className="select-container flex-col-container"
    >
      <label htmlFor={label + "-select"}>{Capitalize(label)}</label>
      <select
        id={label + "-select"}
        value={"default"}
        onChange={(e) => handleSelection(e.target.value)}
      >
        <option value="default" hidden>
          ...
        </option>
        {label === "career"
          ? options.map((careerName) => (
              <option key={careerName} value={careerName}>
                {careerName}
              </option>
            ))
          : options.map((zodiac) => {
              return (
                <option key={zodiac.name} value={zodiac.name}>
                  {zodiac.name} | {zodiac.date}
                </option>
              );
            })}
      </select>
    </div>
  );
};
