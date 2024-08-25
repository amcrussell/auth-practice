import * as jwt from "jsonwebtoken";
import config from "../../config";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    // check if token exists

    const bearerToken = req.headers.authorization?.split(" ") || [];
    const token = bearerToken[0] === "Bearer" && bearerToken[1];

    if (!bearerToken || !token) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }

    //validate token

    const payload = <{ email: string }>jwt.verify(token, config.jwt.secret);

    console.log(payload);

    res.json({ message: `Something goes here ${payload.email}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "broken", error });
  }
});

export default router;
