import { Request, Response } from "express";
import { ListGroupService } from "../../services/group/ListGroupService";

class ListGroupController {
  async handle(request: Request, response: Response) {
    const listGroupService = new ListGroupService();
    const groups = await listGroupService.execute();

    return response.json(groups);
  }
}

export { ListGroupController };
