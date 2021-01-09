// import { Chef } from "#root/db/models";
import { Chef } from "../../../../src/db/models";

const chefsResolver = () => {
  return Chef.findAll();
};

export default chefsResolver;
