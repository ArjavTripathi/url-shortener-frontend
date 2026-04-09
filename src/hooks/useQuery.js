import { useQuery } from "@tanstack/react-query"
import api from "../api/api.js"

export const useFetchMyShortUrls = (token, onError) => {
    return useQuery({
        queryKey: ["my-shortenedurls"],
        queryFn: async () => {
            return await api.get(
                "/api/urls/myurls", 
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
            const arrayReturnable = data.data.sort(
                (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
            )
            return arrayReturnable
        },
        throwOnError: onError,
        staleTime: 5000
    });
};



export const useFetchTotalClicks = (token, onError) => {
    return useQuery({
        queryKey: ["url-totalclick"],
        queryFn: async () => {
            return await api.get(
                "/api/urls/totalClicks?startDate=2025-03-01&endDate=2026-05-10", 
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