export const getFullName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string => {
  return [firstName, lastName].join(" ");
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/* export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 300,
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout | null;
  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(...args), delay);
  };
};
 */
