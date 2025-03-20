import { ReactNode } from "react";

interface BaseCardProps {
  text: string;
  subtext: string;
  children?: ReactNode;
  plusButton?: boolean;
  onPlusClick?: () => void;
}

export const BaseCard = ({
  text,
  children,
  subtext,
  plusButton,
  onPlusClick,
}: BaseCardProps) => {
  return (
    <div className="bg-darkerQuinary min-h-[calc(50% - 20px)] max-h-[calc(50% - 20px)] py-5 w-full md:w-[40%] rounded-2xl shadow-2xl">
      <div className="h-full flex flex-col">
        <div className="font-semibold lg:text-4xl sm:text-3xl pt-5 pl-10">
          <div className="flex justify-between items-center">
            <h1 className="text-primary">{text}</h1>
            {plusButton && (
              <div
                className="rounded-full bg-secondary hover:bg-primary h-[2rem] w-[2rem] mr-10 flex justify-center items-center cursor-pointer hover:bg-opacity-80 transition-all"
                onClick={onPlusClick}
              >
                <div className="absolute text-darkest text-3xl font-bold pb-1">
                  +
                </div>
              </div>
            )}
          </div>
          <h1 className="text-secondary lg:text-xl pt-3">{subtext}</h1>
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
