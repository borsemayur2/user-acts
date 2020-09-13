import { IActivityPeriod } from "./IActivityPeriod";

export interface IUser {
  id: string;
  real_name: string;
  tz: string;
  activity_periods: IActivityPeriod[];
}
