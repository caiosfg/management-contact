import prismaClient from "../../prisma";

interface ListContactByGroupIdRequest {
  group_id: string;
}

class ListContactByGroupService {
  async execute({ group_id }: ListContactByGroupIdRequest) {
    const findContactByGroupId = await prismaClient.contact.findMany({
      where: {
        group_id: group_id,
      },
    });

    return findContactByGroupId;
  }
}

export { ListContactByGroupService };
