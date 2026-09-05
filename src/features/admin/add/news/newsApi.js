import { mainApi } from "@/app/mainApi.js";




const newsApi = mainApi.injectEndpoints({
    endpoints: (buider) => ({

        getNews: buider.query({
            query: (params) => ({
                url: '/news',
                method: 'GET',
                params
            }),
            providesTags: ['News'],
        }),

        getSingleNews: buider.query({
            query: (id) => ({
                url: `/news/${id}`,
                method: 'GET',
            }),
            providesTags: ['News'],
        }),

        addNews: buider.mutation({
            query: (q) => ({
                url: '/news',
                method: 'POST',
                body: q.body,
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['News']
        }),

        updateNews: buider.mutation({
            query: (q) => ({
                url: `/news/${q.id}`,
                method: 'PATCH',
                body: q.body,
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['News']
        }),

        removeNews: buider.mutation({
            query: (q) => ({
                url: `/news/${q.id}`,
                method: 'DELETE',
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['News']
        })
    })
});

export const {useGetNewsQuery, useGetSingleNewsQuery, useAddNewsMutation, useUpdateNewsMutation, useRemoveNewsMutation} = newsApi;