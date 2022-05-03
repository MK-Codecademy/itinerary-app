import Button from "./Button";

interface CardProps {
  title: string;
  buttonText: string;
}

const Card = ({ title, buttonText }: CardProps) => {
  return (
    <div className="flex">
      <div className="block rounded-lg shadow-lg bg-white">
        <div className="my-32 mx-24 text-center">
          <h2 className="text-gray-900 text-xl font-medium mb-8">{title}</h2>
          <Button text={buttonText} color="purple" />
        </div>
      </div>
    </div>
  );
};

export default Card;
