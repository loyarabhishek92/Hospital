import { mainApi } from "@/app/mainApi.js";



const serviceApi = mainApi.injectEndpoints({
    endpoints: (buider) => ({

        getServices: buider.query({
            query: (params) => ({
                url: '/services',
                method: 'GET',
                params
            }),
            providesTags: ['Service'],
        }),

        getService: buider.query({
            query: (id) => ({
                url: `/services/${id}`,
                method: 'GET',
            }),
            providesTags: ['Service'],
        }),

        addService: buider.mutation({
            query: (q) => ({
                url: '/services',
                method: 'POST',
                body: q.body,
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Service']
        }),

        updateService: buider.mutation({
            query: (q) => ({
                url: `/services/${q.id}`,
                method: 'PATCH',
                body: q.body,
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Service']
        }),

        removeService: buider.mutation({
            query: (q) => ({
                url: `/services/${q.id}`,
                method: 'DELETE',
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Service']
        })
    })
});

export const {useGetServicesQuery, useGetServiceQuery, useAddServiceMutation, useUpdateServiceMutation, useRemoveServiceMutation} = serviceApi;