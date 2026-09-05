import { mainApi } from "@/app/mainApi.js";





const appointmentApi = mainApi.injectEndpoints({
    endpoints: (buider) => ({

        getAppointments: buider.query({
            query: (params) => ({
                url: '/appointment',
                method: 'GET',
                params
            }),
            providesTags: ['Appointment'],
        }),

        getUserAppointments: buider.query({
            query: (id) => ({
                url: `/appointment/${id}`,
                method: 'GET',
            }),
            providesTags: ['Appointment'],
        }),

        addAppointment: buider.mutation({
            query: (q) => ({
                url: '/appointment',
                method: 'POST',
                body: q.body,
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Appointment']
        }),


        removeAppointment: buider.mutation({
            query: (q) => ({
                url: `/appointment/${q.id}`,
                method: 'DELETE',
                headers: {authorization: q.token}
            }),
            invalidatesTags: ['Appointment']
        })
    })
});

export const {useGetAppointmentsQuery, useGetUserAppointmentsQuery, useAddAppointmentMutation, useRemoveAppointmentMutation} = appointmentApi;