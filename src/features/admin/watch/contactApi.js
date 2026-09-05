import { mainApi } from "@/app/mainApi.js";





const contactApi = mainApi.injectEndpoints({
    endpoints: (buider) => ({

        getContacts: buider.query({
            query: (params) => ({
                url: '/contact',
                method: 'GET',
                params
            }),
            providesTags: ['Contact'],
        }),

        addContact: buider.mutation({
            query: (q) => ({
                url: '/contact',
                method: 'POST',
                body: q.body,
                
            }),
            invalidatesTags: ['Contact']
        }),


        removeContact: buider.mutation({
            query: (q) => ({
                url: `/contact/${q.id}`,
                method: 'DELETE',
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Contact']
        })
    })
});

export const {useGetContactsQuery, useAddContactMutation, useRemoveContactMutation} = contactApi;