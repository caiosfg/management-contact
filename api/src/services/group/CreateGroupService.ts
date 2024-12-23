import prismaClient from "../../prisma";
import { GroupRequest } from "../../models/interfaces/group/GroupRequest";

class CreateGroupService {
  async execute({ name }: GroupRequest) {
    if (name === "" || name === null || !name) {
      throw new Error("invalid name");
    }

    const group = await prismaClient.group.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return group;
  }
}

export { CreateGroupService };
