// import { User } from "#root/db/models";
import { User } from "../../../../src/db/models";

 const  updateuserbyActiveResolver = (context: any, { id, active} : {id: string, active : string}) => {
 

  return User.findOne({where : {id}}).then((data:any) => {
    console.log("data결과", data.dataValues.id)
    if(data.dataValues.id == id){
       return User.update({ active: active}, {where: {id: id}});
    }
    if(data !==null){
        return new Error("Error!")
    }

})


};

export default updateuserbyActiveResolver;
