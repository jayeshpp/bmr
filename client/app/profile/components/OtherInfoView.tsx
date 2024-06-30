import { Div } from "@/components/Div";
import { ProfileItem } from "./ProfileItem";

export const OtherInfoView = (profile: any) => {
  const {
    otherInfo: { nativeInKerala, area, volunteerPreference, specialNote },
  } = profile;

  return (
    <Div>
      <ProfileItem title="Native in Kerala" value={nativeInKerala} />
      <ProfileItem title="Stay in Bangalore" value={area} />
      <ProfileItem
        title="Volunteer BMRiders in your free time"
        value={volunteerPreference}
      />
      <ProfileItem title="Special notes to BMRiders" value={specialNote} />
    </Div>
  );
};
