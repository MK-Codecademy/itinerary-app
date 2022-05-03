interface button {
  text: string;
  color: string;
  filled?: boolean;
}

// <Button text="Cancel" color="yellow" filled />
// or 
// <Button text="Cancel" color="yellow" filled="true" />
// output : yellow filled button

// <Button text="Cancel" color="yellow" />
// output : yellow outline button

const Button = ({ text, color, filled }: button) => {
  return (
      <button className={`btn btn-${color}-${filled ? "filled" : "outline"}`}>
        {text}
      </button>
  );
};

export default Button;