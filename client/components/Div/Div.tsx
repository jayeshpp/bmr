interface IDiv {
  children?: React.ReactNode;
  className?: string;
}
export const Div = ({ children, className }: IDiv) => {
  return <div className={`${className}`}>{children}</div>;
};
