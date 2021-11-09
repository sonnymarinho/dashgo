import { useQuery } from "react-query";
import { STALE_TIME } from "../../config/react-query";
import { api } from "../axios";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

type UserResponse = User & { createdAt: string };

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const getUsers = async (): Promise<UserResponse[]> => {
  const { data } = await api.get("/users");

  return data.users.map(({ createdAt, ...props }: User) => ({
    ...props,
    createdAt: formatDate(createdAt),
  }));
};

export function useUsers() {
  return useQuery("users", async () => getUsers(), {
    staleTime: STALE_TIME,
  });
}
