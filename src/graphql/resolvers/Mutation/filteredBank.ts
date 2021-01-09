// import { User } from "#root/db/models";
import { Bankdata } from "../../../../src/db/models";


const filteredBankResolver = async(context: any, { userid, seller, wholesaler}: { userid: string, seller: string, wholesaler: string}) => {



        return Bankdata.findOne({where : {userid, seller, wholesaler}}).then((data:any) => {
            console.log("뎅니터", data)
                if(data == null){
                    throw new Error("입력정보를 다시 확인해주세요")
                }
                if(data !==null){
                    return Bankdata.findOne({where :{userid, seller, wholesaler}})
                    // throw new Error("로그인이 완료")
                }
          
       })
    
         
};
  


export default filteredBankResolver;