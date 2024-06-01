import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useLazyGetDashboardQuery } from "../api/appApi";
import { setTeams } from "../redux/slice/employeeSlice";
import { useAppDispatch } from "../redux/store";
import { LoadingScreen } from "../components/loading-screen/loading-screen";
import { ActivityHoursChart } from "../components/chart/activity-hours-chart/activity-hours-chart";
import { transformActivityHoursDataToChartData } from "../utils/transformActivityHoursDataToChartData";
import { DashboardCard } from "../components/dashboard-card/dashboard-card";
import { CoursesTable } from "../components/table/courses-table/courses-table";
import { TableTabs } from "../components/table/table-tabs/table-tabs";
import { transformTableData } from "../utils/transformTableData";
import { SkillsTable } from "../components/table/skills-table/skills-table";
import * as S from "./Dashboard.styled";

export const Dashboard: React.FC = () => {
  const [getDashboardQuery, { data, isSuccess, error, isLoading }] =
    useLazyGetDashboardQuery();
  const dispatch = useAppDispatch();

  const activityHoursChartData = transformActivityHoursDataToChartData(
    data?.data.activity_hours || []
  );

  const inProgressCoursesTableData = transformTableData(
    data?.data.in_progress_courses || []
  );
  const upcomingCoursesTableData = transformTableData(
    data?.data.upcoming_courses || []
  );

  const skillsInDevelopmentTableData = transformTableData(
    data?.data.skills_in_development || []
  );
  const topSkillsTableData = transformTableData(data?.data.top_skills || []);

  useEffect(() => {
    getDashboardQuery();
  }, []);
  console.log(data?.data);

  if (isSuccess) {
    dispatch(setTeams(data?.data.teams));
  }

  if (isLoading) return <LoadingScreen />;

  if (error) return <Box>Something went wrong.</Box>;

  return (
    <S.StyledRootBox>
      <Typography variant="h5">Dashboard UI</Typography>

      <DashboardCard
        title={"Activity Hours"}
        CardComponent={
          <ActivityHoursChart
            x_axis={activityHoursChartData.x_axis}
            y_axes={activityHoursChartData.y_axes}
          />
        }
      />

      <DashboardCard
        title={"Courses"}
        CardComponent={
          <TableTabs
            firstTab={{
              tabName: "In Progress",
              tabContent: <CoursesTable rows={inProgressCoursesTableData} />,
            }}
            secondTab={{
              tabName: "Upcoming",
              tabContent: <CoursesTable rows={upcomingCoursesTableData} />,
            }}
          />
        }
      />

      <DashboardCard
        title={"Skills"}
        CardComponent={
          <TableTabs
            firstTab={{
              tabName: "Top Skills",
              tabContent: <SkillsTable rows={topSkillsTableData} />,
            }}
            secondTab={{
              tabName: "Skills in Development",
              tabContent: <SkillsTable rows={skillsInDevelopmentTableData} />,
            }}
          />
        }
      />
    </S.StyledRootBox>
  );
};
