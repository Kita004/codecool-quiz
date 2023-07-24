export const Input = ({ content, setter, type = "text" }) => {
  const handleChange = (value) => {
    setter(value);
  };
  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        id={content + "-input"}
        type={type}
        placeholder={content + "..."}
      />
      {/* divider */}
    </div>
  );
};
