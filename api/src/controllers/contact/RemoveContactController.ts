import { Request, Response } from "express";
import { RemoveContactService } from "../../services/contact/RemoveContactService";

class RemoveContactController {
  async handle(request: Request, response: Response) {
    const contact_id = request.query.contact_id as string;
    const removeContactService = new RemoveContactService();

    const contactDeleted = await removeContactService.execute({ contact_id });
    return response.json(contactDeleted);
  }
}

export { RemoveContactController };
