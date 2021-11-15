import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { STALE_TIME } from "../../config/react-query";
import { User } from "../../types/user";
import { api } from "../axios";

export type UserResponse = User & { createdAt: string };

type GetUsersResponse = { users: UserResponse[]; totalCount: number };

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const getUsers = async (page: number = 1): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get("/users", {
    params: { page },
  });

  const users = data.users.map(({ createdAt, ...props }: User) => ({
    ...props,
    createdAt: formatDate(createdAt),
  }));

  return {
    users,
    totalCount: Number(headers.totalCount),
  };
};

export function useUsers(
  page?: number,
  options?: UseQueryOptions<GetUsersResponse>
) {
  return useQuery(["users", page], () => getUsers((page = 1)), {
    staleTime: STALE_TIME,
    ...(options as any),
  });
}
