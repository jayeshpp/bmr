export const getFullName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return [firstName, lastName].join(' ');
};

export const debounce = (fn: (...args: any[]) => void, delay = 300) => {
  let timer: any;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
