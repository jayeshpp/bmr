import { useAuth } from "@/context/AuthProvider";
import { getFullName } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../ui/Typography";

export const UserProfileCard = () => {
  const {
    user: { valid, firstName, lastName, email },
  } = useAuth();

  if (!valid)
    return (
      <div className="bg-primary-main dark:bg-secondary-main p-4 flex gap-2 items-center">
        <Link href="/login" className="block p-2">
          Login
        </Link>{" "}
        /{" "}
        <Link href="/register" className="block p-2">
          Register
        </Link>
      </div>
    );

  const fullName = getFullName({ firstName, lastName });

  return (
    <div className="bg-primary-main dark:bg-secondary-main p-4 relative z-[1]">
      <Image
        src={`/assets/images/placeholder.jpg`}
        width={100}
        height={100}
        alt={fullName}
      />
      <Typography className="pt-3" variant="h2">{fullName}</Typography>
      <Typography>{email}</Typography>
    </div>
  );
};
