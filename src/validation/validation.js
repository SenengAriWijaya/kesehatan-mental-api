import { ResponseError } from "../error/response-error.js";

const validate = (schema, req) => {
  const result = schema.validate(req, {
    abortEarly: false, // include all errors
    allowUnknown: false,
  });
  if (result.error) {
    throw new ResponseError(400, result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
