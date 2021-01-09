// import { User } from "#root/db/models";
import { User } from "../../../../src/db/models";

const usersbyRollResolver = (context: any, { roll} : {roll: string}) => {
  return User.findAll({where: {roll : roll}});
  // return User.findAll({});
};

export default usersbyRollResolver;
