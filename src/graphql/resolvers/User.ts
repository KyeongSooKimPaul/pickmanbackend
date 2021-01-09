// import { User, Rawexcel} from "#root/db/models";
import { User, Rawexcel} from "../../../src/db/models";

const resolvers = {
  rawexcels: (user: User) => {
    return Rawexcel.findAll({
      include: [
        {
          model: User,
          where: { id: user.id }
        }
      ],
      order: [["id", "ASC"]]
    });
  },
};


export default resolvers;