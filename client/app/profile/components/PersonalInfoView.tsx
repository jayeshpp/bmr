import { Div } from "@/components/Div";
import { Typography } from "@/components/ui/Typography";
import { format } from "date-fns";
import Image from "next/image";

export const PersonalInfoView = ({ personalInfo, fullName }: any) => {
  const { dob, profilePic, occupation, nickName } = personalInfo;
  return (
    <Div className="text-center">
      <Image
        src={"/assets/images/placeholder.jpg"}
        width={100}
        height={100}
        alt={"fullName"}
        className="m-auto"
      />
      <Typography variant="h3" weight={600}>
        {fullName}
        {nickName && nickName}
      </Typography>
      <Typography>{dob ? format(dob, "yyyy-MM-dd") : "-"}</Typography>
      <Typography>{occupation}</Typography>
    </Div>
  );
};
