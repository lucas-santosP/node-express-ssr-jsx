import homeController from "../controllers/home";
import aboutController from "../controllers/about";

export default (app) => {
  app.get("/", homeController);
  app.get("/about", aboutController);
};
