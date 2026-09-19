import { mainApi } from "@/app/mainApi.js";



const searchApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        
        globalSearch: builder.query({
            query: (searchTerm) => `search?query=${searchTerm}`,
        }),

    })
});

export const { useGlobalSearchQuery } = searchApi;