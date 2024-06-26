type Step = {
  label: string;
  icon: JSX.Element;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <ol className="flex items-center w-full">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex w-full items-center ${
            index < steps.length - 1
              ? 'after:content-[""] after:w-full after:h-1 after:border-b after:border-4 after:inline-block'
              : ""
          } ${
            index <= currentStep
              ? "text-blue-600 dark:text-blue-500 after:border-blue-100 dark:after:border-blue-800"
              : "after:border-gray-100 dark:after:border-gray-700"
          }`}
        >
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
              index <= currentStep
                ? "bg-blue-100 dark:bg-blue-800"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            {index <= currentStep ? (
              <svg
                className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-600 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            ) : (
              step.icon
            )}
          </span>
        </li>
      ))}
    </ol>
  );
};
