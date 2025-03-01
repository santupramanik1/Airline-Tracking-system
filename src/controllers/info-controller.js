import { StatusCodes } from "http-status-codes"
const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        sucess: true,
        message: "Api is Live",
        error: {},
        data: {}
    })
}

export { info }