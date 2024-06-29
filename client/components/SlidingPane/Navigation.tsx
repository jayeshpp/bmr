import { navigations } from "@/constants/navigations";
import Link from "next/link";

interface INavigation {
  isAuthenticated: boolean;
}

export const Navigation = ({ isAuthenticated }: INavigation) => {
  return (
    <div className="p-0">
      {navigations.map(({ label, path, isPrivate }) => {
        if (isPrivate && !isAuthenticated) {
          return null;
        }
        return (
          <div key={label} className="py-1">
            <Link href={path} className="block px-4 py-2 hover:bg-gray-100">
              {label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
