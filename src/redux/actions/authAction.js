import { doVerifyToken } from "../../actions";


export const verifyEmail = async (token) => {
    console.log("data", token);
    try {
        return await doVerifyToken({token});
    } catch (error) {
        console.log("error", error);
        return error;
    }
}