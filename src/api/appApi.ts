import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  endpoints: (builder) => ({
    getDashboard: builder.query<void, void>({
      query: () => ({
        url: "", 
      }),
    }),
  }),
});

export { appApi };

export const { useLazyGetDashboardQuery } = appApi;
