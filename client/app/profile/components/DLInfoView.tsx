import { Div } from "@/components/Div";
import { ProfileItem } from "./ProfileItem";

export const DLInfoView = (profile: any) => {
  const {
    DLInfo: { DLNumber, DLIssuedAt, DLValidUpTo, DLFile },
  } = profile;

  return (
    <Div>
      <ProfileItem title="Number" value={DLNumber} />
      <ProfileItem title="Issued At" value={DLIssuedAt} />
      <ProfileItem title="Valid Up To" value={DLValidUpTo} />
      <ProfileItem title="File" value={DLFile} />
    </Div>
  );
};
