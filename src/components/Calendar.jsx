import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../index";
import styles from "../styles/Calendar.module.css";

const Calendar = () => {
  const { store } = useContext(Context);
  const [firstDate, setFirstDate] = useState(new Date("2021-6-21"));
  const [lastDate, setLastDate] = useState(new Date("2021-6-27"));

  store.setFirstDate(firstDate);
  store.setLastDate(lastDate);

  return (
    <>
      Выберите начальную дату:
      <DatePicker
        className={styles.block}
        selected={firstDate}
        onChange={(date) => setFirstDate(date)}
      />
      Выберите конечную дату:
      <DatePicker
        className={styles.block}
        selected={lastDate}
        onChange={(date) => setLastDate(date)}
      />
    </>
  );
};

export default Calendar;
