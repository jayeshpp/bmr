export const getFullName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return [firstName, lastName].join(' ');
};
