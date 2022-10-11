import { ReactElement } from "react";

interface StepWrapperProps {
  title: string;
  children: ReactElement;
}

const StepWrapper = ({ title, children }: StepWrapperProps) => {
  return (
    <div className="w=full">
      <h1 className="text-3xl mb-8 text-center">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default StepWrapper;
