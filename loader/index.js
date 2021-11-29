import CommonLoader from "./commonLoader.js";
import RoutesLoader from "./routesLoader.js";

const Loader = async ({ app }) => {
  await CommonLoader({ app });
  await RoutesLoader({ app });
};

export default Loader;
