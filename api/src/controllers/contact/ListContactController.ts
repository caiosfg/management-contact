import { Request, Response } from "express";
import { ListContactService } from "../../services/contact/ListContactService";

class ListContactController {
  async handle(request: Request, response: Response) {
    const listContactService = new ListContactService();
    const contacts = await listContactService.execute();

    return response.json(contacts);
  }
}

export { ListContactController };
