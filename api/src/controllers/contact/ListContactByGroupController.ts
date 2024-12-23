import { Request, Response } from "express";
import { ListContactByGroupService } from "../../services/contact/ListContactByGroupService";

class ListContactByGroupController {
  async handle(request: Request, response: Response) {
    const group_id = request.query.group_id as string;
    const listContactByGroupService = new ListContactByGroupService();

    const contacts = await listContactByGroupService.execute({ group_id });

    return response.json(contacts);
  }
}

export { ListContactByGroupController };
