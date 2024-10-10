// services/hooks/useAuth.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, logout } from "../api/authService";
import { LoginResponse } from "@/types";

interface LoginInput {
  email: string;
  password: string;
}

export const useLogin = () => {
    const queryClient = useQueryClient();

 

};

export const useLogout = () => {
    const queryClient = useQueryClient();
    


};
