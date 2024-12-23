import prismaClient from "../../prisma";
import { RemoveGroupRequest } from "../../models/interfaces/group/RemoveGroupRequest";

class RemoveGroupService {
  async execute({ group_id }: RemoveGroupRequest) {
    if (group_id) {
      const group = await prismaClient.group.delete({
        where: {
          id: group_id,
        },
      });

      return group;
    }
  }
}

export { RemoveGroupService };
