import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./Bar";
import Header from "../../components/TheHeader";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, Tunisia and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;