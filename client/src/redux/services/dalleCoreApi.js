import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dalleCoreApi = createApi({
    reducerPath: 'dalleCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dall-e-6kb4.onrender.com/api/v1/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            
            return headers;
        }
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getList: builder.query({
            query: () => 'post',
            providesTags: ['Post']
        }),
        getDalle: builder.query({
            query: (prompt) => ({
                url: 'dalle',
                method: 'POST',
                body: JSON.stringify({ prompt })
            })
        }),
        deletePost: builder.mutation({
            query: ({ id, public_id }) => {
                return ({
                    url: 'post',
                    method: 'DELETE',
                    body: JSON.stringify({
                        id,
                        public_id
                    })
                })
            },
            invalidatesTags: ['Post']
        }),
        createPost: builder.mutation({
            query: (body) => {
                return ({
                    url: 'post',
                    method: 'POST',
                    body: JSON.stringify(body)
                });
            },
            invalidatesTags: ['Post']
        })
    })
});

export const {
    useLazyGetDalleQuery,
    useGetListQuery,
    useDeletePostMutation,
    useCreatePostMutation,
} = dalleCoreApi;