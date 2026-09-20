import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


// export const base = 'http://192.168.16.101:5000';
export const base = 'https://hospital-nlk9.onrender.com';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hospital-nlk9.onrender.com/api'
    }),
    endpoints: (builder) => ({}),
});