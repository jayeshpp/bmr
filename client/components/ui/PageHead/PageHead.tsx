import { Typography } from "../Typography";

export const PageHead = ({ title }: { title: string }) => (
  <div className="py-0">
    <Typography variant="h1" component="h1">
      {title}
    </Typography>
  </div>
);
