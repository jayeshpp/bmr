import Joi from "joi";

export const userValidationSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "First name is required",
    "any.required": "First name is required",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Last name is required",
    "any.required": "Last name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});

const vehicleInfoSchema = Joi.object({
  make: Joi.string().required(),
  model: Joi.string().required(),
  registrationNumber: Joi.string().required(),
});

export const userProfileValidationSchema = Joi.object({
  userId: Joi.string().required().messages({
    'string.empty': 'User ID is required',
    'any.required': 'User ID is required',
  }),
  personalInfo: Joi.object({
    dob: Joi.date().required(),
    profilePic: Joi.string().uri().allow(""),
    occupation: Joi.string().required(),
    nickName: Joi.string().allow(""),
  }).required(),
  contactInfo: Joi.object({
    countryCode: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    whatsappNumber: Joi.string().allow(""),
    instagramId: Joi.string().allow(""),
    facebookId: Joi.string().allow(""),
    homeAddress: Joi.string().required(),
    officeAddress: Joi.string().allow(""),
  }).required(),
  vehicleInfo: Joi.array().items(vehicleInfoSchema).required(),
  longestRideExperience: Joi.string().allow(""),
  ridingGroupMember: Joi.boolean().required(),
  DLInfo: Joi.object({
    DLNumber: Joi.string().required(),
    DLIssuedAt: Joi.date().required(),
    DLValidUpTo: Joi.date().required(),
    DLFile: Joi.string().uri().allow(""),
  }).required(),
  emergencyContactInfo: Joi.object({
    emergencyContactNameInFamily: Joi.string().required(),
    emergencyContactNumberInFamily: Joi.string().required(),
    emergencyContactRelationship: Joi.string().required(),
    emergencyContactNameInBangalore: Joi.string().allow(""),
    emergencyContactNumberInBangalore: Joi.string().allow(""),
    emergencyContactNameInBMR: Joi.string().allow(""),
    location: Joi.string().allow(""),
  }).required(),
  medicalInfo: Joi.object({
    bloodGroup: Joi.string().required(),
    alergies: Joi.string().allow(""),
    preExistingMedicalCondition: Joi.string().allow(""),
    climateSensitivities: Joi.string().allow(""),
    medicationRequirements: Joi.string().allow(""),
  }).required(),
  insuraceInfo: Joi.object({
    company: Joi.string().required(),
    number: Joi.string().required(),
    validity: Joi.date().required(),
  }).required(),
  otherInfo: Joi.object({
    nativeInKerala: Joi.string().allow(""),
    area: Joi.string().allow(""),
    youtubeLink: Joi.string().allow(""),
    volunteerPreference: Joi.string().allow(""),
    specialNote: Joi.string().allow(""),
  }).required(),
  ack1: Joi.boolean().required(),
  ack2: Joi.boolean().required(),
  ack3: Joi.boolean().required(),
  agreeToRules: Joi.boolean().required(),
});
