import Joi from "joi";

export const userValidationSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'First name is required',
    'any.required': 'First name is required',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required',
    'any.required': 'Last name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
  }),
  role: Joi.string().valid('Member', 'Crew', 'Admin').default('Member').messages({
    'any.only': 'Role must be one of Member, Crew, Admin',
  }),
});


export const userProfileSchema = Joi.object({
  userId: Joi.string().required(),
  profilePic: Joi.string().optional(),
  dob: Joi.date().required(),
  countryCode: Joi.string().default("+91"),
  contactNumber: Joi.number().required(),
  emergencyNumber1: Joi.number().required(),
  emergencyNumber2: Joi.number().required(),
  whatsappNumber: Joi.number().required(),
  relationshipStatus: Joi.string()
    .valid("Single", "Married", "Engaged")
    .default("Single"),
  bloodGroup: Joi.string()
    .valid(
      "A +ve",
      "B +ve",
      "AB +ve",
      "O +ve",
      "A -ve",
      "B -ve",
      "AB -ve",
      "O -ve"
    )
    .required(),
  readyToDonateBlood: Joi.boolean().required(),
  nativeInKerala: Joi.string()
    .valid(
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad"
    )
    .default("Kozhikode"),
  area: Joi.string().required(),
  doorNumber: Joi.string().required(),
  apartmentNameOrBuildingNumber: Joi.string().required(),
  addressLine1: Joi.string().required(),
  addressLine2: Joi.string().required(),
  pinCode: Joi.number().required(),
  nearestLandmark: Joi.string().default("nill"),
  organization: Joi.string().required(),
  occupation: Joi.string().required(),
  drivingLicenseNumber: Joi.string().required(),
  drivingLicenseValidity: Joi.date().required(),
  motorcycleMake: Joi.string().required(),
  motorcycleModel: Joi.string().required(),
  motorcycleRegistrationNumber: Joi.string().required(),
  rearViewMirrors: Joi.boolean().required(),
  ridingGears: Joi.array().items(Joi.string()).required(),
  ridingGroupMember: Joi.boolean().required(),
  youtubeChannel: Joi.string().allow(""),
  volunteerPreference: Joi.string().required(),
  agreeToRules: Joi.boolean().required(),
});
