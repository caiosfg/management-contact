import { Request, Response } from "express";
import { GroupRequest } from "../../models/interfaces/group/GroupRequest";
import { CreateGroupService } from "../../services/group/CreateGroupService";

class CreateGroupController {
  async handle(request: Request, response: Response) {
    const { name }: GroupRequest = request.body;
    const createGroupService = new CreateGroupService();

    const group = await createGroupService.execute({ name });
    return response.json(group);
  }
}

export { CreateGroupController };
