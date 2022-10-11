import useMultipartForm from "./hooks/useMultipartForm";

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import StepWrapper from "./components/StepWrapper";
import UserInfo from "./interfaces/userInfo";

const App = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    first_name: "",
    last_name: "",
    age: 0,
    street: "",
    city: "",
    state: "",
    zip: 0,
    email: "",
    password: "",
  });

  const steps = useMemo(
    () => [
      {
        title: "Personal Information",
        step: FirstStep,
      },
      {
        title: "Address",
        step: SecondStep,
      },
      {
        title: "Account Creation",
        step: ThirdStep,
      },
    ],
    []
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUserInfo((prev: UserInfo) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  const { stepIndex, setIndex, next, back } = useMultipartForm(steps);

  function handleNext(event: FormEvent) {
    event.preventDefault();

    next();
  }

  function handleBack(event: FormEvent) {
    event.preventDefault();

    back();
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(userInfo);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="relative border-black border-2 mt-10 p-8 mx-auto w-1/2 rounded overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 flex items-center">
        {steps.map((_, index) => (
          <div
            key={index}
            onClick={() => setIndex(index)}
            className={`flex-1 border-black border-r-0 border-collapse ${
              index <= stepIndex ? "bg-black border" : "border"
            } h-2 cursor-pointer`}
          ></div>
        ))}
      </div>

      <div className="absolute top-2 right-1 font-extrabold">
        {stepIndex + 1}/{steps.length}
      </div>

      <div className="mb-10">
        <StepWrapper title={steps[stepIndex].title}>
          {steps[stepIndex].step({ userInfo, handleChange })}
        </StepWrapper>
      </div>

      <div className="flex gap-4 justify-end">
        {stepIndex > 0 && (
          <button
            className="border-black border-2 py-1 px-2 rounded"
            onClick={handleBack}
          >
            Back
          </button>
        )}
        {stepIndex === steps.length - 1 ? (
          <button className="border-black border-2 py-1 px-2 rounded">
            Finish
          </button>
        ) : (
          <button
            className="border-black border-2 py-1 px-2 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </form>
  );
};

export default App;
