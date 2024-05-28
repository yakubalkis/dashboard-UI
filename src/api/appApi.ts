import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import { API_RESPONSE } from "../types/types";

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery,
  endpoints: (builder) => ({
    getDashboard: builder.query<API_RESPONSE, void>({
      query: () => ({
        url: "",
      }),
    }),
  }),
});

export { appApi };

export const { useLazyGetDashboardQuery } = appApi;
