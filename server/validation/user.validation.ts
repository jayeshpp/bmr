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


export const userProfileValidationSchema = Joi.object({
  userId: Joi.string().required().messages({
    'string.empty': 'User ID is required',
    'any.required': 'User ID is required',
  }),
  dob: Joi.date().iso().required().messages({
    'date.base': 'Date of birth must be a valid date',
    'date.format': 'Date of birth must be in ISO format (YYYY-MM-DD)',
    'any.required': 'Date of birth is required',
  }),
  countryCode: Joi.string().required().messages({
    'string.empty': 'Country code is required',
    'any.required': 'Country code is required',
  }),
  contactNumber: Joi.number().required().messages({
    'number.base': 'Contact number must be a number',
    'any.required': 'Contact number is required',
  }),
  emergencyNumber1: Joi.number().required().messages({
    'number.base': 'Emergency contact number 1 must be a number',
    'any.required': 'Emergency contact number 1 is required',
  }),
  emergencyNumber2: Joi.number().required().messages({
    'number.base': 'Emergency contact number 2 must be a number',
    'any.required': 'Emergency contact number 2 is required',
  }),
  whatsappNumber: Joi.number().required().messages({
    'number.base': 'WhatsApp number must be a number',
    'any.required': 'WhatsApp number is required',
  }),
  relationshipStatus: Joi.string().required().messages({
    'string.empty': 'Relationship status is required',
    'any.required': 'Relationship status is required',
  }),
  bloodGroup: Joi.string().required().messages({
    'string.empty': 'Blood group is required',
    'any.required': 'Blood group is required',
  }),
  readyToDonateBlood: Joi.boolean().required().messages({
    'boolean.base': 'Ready to donate blood must be a boolean value',
    'any.required': 'Ready to donate blood is required',
  }),
  nativeInKerala: Joi.string().required().messages({
    'string.empty': 'Native place in Kerala is required',
    'any.required': 'Native place in Kerala is required',
  }),
  area: Joi.string().required().messages({
    'string.empty': 'Area is required',
    'any.required': 'Area is required',
  }),
  doorNumber: Joi.string().required().messages({
    'string.empty': 'Door number is required',
    'any.required': 'Door number is required',
  }),
  apartmentNameOrBuildingNumber: Joi.string().required().messages({
    'string.empty': 'Apartment name or building number is required',
    'any.required': 'Apartment name or building number is required',
  }),
  addressLine1: Joi.string().required().messages({
    'string.empty': 'Address line 1 is required',
    'any.required': 'Address line 1 is required',
  }),
  addressLine2: Joi.string().required().messages({
    'string.empty': 'Address line 2 is required',
    'any.required': 'Address line 2 is required',
  }),
  pinCode: Joi.number().required().messages({
    'number.base': 'Pin code must be a number',
    'any.required': 'Pin code is required',
  }),
  nearestLandmark: Joi.string().required().messages({
    'string.empty': 'Nearest landmark is required',
    'any.required': 'Nearest landmark is required',
  }),
  organization: Joi.string().required().messages({
    'string.empty': 'Organization is required',
    'any.required': 'Organization is required',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Occupation is required',
    'any.required': 'Occupation is required',
  }),
  drivingLicenseNumber: Joi.string().required().messages({
    'string.empty': 'Driving license number is required',
    'any.required': 'Driving license number is required',
  }),
  drivingLicenseValidity: Joi.date().iso().required().messages({
    'date.base': 'Driving license validity must be a valid date',
    'date.format': 'Driving license validity must be in ISO format (YYYY-MM-DD)',
    'any.required': 'Driving license validity is required',
  }),
  motorcycleMake: Joi.string().required().messages({
    'string.empty': 'Motorcycle make is required',
    'any.required': 'Motorcycle make is required',
  }),
  motorcycleModel: Joi.string().required().messages({
    'string.empty': 'Motorcycle model is required',
    'any.required': 'Motorcycle model is required',
  }),
  motorcycleRegistrationNumber: Joi.string().required().messages({
    'string.empty': 'Motorcycle registration number is required',
    'any.required': 'Motorcycle registration number is required',
  }),
  rearViewMirrors: Joi.boolean().required().messages({
    'boolean.base': 'Rear view mirrors must be a boolean value',
    'any.required': 'Rear view mirrors is required',
  }),
  ridingGears: Joi.array().items(Joi.string()).required().messages({
    'array.base': 'Riding gears must be an array of strings',
    'any.required': 'Riding gears are required',
  }),
  ridingGroupMember: Joi.boolean().required().messages({
    'boolean.base': 'Riding group member must be a boolean value',
    'any.required': 'Riding group member is required',
  }),
  youtubeChannel: Joi.string().uri().required().messages({
    'string.uri': 'YouTube channel must be a valid URL',
    'string.empty': 'YouTube channel is required',
    'any.required': 'YouTube channel is required',
  }),
  volunteerPreference: Joi.string().required().messages({
    'string.empty': 'Volunteer preference is required',
    'any.required': 'Volunteer preference is required',
  }),
  agreeToRules: Joi.boolean().required().messages({
    'boolean.base': 'Agree to rules must be a boolean value',
    'any.required': 'Agree to rules is required',
  }),
});
