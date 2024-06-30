import { Div } from "@/components/Div";
import { ProfileItem } from "./ProfileItem";

export const VehicleInfoView = (profile: any) => {
  const { vehicleInfo } = profile;

  return (
    <Div>
      {vehicleInfo.map(({ make, model, registrationNumber }: any) => (
        <>
          <ProfileItem title="Make" value={make} />
          <ProfileItem title="Model" value={model} />
          <ProfileItem title="Registration" value={registrationNumber} />
        </>
      ))}
    </Div>
  );
};
