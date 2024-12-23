import { Request, Response } from "express";
import { EditContactService } from "../../services/contact/EditContactService";
import { EditContactRequest } from "../../models/interfaces/contact/EditContactRequest";

class EditContactController {
  async handle(request: Request, response: Response) {
    const {
      name,
      description,
      cellphone,
      image,
      group_id,
      contact_id,
    }: EditContactRequest = request.body;

    const editContactService = new EditContactService();

    const contactEdited = editContactService.execute({
      name,
      image,
      cellphone,
      description,
      group_id,
      contact_id,
    });

    return response.json(contactEdited);
  }
}

export { EditContactController };
