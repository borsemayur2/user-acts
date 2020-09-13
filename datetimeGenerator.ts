const fs = require("fs");
const moment = require("moment");

const NO_OF_RECORDS = 1000;
const DATE_STRING_FORMAT = "MMM D YYYY h:mmA";

const data = [];

const generateData = () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    let randomInt = Math.floor(Math.random() * (max - min)) + min;

    return randomInt;
  };

  const getActivityPeriods = () => {
    const activity_periods = [];
    for (let i = 0; i <= getRandomInt(100, 1000); i++) {
      activity_periods.push(getActivityPeriod());
    }
    return activity_periods;
  };

  const getActivityPeriod = () => {
    // Get random datetime in Unix seconds between last year and today
    const randomDateX = getRandomInt(
      moment().subtract(2, "months").format("x"),
      moment().format("x")
    );

    const start_time = moment(randomDateX).format(DATE_STRING_FORMAT);
    const randomMinuteInt = getRandomInt(5, 120);
    const end_time = moment(randomDateX)
      .add(randomMinuteInt, "minutes")
      .format(DATE_STRING_FORMAT);
    return { start_time, end_time };
  };

  const records = JSON.parse(
    fs.readFileSync("db_no_activity_periods.json", "utf8")
  );

  for (let record of records.members) {
    record.activity_periods = getActivityPeriods();
  }
  console.log(records);
  fs.writeFile("./src/db.json", JSON.stringify(records), "utf8", () =>
    console.log("Saved to JSON file")
  );

  return data;
};

generateData();

module.exports = generateData;
