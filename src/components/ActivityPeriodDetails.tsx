import React from "react";
import { IActivityPeriod } from "../interfaces/IActivityPeriod";
import {
  ActivityPeriodDetailsContainer,
  ActivityPeriodCard,
} from "./StyledComponents";

interface IProps {
  activity_period: IActivityPeriod;
}

const ActivityPeriodDetails = ({ activity_period }: IProps) => {
  return (
    <ActivityPeriodDetailsContainer>
      <ActivityPeriodCard>
        {activity_period.start_time.split("  ")[1]} -{" "}
        {activity_period.end_time.split(" ")[3]}
      </ActivityPeriodCard>
    </ActivityPeriodDetailsContainer>
  );
};

export default ActivityPeriodDetails;
