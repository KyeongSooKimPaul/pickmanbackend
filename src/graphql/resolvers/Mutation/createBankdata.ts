// import { Bankdata } from "#root/db/models";
import { Bankdata } from "../../../../src/db/models";

const createBankdataResolver = (
  context: any,
  {  userId, seller, wholesaler, bankcode, bankaccount, bankowner}: {userId : string, seller : string,
    wholesaler: string, bankcode:string, bankaccount: string, 
    bankowner: string
     }
) => {
  return Bankdata.create({ userId, seller, wholesaler, bankcode, bankaccount, bankowner});
};

export default createBankdataResolver;