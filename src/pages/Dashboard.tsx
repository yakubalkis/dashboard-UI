import { useEffect } from "react";
import { useLazyGetDashboardQuery } from "../api/appApi";

export const Dashboard: React.FC = () => {
  const [getDashboardQuery, { data, error, isLoading }] = useLazyGetDashboardQuery();

  useEffect(() => {
    getDashboardQuery();
  }, []);
  console.log(data, error, isLoading);

  return <div>Dashboard</div>;
};
