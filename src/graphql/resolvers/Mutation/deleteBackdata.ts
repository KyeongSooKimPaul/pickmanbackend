// import { User } from "#root/db/models";
import { Bankdata } from "../../../../src/db/models";

// const deleteBackdataResolver =   (context: any, { userId }: { userId: string}) => {

//   return Bankdata.destroy({where: {userId}}).then((data:any) => {
//       console.log("data", data)
//         if(data == null){
//             return Bankdata.destroy({where: {userId: userId}})
//         }
//         if(data !==null){
//             return new Error("유효하지 않은 형식입니다.")
//         }
  
// })
      
// };





const deleteBackdataResolver =   (context: any, { userId }: { userId: string}) => {

    return Bankdata.destroy({where: {userId: userId}}).then((data : any) => 
    {
        console.log("data", data)
      if(data !== null){
        throw new Error("completed")
      }
      else {
        throw new Error("fail")
    }
    })
        
  };

  

export default deleteBackdataResolver;