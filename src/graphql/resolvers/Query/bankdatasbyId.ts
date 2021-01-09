// import { User } from "#root/db/models";
import { Bankdata } from "../../../../src/db/models";

const bankdatasbyIdResolver = (context: any, { userid} : {userid: string}) => {
  //return User.findAll({where: {roll : 2}});
  return Bankdata.findAll({where: {userid : userid}});
};




export default bankdatasbyIdResolver;
