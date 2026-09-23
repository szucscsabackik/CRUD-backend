function log(req, res, next, message = undefined)
{
    console.log(req.originalUrl);
    console.log(req.method);

    if(message) console.log(message);

    next();
}

module.exports = log;
