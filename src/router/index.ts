import express from "express";

import authenticaion from "./authenticaion";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
  authenticaion(router);
  users(router);

  return router;
};
