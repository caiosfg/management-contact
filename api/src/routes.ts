import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateGroupController } from "./controllers/group/CreateGroupController";

const router = Router();

router.get("/test", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

// User
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.delete("/user/remove", new RemoveUserController().handle);

// Group
router.post("/group", isAuthenticated, new CreateGroupController().handle);

export { router };
