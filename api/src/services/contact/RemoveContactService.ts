import prismaClient from "../../prisma";

interface RemoveContactRequest {
  contact_id: string;
}

class RemoveContactService {
  async execute({ contact_id }: RemoveContactRequest) {
    if (!contact_id) {
      throw new Error("Id dont send");
    }

    const removeContact = await prismaClient.contact.delete({
      where: {
        id: contact_id,
      },
    });

    return removeContact;
  }
}

export { RemoveContactService };
