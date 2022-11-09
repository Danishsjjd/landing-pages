import Button from "./Button";

type Props = {
  inputClass?: string;
  containerClass?: string;
};

const InputWithButton = ({ inputClass, containerClass }: Props) => {
  return (
    <div
      className={`flex min-h-[3.5rem] max-w-md bg-white p-2 ${
        containerClass ? containerClass : ""
      }`}
    >
      <input
        type="text"
        className={`grow bg-transparent p-2 px-3 outline-none ${
          inputClass ? inputClass : ""
        }`}
        placeholder="Search Restaurant, Food..."
      />
      <Button>Go</Button>
    </div>
  );
};

export default InputWithButton;
