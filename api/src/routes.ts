import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateGroupController } from "./controllers/group/CreateGroupController";
import { EditGroupController } from "./controllers/group/EditGroupController";
import { ListUserController } from "./controllers/user/ListUserController";
import { ListGroupController } from "./controllers/group/ListGroupController";

const router = Router();

router.get("/test", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

// User
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.get("/user/all", isAuthenticated, new ListUserController().handle);
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.delete("/user/remove", new RemoveUserController().handle);

// Group
router.get("/group/all", isAuthenticated, new ListGroupController().handle);
router.post("/group", isAuthenticated, new CreateGroupController().handle);
router.put("/group/edit", isAuthenticated, new EditGroupController().handle);

export { router };
