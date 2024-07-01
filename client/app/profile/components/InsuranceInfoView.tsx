import { Div } from "@/components/Div";
import { ProfileItem } from "./ProfileItem";

export const InsuranceInfoView = (profile: any) => {
  const {
    insuranceInfo: { company, number, validity },
  } = profile;

  return (
    <Div>
      <ProfileItem title="Comapany" value={company} />
      <ProfileItem title="Number" value={number} />
      <ProfileItem title="Validity" value={validity} />
    </Div>
  );
};
