import prismaClient from "../../prisma";
import { EditContactRequest } from "../../models/interfaces/contact/EditContactRequest";

class EditContactService {
  async execute({
    name,
    image,
    cellphone,
    description,
    group_id,
    contact_id,
  }: EditContactRequest) {
    const contactEdited = await prismaClient.contact.update({
      where: {
        id: contact_id,
      },
      data: {
        name: name,
        image: image,
        cellphone: cellphone,
        description: description,
        group_id: group_id,
      },
    });

    return contactEdited;
  }
}

export { EditContactService };
