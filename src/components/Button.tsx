interface button {
  text: string;
  className: string;
}

const Button = (props: button) => {
  return (
    <>
      <button className={props.className}>
        {props.text}
      </button>
    </>
  );
};

export default Button;