import { shopRoutes } from "@packages/shared/src/routes/shop";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <h1>
      Shop
      <div className="">
        <Link to={shopRoutes.second}>go to second shop page</Link>
      </div>
    </h1>
  );
};
export default Shop;
