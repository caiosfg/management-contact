import prismaClient from "../../prisma";
import { EditGroupRequest } from "../../models/interfaces/group/EditGroupRequest";

class EditGroupService {
  async execute({ name, group_id }: EditGroupRequest) {
    if (group_id === " " || name === " " || !group_id || !name) {
      throw new Error("Invalid arguments to edit group");
    }

    const editGroup = await prismaClient.group.update({
      where: {
        id: group_id,
      },
      data: {
        name: name,
      },
    });

    return editGroup;
  }
}

export { EditGroupService };
