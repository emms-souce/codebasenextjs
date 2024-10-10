// services/api/fetchInterceptor.ts
import { toast } from "react-toastify";

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;// l'url debe être définie dans le fichier.env

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("token"); // Ou obtenez le token depuis un autre stockage sécurisé

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${baseUrl}${url}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      // Gérer les erreurs globalement
      const errorData = await response.json();
      toast.error(errorData.message || "Une erreur est survenue");
      throw new Error(errorData.message || "Erreur lors de la requête");
    }

    return response.json();
  } catch (error: any) {
    toast.error(error.message || "Une erreur est survenue");
    throw error;
  }
};
