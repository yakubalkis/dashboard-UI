import React, { useState } from "react";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CustomTabPanel } from "./custom-tab-panel";

interface TabProps {
  tabContent: React.ReactNode;
  tabName: string;
}

interface TabPanelProps {
  firstTab: TabProps;
  secondTab: TabProps;
}

export const TableTabs: React.FC<TabPanelProps> = ({ firstTab, secondTab }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const tabHandleChange = (_: React.ChangeEvent<{}>, value: any) =>
    setSelectedTab(value);

  return (
    <Box width={"100%"}>
      <Box sx={{ marginLeft: "15px" }}>
        <Tabs
          value={selectedTab}
          onChange={tabHandleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ textTransform: "none" }}
            label={firstTab.tabName}
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            label={secondTab.tabName}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={selectedTab} index={0}>
        {firstTab.tabContent}
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={1}>
        {secondTab.tabContent}
      </CustomTabPanel>
    </Box>
  );
};
