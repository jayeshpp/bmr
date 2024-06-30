import { Div } from "@/components/Div";
import { ProfileItem } from "./ProfileItem";

export const ContactInfoView = (profile: any) => {
  const {
    contactInfo: {
      countryCode,
      mobileNumber,
      whatsappNumber,
      homeAddress,
      officeAddress,
    },
  } = profile;

  return (
    <Div>
      <ProfileItem
        title="Mobile Number"
        value={`${countryCode} ${mobileNumber}`}
      />
      <ProfileItem
        title="Whatsapp Number"
        value={`${countryCode} ${whatsappNumber}`}
      />
      <ProfileItem title="Home Address" value={homeAddress} />
      <ProfileItem title="Office Address" value={officeAddress} />
    </Div>
  );
};
