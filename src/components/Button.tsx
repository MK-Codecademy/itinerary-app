interface button {
  text: string;
  outline: string;
  color: string;
}

const Button = ({ text, outline, color }: button) => {

  return (
      <button className={`btn btn-${color}-${outline}`}>
        {text}
      </button>
  );
};

export default Button;