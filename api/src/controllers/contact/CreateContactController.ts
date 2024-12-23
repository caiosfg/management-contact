import { Request, Response } from "express";
import { CreateContactService } from "../../services/contact/CreateContactService";
import { ContactRequest } from "../../models/interfaces/contact/ContactRequest";

class CreateContactController {
  async handle(request: Request, response: Response) {
    const { name, image, cellphone, description, group_id }: ContactRequest =
      request.body;
    const createContactService = new CreateContactService();

    if (!request.file) {
      throw new Error("Error sending image");
    } else {
      const { originalname, filename: image } = request.file;

      const contact = await createContactService.execute({
        name,
        image,
        cellphone,
        description,
        group_id,
      });

      return response.json(contact);
    }
  }
}

export { CreateContactController };
