import { Alert } from "@/components/Alert";
import { ProfileItem } from "./ProfileItem";
import { format } from "date-fns";

export const ProfileInfo = ({ profile, errorMessage }: any) => {
  if (!profile) return <Alert message={errorMessage} />;

  const {
    dob,
    contactNumber,
    emergencyNumber1,
    emergencyNumber2,
    whatsappNumber,
    relationshipStatus,
    bloodGroup,
    readyToDonateBlood,
    nativeInKerala,
    area,
    doorNumber,
    apartmentNameOrBuildingNumber,
    addressLine1,
    addressLine2,
    pinCode,
    nearestLandmark,
    organization,
    occupation,
    drivingLicenseNumber,
    drivingLicenseValidity,
    motorcycleMake,
    motorcycleModel,
    motorcycleRegistrationNumber,
    rearViewMirrors,
    ridingGears,
    ridingGroupMember,
    youtubeChannel,
    volunteerPreference,
  } = profile;

  const birthDay = format(dob, "yyyy-MM-dd");
  const DLValidity = format(drivingLicenseValidity, "yyyy-MM-dd");
  return (
    <>
      <h2 className="text-xl font-semibold pt-5 pb-2">Personal Information</h2>
      <ProfileItem title="Date of Birth" value={birthDay} />
      <ProfileItem title="Contact number" value={contactNumber} />
      <ProfileItem title="Emergency number 1" value={emergencyNumber1} />
      <ProfileItem title="Emergency number 2" value={emergencyNumber2} />
      <ProfileItem title="Whatsapp Number" value={whatsappNumber} />
      <ProfileItem title="Relationship Status" value={relationshipStatus} />
      <ProfileItem title="Blood Group" value={bloodGroup} />
      <ProfileItem title="Native in Kerala" value={nativeInKerala} />
      <ProfileItem title="Area" value={area} />
      <ProfileItem
        title="Address"
        value={[
          doorNumber,
          apartmentNameOrBuildingNumber,
          addressLine1,
          addressLine2,
          pinCode,
        ].join(", ")}
      />
      <ProfileItem title="Landmark" value={nearestLandmark} />
      <ProfileItem title="Organization" value={organization} />
      <ProfileItem title="Occupation" value={occupation} />

      <ProfileItem
        title="Ready to donate blood"
        value={readyToDonateBlood ? "Yes" : "No"}
      />
      <h2 className="text-xl font-semibold pt-5 pb-2">Ride Information</h2>
      <ProfileItem title="DL number" value={drivingLicenseNumber} />
      <ProfileItem title="DL validity" value={DLValidity} />
      <ProfileItem title="Motorcycle make" value={motorcycleMake} />
      <ProfileItem title="Motorcycle model" value={motorcycleModel} />
      <ProfileItem
        title="Motorcycle registration"
        value={motorcycleRegistrationNumber}
      />
      <ProfileItem
        title="Rear view mirror"
        value={rearViewMirrors ? "Yes" : "No"}
      />
      <ProfileItem title="Riding gears" value={ridingGears.join(",")} />

      <h2 className="text-xl font-semibold pt-5 pb-2">Other Information</h2>
      <ProfileItem
        title="Other riding group memebr"
        value={ridingGroupMember ? "Yes" : "No"}
      />
      <ProfileItem title="Youtube Channel" value={youtubeChannel} />
      <ProfileItem
        title="Valunteering preference"
        value={volunteerPreference}
      />
    </>
  );
};
