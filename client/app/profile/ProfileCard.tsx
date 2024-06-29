import Image from "next/image";

interface IProfileCard {
  fullName: string;
}

export const ProfileCard = ({ fullName }: IProfileCard) => {
  return (
    <div className="text-center">
      <Image
        src={`/assets/images/placeholder.jpg`}
        width={100}
        height={100}
        alt={"fullName"}
        className="m-auto"
      />
      <div className="font-bold">{fullName}</div>
    </div>
  );
};
