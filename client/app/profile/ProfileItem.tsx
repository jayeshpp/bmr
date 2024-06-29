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
    <div className="py-2">
      <div className="text-gray-600">{title}</div>
      {description && <div>{description}</div>}
      <div className="font-semibold">{value}</div>
    </div>
  );
};
