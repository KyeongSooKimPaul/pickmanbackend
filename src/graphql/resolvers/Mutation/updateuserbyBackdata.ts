// import { User } from "#root/db/models";
import { User } from "../../../../src/db/models";

 const  updateuserbyBackdataResolver = (context: any, { id, backdata} : {id: string, backdata : string}) => {
 

  return User.findOne({where : {id}}).then((data:any) => {
    console.log("data결과", data.dataValues.id)
    if(data == null){
       return new Error("없는 계정정보입니다.")
    }
    if(data !==null){
        return User.update({ backdata: backdata}, {where: {id: id}}).then((d : any)=>{
            User.findOne({where : {id}})
        });
    }

})
};

export default updateuserbyBackdataResolver;
