// services/api/authService.ts
import { fetcher } from "./fetchInterceptor";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    // autres champs utilisateur
  };
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  return await fetcher("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const logout = async (): Promise<void> => {
  // Si vous avez une API de déconnexion
  await fetcher("/auth/logout", {
    method: "POST",
  });
};
