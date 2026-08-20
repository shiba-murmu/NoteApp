import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchUser = async () => {
    const { data } = await api.get("/auth/me");
    return data.user;
};

export const useCurrentUser = () => {
    return useQuery({
        queryKey : ["currentUser"],
        queryFn: fetchUser,
        enabled: !!localStorage.getItem("accessToken"),
        staleTime: 100 * 60 * 10, // 10 minutes
    });
};