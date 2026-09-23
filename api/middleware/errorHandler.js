// const { NotFoundError } = require("../error/NotFoundError");
// const log  = require("./logHandler");

// function notFound(req, res, next)
// {
//     throw new NotFoundError();
// }

// function showError(error, req, res, next)
// {
//     log(req, res, next, error.message);

//     res.status(error.status).json(
//     {
//         msg: error.message,
//         status: error.status,
//         isOperational: error.isOperational,
//         details: error.details ? error.details : undefined,
//         data: error.data ? error.data : undefined,
//     });
// }

// module.exports =
// [
//     notFound,
//     showError,
// ];