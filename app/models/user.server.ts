import db from "~/db.server";
import { handleDelete } from "./utils";
import { rollupVersion } from "vite";

export function getUser(email: string) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

export function getUserById(id: string) {
  return db.user.findUnique({
    where: {
      id,
    },
    include: {
      role: true,
    },
  });
}

export async function createUser(
  email: string,
  firstName: string,
  lastName: string
) {
  const role = await db.role.findFirst({
    where: {
      name: "user",
    },
  });
  if (role) {
    return db.user.create({
      data: {
        email,
        firstName,
        lastName,
        roleId: role.id,
      },
    });
  }
}

export function deleteUser(email: string) {
  return handleDelete(async () => {
    const user = await getUser(email);

    if (!user) {
      return null;
    }

    await db.recipe.deleteMany({ where: { userId: user.id } });
    await db.pantryShelf.deleteMany({ where: { userId: user.id } });
    await db.user.delete({ where: { id: user.id } });
  });
}
