import { Div } from "@/components/Div";
import { Typography } from "@/components/ui/Typography";
import { FC } from "react";

interface IProfileItem {
  title: string;
  description?: string;
  value: string | number;
}

export const ProfileItem: FC<IProfileItem> = ({
  title,
  description,
  value,
}) => {
  return (
    <Div className="py-2">
      <Typography variant="caption">{title}</Typography>
      {description && (
        <Typography variant="bodySmall">{description}</Typography>
      )}
      <Typography weight={600} className="pt-1">
        {typeof value === "boolean" ? (value ? "YES" : "NO") : value ? value : "-"}
      </Typography>
    </Div>
  );
};
