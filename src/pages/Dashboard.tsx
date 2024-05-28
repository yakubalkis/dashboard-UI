import { useEffect } from "react";
import { useLazyGetDashboardQuery } from "../api/appApi";
import { LoadingScreen } from "../components/loading-screen/loading-screen";
import { Box, Typography } from "@mui/material";
import * as S from "./Dashboard.styled";
import { ActivityHoursChart } from "../components/activity-hours-chart/activity-hours-chart";
import { separateActivityData } from "../utils/separateActivityData";
import { GraphCard } from "../components/graph-card/graph-card";
import { CoursesTable } from "../components/table/courses-table/courses-table";
import { transformCoursesTableData } from "../utils/transformCoursesTableData";

export const Dashboard: React.FC = () => {
  const [getDashboardQuery, { data, error, isLoading }] =
    useLazyGetDashboardQuery();

  const chartData = separateActivityData(data?.data.activity_hours || []);
  const tableData = transformCoursesTableData(
    data?.data.in_progress_courses || []
  );

  useEffect(() => {
    getDashboardQuery();
  }, []);
  console.log(data?.data);

  if (isLoading) return <LoadingScreen />;

  if (error) return <Box>Something went wrong.</Box>;

  return (
    <S.StyledRootBox>
      <Typography variant="h5">Dashboard UI</Typography>
      <GraphCard
        content={{ mainTitle: "Activity Hours", cardContents: undefined }}
        GraphComponent={
          <ActivityHoursChart
            x_axis={chartData.x_axis}
            y_axes={chartData.y_axes}
          />
        }
      />
      <GraphCard
        content={{ mainTitle: "In Progress Courses", cardContents: undefined }}
        GraphComponent={<CoursesTable rows={tableData} />}
      />
    </S.StyledRootBox>
  );
};
