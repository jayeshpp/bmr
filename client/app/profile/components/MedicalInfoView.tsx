import { Div } from "@/components/Div";
import { ProfileItem } from "./ProfileItem";

export const MedicalInfoView = (profile: any) => {
  const {
    medicalInfo: {
      bloodGroup,
      alergies,
      preExistingMedicalCondition,
      climateSensitivities,
      medicationRequirements,
    },
  } = profile;

  return (
    <Div>
      <ProfileItem title="Blood Group" value={bloodGroup} />
      <ProfileItem title="Allergies" value={alergies} />
      <ProfileItem
        title="Pre-existing Medical Conditions"
        value={preExistingMedicalCondition}
      />
      <ProfileItem title="Climate Sensitivities" value={climateSensitivities} />
      <ProfileItem
        title="Medication Requirements"
        value={medicationRequirements}
      />
    </Div>
  );
};
