import { Request, Response } from "express";
import { EditGroupService } from "../../services/group/EditGroupService";

class EditGroupController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const group_id = request.query.group_id as string;

    const editGroupService = new EditGroupService();
    const groupEdited = editGroupService.execute({ name, group_id });

    return response.json(groupEdited);
  }
}

export { EditGroupController };
