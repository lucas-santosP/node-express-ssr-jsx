import express from "express";
import expressReactViews from "express-react-views";
import compression from "compression";
import cors from "cors";
import path from "path";

export default function setup (app) {
  app.use("/public", express.static(path.join(__dirname, "../public")));
  app.use(compression());
  app.use(cors());

  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "js");
  app.engine("js", expressReactViews.createEngine());
}
