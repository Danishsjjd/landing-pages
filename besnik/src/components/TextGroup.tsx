import Button from "./Button";

type Props = {};

const TextGroup = (props: Props) => {
  return (
    <div className="mx-auto max-w-lg grid-cols-3 items-center justify-between border border-primary-para/10 pb-6 sm:grid sm:pb-0 lg:mx-0">
      <div className="space-y-1 p-2">
        <h2 className="text-lg font-medium text-primary-dark">Address</h2>
        <p>587 Bridgeton Road</p>
      </div>
      <div className="space-y-1 p-2">
        <h2 className="text-lg font-medium text-primary-dark">City</h2>
        <p>El Paso, Texas</p>
      </div>
      <div>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default TextGroup;
