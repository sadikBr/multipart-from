import { useState } from "react";

interface FormStepInfo {
  title: string;
  step: Function
}

const useMultipartForm = (formSteps: FormStepInfo[]) => {
  const [stepIndex, setStepIndex] = useState(0);

  function next() {
    if (stepIndex >= formSteps.length - 1) return;

    setStepIndex(prev => prev + 1);
  }

  function back() {
    if (stepIndex <= 0) return;

    setStepIndex(prev => prev - 1);
  }

  function setIndex(value: number) {
    setStepIndex(value);
  }

  return {
    stepIndex,
    setIndex,
    next,
    back
  }
}

export default useMultipartForm;