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
  personalInfo: Joi.object({
    dob: Joi.string().required().messages({
      'string.empty': 'Date of birth is required',
      'any.required': 'Date of birth is required',
    }),
    profilePic: Joi.string().uri().allow("").messages({
      'string.uri': 'Invalid URL format for profile picture',
    }),
    occupation: Joi.string().required().messages({
      'string.empty': 'Occupation is required',
      'any.required': 'Occupation is required',
    }),
    nickName: Joi.string().allow(""),
  }).required(),
  contactInfo: Joi.object({
    countryCode: Joi.string().required().messages({
      'string.empty': 'Country code is required',
      'any.required': 'Country code is required',
    }),
    mobileNumber: Joi.string()
      .pattern(/^\d+$/)
      .length(10)
      .required()
      .messages({
        'string.pattern.base': 'Mobile number must only contain digits',
        'string.length': 'Mobile number must be exactly 10 digits',
        'string.empty': 'Mobile number is required',
        'any.required': 'Mobile number is required',
      }),
    whatsappNumber: Joi.string()
      .pattern(/^\d+$/)
      .length(10)
      .allow("")
      .messages({
        'string.pattern.base': 'WhatsApp number must only contain digits',
        'string.length': 'WhatsApp number must be exactly 10 digits',
      }),
    homeAddress: Joi.string().required().messages({
      'string.empty': 'Home address is required',
      'any.required': 'Home address is required',
    }),
    officeAddress: Joi.string().allow(""),
  }).required(),
  medicalInfo: Joi.object({
    bloodGroup: Joi.string().required().messages({
      'string.empty': 'Blood group is required',
      'any.required': 'Blood group is required',
    }),
    alergies: Joi.string().required().messages({
      'string.empty': 'Allergies information is required',
      'any.required': 'Allergies information is required',
    }),
    preExistingMedicalCondition: Joi.string().required().messages({
      'string.empty': 'Pre-existing medical condition is required',
      'any.required': 'Pre-existing medical condition is required',
    }),
    climateSensitivities: Joi.string().required().messages({
      'string.empty': 'Climate sensitivities information is required',
      'any.required': 'Climate sensitivities information is required',
    }),
    medicationRequirements: Joi.string().required().messages({
      'string.empty': 'Medication requirements information is required',
      'any.required': 'Medication requirements information is required',
    }),
  }).required(),
  otherInfo: Joi.object({
    nativeInKerala: Joi.string().required().messages({
      'string.empty': 'Native in Kerala information is required',
      'any.required': 'Native in Kerala information is required',
    }),
    area: Joi.string().required().messages({
      'string.empty': 'Area is required',
      'any.required': 'Area is required',
    }),
    volunteerPreference: Joi.string()
      .valid("yes", "no", "maybe")
      .required()
      .messages({
        'any.only': 'Invalid volunteer preference',
        'any.required': 'Volunteer preference is required',
      }),
    specialNote: Joi.string().optional(),
  }).required(),
  emergencyContactInfo: Joi.object({
    emergencyContactNameInFamily: Joi.string().required().messages({
      'string.empty': 'Emergency contact name in family is required',
      'any.required': 'Emergency contact name in family is required',
    }),
    emergencyContactNumberInFamily: Joi.string()
      .pattern(/^\d+$/)
      .length(10)
      .required()
      .messages({
        'string.pattern.base': 'Emergency contact number must only contain digits',
        'string.length': 'Emergency contact number must be exactly 10 digits',
        'string.empty': 'Emergency contact number in family is required',
        'any.required': 'Emergency contact number in family is required',
      }),
    emergencyContactRelationship: Joi.string().required().messages({
      'string.empty': 'Emergency contact relationship is required',
      'any.required': 'Emergency contact relationship is required',
    }),
    emergencyContactNameInBangalore: Joi.string().required().messages({
      'string.empty': 'Emergency contact name in Bangalore is required',
      'any.required': 'Emergency contact name in Bangalore is required',
    }),
    emergencyContactNumberInBangalore: Joi.string()
      .pattern(/^\d+$/)
      .length(10)
      .required()
      .messages({
        'string.pattern.base': 'Emergency contact number must only contain digits',
        'string.length': 'Emergency contact number must be exactly 10 digits',
        'string.empty': 'Emergency contact number in Bangalore is required',
        'any.required': 'Emergency contact number in Bangalore is required',
      }),
    emergencyContactNameInBMR: Joi.string().required().messages({
      'string.empty': 'Emergency contact name in BMR is required',
      'any.required': 'Emergency contact name in BMR is required',
    }),
    location: Joi.string().required().messages({
      'string.empty': 'Location is required',
      'any.required': 'Location is required',
    }),
  }).required(),
  DLInfo: Joi.object({
    DLNumber: Joi.string().required().messages({
      'string.empty': 'Driving license number is required',
      'any.required': 'Driving license number is required',
    }),
    DLIssuedAt: Joi.date().required().messages({
      'date.base': 'Driving license issue date is required',
      'any.required': 'Driving license issue date is required',
    }),
    DLValidUpTo: Joi.date().required().messages({
      'date.base': 'Driving license validity date is required',
      'any.required': 'Driving license validity date is required',
    }),
    DLFile: Joi.string().uri().required().messages({
      'string.uri': 'Invalid URL format for driving license file',
      'string.empty': 'Driving license file is required',
      'any.required': 'Driving license file is required',
    }),
  }).required(),
  vehicleInfo: Joi.array()
    .items(vehicleInfoSchema)
    .min(1)
    .required()
    .messages({
      'array.min': 'At least one vehicle information is required',
      'any.required': 'Vehicle information is required',
    }),
  longestRideExperience: Joi.string().required().messages({
    'string.empty': 'Longest ride experience is required',
    'any.required': 'Longest ride experience is required',
  }),
  ridingGroupMember: Joi.string().required().messages({
    'string.empty': 'Riding group membership information is required',
    'any.required': 'Riding group membership information is required',
  }),
  socialMedia: Joi.object({
    instagramId: Joi.string().required().messages({
      'string.empty': 'Instagram ID is required',
      'any.required': 'Instagram ID is required',
    }),
    facebookId: Joi.string().required().messages({
      'string.empty': 'Facebook ID is required',
      'any.required': 'Facebook ID is required',
    }),
    youtubeLink: Joi.string().uri().required().messages({
      'string.uri': 'Invalid URL format for YouTube link',
      'string.empty': 'YouTube link is required',
      'any.required': 'YouTube link is required',
    }),
  }).required(),
  insuranceInfo: Joi.object({
    company: Joi.string().required().messages({
      'string.empty': 'Insurance company is required',
      'any.required': 'Insurance company is required',
    }),
    number: Joi.string().required().messages({
      'string.empty': 'Insurance number is required',
      'any.required': 'Insurance number is required',
    }),
    validity: Joi.date().required().messages({
      'date.base': 'Insurance validity date is required',
      'any.required': 'Insurance validity date is required',
    }),
  }).required(),
  ack1: Joi.boolean().valid(true).required().messages({
    'any.only': 'You must acknowledge to it to continue',
    'any.required': 'You must acknowledge to it to continue',
  }),
  ack2: Joi.boolean().valid(true).required().messages({
    'any.only': 'You must acknowledge to it to continue',
    'any.required': 'You must acknowledge to it to continue',
  }),
  ack3: Joi.boolean().valid(true).required().messages({
    'any.only': 'You must acknowledge to it to continue',
    'any.required': 'You must acknowledge to it to continue',
  }),
  agreeToRules: Joi.boolean().valid(true).required().messages({
    'any.only': 'Agreement to rules is required',
    'any.required': 'Agreement to rules is required',
  }),
});
