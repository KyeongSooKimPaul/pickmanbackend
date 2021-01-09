// import { User } from "#root/db/models";
import { Bankdata } from "../../../../src/db/models";

const bankdatasResolver = (context: any, { userid} : {userid: string}) => {
  //return User.findAll({where: {roll : 2}});
  return Bankdata.findAll();
};




export default bankdatasResolver;
