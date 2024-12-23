import prismaClient from "../../prisma";
import { ContactRequest } from "../../models/interfaces/contact/ContactRequest";

class CreateContactService {
  async execute({
    name,
    image,
    cellphone,
    description,
    group_id,
  }: ContactRequest) {
    const contact = await prismaClient.contact.create({
      data: {
        name: name,
        image: image,
        cellphone: cellphone,
        description: description,
        group_id: group_id,
      },
    });

    return contact;
  }
}

export { CreateContactService };
