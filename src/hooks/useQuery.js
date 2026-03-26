import { useQuery } from "@tanstack/react-query"
import api from "../api/api.js"

export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick"],
        queryFn: async () => {
            return await api.get(
                "/api/urls/totalClicks?startDate=2026-03-01&endDate=2026-03-10", 
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    }
                }
            );
        },
        select: (data) => {
            return Object.keys(data.data).map((key) => ({
                clickDate: key,
                count: data.data[key],
            }));
        },
        throwOnError: onError,
        staleTime: 5000
    });
};