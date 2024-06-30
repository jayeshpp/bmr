interface StepperItemProps {
  title: string;
  details: string;
  completed?: boolean;
  children: React.ReactNode;
}

interface StepperProps {
  children: React.ReactNode;
}

export const TimelineStepper: React.FC<StepperProps> = ({ children }) => {
  return (
    <ol className="relative text-gray-700 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {children}
    </ol>
  );
};

export const TimelineStepperItem: React.FC<StepperItemProps> = ({
  title,
  details,
  children,
  completed = false,
}) => {
  return (
    <li className="mb-10 ms-6">
      <span
        className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 ${completed ? "bg-green-200 dark:bg-green-900" : "bg-gray-100 dark:bg-gray-700"}`}
      >
        {completed ? (
          <svg
            className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
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
          <svg
            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
          </svg>
        )}
      </span>
      <h3 className="font-medium leading-tight">{title}</h3>
      <p className="text-sm">{details}</p>
      <div className="pt-3">{children}</div>
    </li>
  );
};
