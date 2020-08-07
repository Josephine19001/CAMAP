import { json } from "express";

// export default class ApiError extends Error {
//   constructor(statusCode, message, source) {
//     super();
//   }
// }

export const Error = (error, res) => {
  res.status(422).json({
    success: false,
    data: error.message,
  });
};
// }
// export class BadRequestError extends ApiError {
//   constructor(message = "Bad Request", source) {
//     super(400, message, source);
//   }
// }
// export class InternalServerError extends ApiError {
//   constructor(message = "Internal Server Error", source) {
//     super(500, message, source);
//   }
// }
