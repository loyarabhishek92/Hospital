import { mainApi } from "@/app/mainApi.js";


const doctorApi = mainApi.injectEndpoints({
    endpoints: (buider) => ({

        getDoctors: buider.query({
            query: (params) => ({
                url: '/doctors',
                method: 'GET',
                params
            }),
            providesTags: ['Doctor'],
        }),

        getDoctor: buider.query({
            query: (id) => ({
                url: `/doctors/${id}`,
                method: 'GET',
            }),
            providesTags: ['Doctor'],
        }),

        addDoctor: buider.mutation({
            query: (q) => ({
                url: '/doctors',
                method: 'POST',
                body: q.body,
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Doctor',]
        }),

        updateDoctor: buider.mutation({
            query: (q) => ({
                url: `/doctors/${q.id}`,
                method: 'PATCH',
                body: q.body,
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Doctor']
        }),

        removeDoctor: buider.mutation({
            query: (q) => ({
                url: `/doctors/${q.id}`,
                method: 'DELETE',
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Doctor']
        })
    })
});

export const {useGetDoctorsQuery, useGetDoctorQuery, useAddDoctorMutation, useUpdateDoctorMutation, useRemoveDoctorMutation} = doctorApi;