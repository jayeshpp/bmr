import { Div } from "@/components/Div";
import { Typography } from "@/components/ui/Typography";
import { ProfileItem } from "./ProfileItem";

export const EmergencyContactInfoView = (profile: any) => {
  const {
    emergencyContactInfo: {
      emergencyContactNameInFamily,
      emergencyContactNumberInFamily,
      emergencyContactRelationship,
      emergencyContactNameInBangalore,
      emergencyContactNumberInBangalore,
      emergencyContactNameInBMR,
      location,
    },
  } = profile;

  return (
    <Div>
      <ProfileItem
        title="Emergency Contact Name in Family"
        value={emergencyContactNameInFamily}
      />
      <ProfileItem
        title="Emergency Contact Number in Family"
        value={emergencyContactNumberInFamily}
      />
      <ProfileItem
        title="Relationship with the above person"
        value={emergencyContactRelationship}
      />
      <ProfileItem
        title="Emergency Contact Person in Bangalore"
        value={emergencyContactNameInBangalore}
      />
      <ProfileItem
        title="Emergency Contact Number in Bangalore"
        value={emergencyContactNumberInBangalore}
      />
      <ProfileItem
        title="Friends who can be contacted in BMR "
        value={emergencyContactNameInBMR}
      />
      <ProfileItem title="Your Current Location " value={location} />
    </Div>
  );
};
