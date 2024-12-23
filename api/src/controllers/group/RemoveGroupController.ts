import { Request, Response } from "express";
import { RemoveGroupService } from "../../services/group/RemoveGroupService";

class RemoveGroupController {
  async handle(request: Request, response: Response) {
    const group_id = request.query.group_id as string;
    const removeGroupService = new RemoveGroupService();

    const group = removeGroupService.execute({ group_id });

    return response.json({ message: "Group deleted successfully!" });
  }
}

export { RemoveGroupController };
