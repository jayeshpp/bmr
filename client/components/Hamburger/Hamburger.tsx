import { SyntheticEvent } from "react";

interface IHamburger {
  onClick: (event: SyntheticEvent<Element>) => void;
}
export const Hamburger = ({ onClick }: IHamburger) => {
  return (
    <div onClick={onClick} className="flex flex-col gap-1 cursor-pointer">
      <span className="h-[2px] bg-primary-main dark:bg-secondary-main w-5 rounded-md"></span>
      <span className="h-[2px] bg-primary-main dark:bg-secondary-main w-5 rounded-md"></span>
      <span className="h-[2px] bg-primary-main dark:bg-secondary-main w-5 rounded-md"></span>
    </div>
  );
};
