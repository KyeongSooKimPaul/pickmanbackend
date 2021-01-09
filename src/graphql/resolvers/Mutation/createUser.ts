// import { User } from "#root/db/models";
import { User } from "../../../../src/db/models";

const createUserResolver =   (context: any, { email, password, roll, active, businessname, backdata, result  }: { email: string, password: string, roll: string, active: string,  backdata: string, businessname: string, result: boolean }) => {

  return User.findOne({where : {email}}).then((data:any) => {
        if(data == null){
            return User.create({ email, password, roll, active, backdata, businessname});
        }
        if(data !==null){
            return new Error("이미 존재하는 이메일입니다.")
        }
  
})
      
};
export default createUserResolver;