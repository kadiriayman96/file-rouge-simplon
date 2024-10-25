import Joi from "joi";

// Registration validation schema
const registrationSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(), // Validate email format
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "user").optional(), // role is optional, defaults to "user"
});

// Menu validation schema
const menuSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().positive().required(),
  cafeteria: Joi.string().required(), // Assuming cafeteria ID is a string
});

/// Cafeteria validation schema
const cafeteriaSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  location: Joi.string().min(10).required(),
  manager: Joi.string().required(), // Manager is required
  description: Joi.string().required(), // Description is required
});

// Middleware for validating registration data
export const validateRegistration = (req, res, next) => {
  const { error } = registrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next(); // Pass control to the next middleware/controller
};

// Middleware for validating menu data
export const validateMenu = (req, res, next) => {
  const { error } = menuSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next(); // Pass control to the next middleware/controller
};

// Middleware for validating cafeteria data
export const validateCafeteria = (req, res, next) => {
  const { error } = cafeteriaSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next(); // Pass control to the next middleware/controller
};
