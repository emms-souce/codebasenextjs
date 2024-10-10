// services/api/userService.ts
import { fetcher } from "./fetchInterceptor";

interface User {
  id: string;
  name: string;
  email: string;
  // autres champs utilisateur
}

export const getUser = async (userId: string): Promise<User> => {
  return await fetcher(`/users/${userId}`);
};

export const updateUser = async (
  userId: string,
  data: Partial<User>
): Promise<User> => {
  return await fetcher(`/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};
