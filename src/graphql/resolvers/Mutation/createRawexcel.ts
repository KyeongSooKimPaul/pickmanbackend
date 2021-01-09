// import { Rawexcel } from "#root/db/models";
import { Rawexcel } from "../../../../src/db/models";
const createRawexcelResolver = (
  context: any,
  {  userId, date, name, address, phone, code, color, size, price, amount,total,roll, email, url }: {userId : string, date : string,
    name: string, address:string, phone: string, 
     code: string, color:string, size: string,
    price: string, amount:string, total: string, roll : string, email : string, url: string
     }
) => {
  return Rawexcel.create({ userId, date, name, address, phone, code, color, size, price, amount,total, roll, email, url});
};

export default createRawexcelResolver;