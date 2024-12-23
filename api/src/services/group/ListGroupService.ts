import prismaClient from "../../prisma";

class ListGroupService {
  async execute() {
    const groups = await prismaClient.group.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return groups;
  }
}

export { ListGroupService };
