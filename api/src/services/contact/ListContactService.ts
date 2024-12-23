import prismaClient from "../../prisma";

class ListContactService {
  async execute() {
    const contacts = await prismaClient.contact.findMany({
      select: {
        id: true,
        name: true,
        cellphone: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return contacts;
  }
}

export { ListContactService };
