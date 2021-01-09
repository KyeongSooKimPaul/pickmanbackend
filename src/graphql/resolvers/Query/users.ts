// import { User } from "#root/db/models";
import { User } from "../../../../src/db/models";

const usersResolver = (context: any, { roll} : {roll: string}) => {
  //return User.findAll({where: {roll : 2}});
  return User.findAll({});
};


export default usersResolver;
