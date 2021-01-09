// import { Chef } from "#root/db/models";
import { Chef } from "../../../../src/db/models";

const createChefResolver = (context: any, { name }: { name: string }) => {
  return Chef.create({ name });
};

export default createChefResolver;