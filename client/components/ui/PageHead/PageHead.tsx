import { Typography } from "../Typography";

export const PageHead = ({ title }: { title: string }) => (
  <div className="border-b border-gray-200 py-3">
    <Typography variant="h1" component="h1">{title}</Typography>
  </div>
);
