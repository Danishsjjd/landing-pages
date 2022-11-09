type Props = {
  title: string;
};

const HeadingText = ({ title }: Props) => {
  return (
    <div className="mx-auto my-10 max-w-7xl items-center gap-10 px-4 sm:my-20 md:flex">
      <div className="border-l-[16px] border-l-primary-main py-3 pl-5 text-3xl font-medium text-secondary-main lg:max-w-2xl lg:text-5xl">
        {title}
      </div>
      <div>
        <p className="mt-5 max-w-xl text-sm md:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
          amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi
          tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed.
        </p>
      </div>
    </div>
  );
};

export default HeadingText;
