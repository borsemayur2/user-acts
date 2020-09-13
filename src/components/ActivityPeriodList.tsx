import React, { useState, useEffect } from "react";
import { IActivityPeriod } from "../interfaces/IActivityPeriod";
import { ActivityPeriodListContainer, Timezone } from "./StyledComponents";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import ActivityPeriodDetails from "./ActivityPeriodDetails";

import styled from "styled-components";

const MyCalendar = styled(Calendar)`
  margin: auto;
`;

interface IProps {
  activity_periods: IActivityPeriod[];
  timezone: string;
}

const ActivityPeriodList = ({ activity_periods, timezone }: IProps) => {
  const [date, setDate] = useState<any>(new Date());
  const [activities, setActivities] = useState<IActivityPeriod[]>([]);
  useEffect(() => {
    const getDateActivities = () => {
      const filtered_activity_periods = activity_periods.filter(
        (activity_period) => {
          const [_date] = activity_period.start_time.split("  ");
          const format = "MMM D YYYY";

          return moment(date).isSame(moment(_date, format));
        }
      );
      setActivities(filtered_activity_periods);
    };
    getDateActivities();
  }, [activity_periods, date]);

  return (
    <>
      <MyCalendar value={date} onChange={setDate} />
      {Boolean(activities.length) ? (
        <>
          <h4>Activity periods for {moment(date).format("MMM D, YYYY")}</h4>
          <Timezone>Timezone: {timezone}</Timezone>
          <ActivityPeriodListContainer>
            {activities.map((activity_period, index) => (
              <ActivityPeriodDetails
                key={index}
                activity_period={activity_period}
              />
            ))}
          </ActivityPeriodListContainer>
        </>
      ) : (
        <h3>No activities found for selected date.</h3>
      )}
    </>
  );
};

export default ActivityPeriodList;
