// import { User } from "#root/db/models";
import { User } from "../../../../src/db/models";

var dataSet = "초기값";
var test1 = "초기임"
const loginUserResolver = async (context: any, { email, password, data }: { email: string, password: string, data: string }) => {



    return User.findOne({ where: { email, password } }).then((data: any) => {
        console.log("뎅니터", data)
        if (data == null) {
            throw new Error("입력정보를 다시 확인해주세요")
        }
        if (data !== null) {
            return User.findOne({ where: { email, password } })
            // throw new Error("로그인이 완료")
        }

    })


};








export default loginUserResolver;