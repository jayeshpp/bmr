import { Div } from "@/components/Div";
import { ProfileItem } from "./ProfileItem";

export const RideExperienceInfoView = (profile: any) => {
  const { longestRideExperience, ridingGroupMember } = profile;

  return (
    <Div>
      <ProfileItem
        title="Longest Ride Completed
"
        description="The longest distance you've ridden."
        value={longestRideExperience}
      />
      <ProfileItem
        title="Part of any other riding groups"
        value={ridingGroupMember}
      />
    </Div>
  );
};
