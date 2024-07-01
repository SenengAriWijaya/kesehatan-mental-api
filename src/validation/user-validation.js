import Joi from "joi";

const postUserValidation = Joi.object({
  tanggal: Joi.string().max(50).required(),
  nama: Joi.string().max(100).required(),
  detak_jantung: Joi.string().max(20).required(),
  kelembapan_kulit: Joi.string().max(20).required(),
  status_stres: Joi.string().max(100).required(),
});

const getUserValidation = Joi.string().max(100).required();

export { postUserValidation, getUserValidation };
