import { TimelineStepper, TimelineStepperItem } from "@/components/ui/Stepper";
import { ContactInfoView } from "./components/ContactInfoView";
import { EmergencyContactInfoView } from "./components/EmergencyContactInfoView";
import { VehicleInfoView } from "./components/VehicleInfoView";
import { DLInfoView } from "./components/DLInfoView";
import { InsuranceInfoView } from "./components/InsuranceInfoView";
import { MedicalInfoView } from "./components/MedicalInfoView";
import { RideExperienceInfoView } from "./components/RideExperienceInfoView";
import { OtherInfoView } from "./components/OtherInfoView";

const stepComponents = [
  {
    id: 1,
    title: "Contact Information",
    subTitle: "",
    component: ContactInfoView,
  },
  {
    id: 3,
    title: "Emergency Contact Information",
    subTitle: "",
    component: EmergencyContactInfoView,
  },
  {
    id: 5,
    title: "Vehicle Information",
    subTitle: "",
    component: VehicleInfoView,
  },
  {
    id: 6,
    title: "DL Information",
    subTitle: "",
    component: DLInfoView,
  },
  {
    id: 7,
    title: "Insurance Information",
    subTitle: "",
    component: InsuranceInfoView,
  },
  {
    id: 8,
    title: "Medical Information",
    subTitle: "",
    component: MedicalInfoView,
  },
  {
    id: 9,
    title: "Ride Experience",
    subTitle: "",
    component: RideExperienceInfoView,
  },
  {
    id: 10,
    title: "Other Information",
    subTitle: "",
    component: OtherInfoView,
  },
];

export const ProfileView = ({ profile }: any) => {
  return (
    <TimelineStepper>
      {stepComponents.map(({ title, subTitle, component: Component, id }) => (
        <TimelineStepperItem
          key={title}
          title={title}
          details={subTitle}
          completed={true}
        >
          <Component {...profile} />
        </TimelineStepperItem>
      ))}
    </TimelineStepper>
  );
};
