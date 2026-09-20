import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const base = 'http://192.168.16.101:5000';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.16.101:5000/api'
    }),
    endpoints: (builder) => ({}),
});