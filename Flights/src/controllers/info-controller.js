const { StatusCodes } = require('http-status-codes');

const info = (req, res) => {
    console.log("Req received")
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Flights API is live',
        error: {},
        data: {},
    });
}

module.exports = {
    info
}