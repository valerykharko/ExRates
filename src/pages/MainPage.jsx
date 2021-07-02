import React, { useContext, useEffect, useState } from "react";
import "../styles/MainPage.module.css";
import { observer } from "mobx-react-lite";
import {
  fetchCoursesEUR,
  fetchCoursesRUB,
  fetchCoursesUSD,
} from "../http/mainAPI";
import { Context } from "../index";

const MainPage = observer(() => {
  const { store } = useContext(Context);

  useEffect(() => {
    fetchCoursesEUR(292, store.firstDate, store.lastDate).then((data) => {
      store.setCoursesEUR(data);
    });
    fetchCoursesUSD(145, store.firstDate, store.lastDate).then((data) => {
      store.setCoursesUSD(data);
    });
    fetchCoursesRUB(298, store.firstDate, store.lastDate).then((data) => {
      store.setCoursesRUB(data);
    });
  }, [
    store.setCoursesEUR,
    store.setCoursesUSD,
    store.setCoursesRUB,
    store.firstDate,
    store.lastDate,
  ]);

  let maxRub = 0;
  store.coursesRUB.map((courseRUB) => {
    if (courseRUB.Cur_OfficialRate > maxRub) {
      maxRub = courseRUB.Cur_OfficialRate;
    }
  });

  let minRub = 20;
  store.coursesRUB.map((courseRUB) => {
    if (courseRUB.Cur_OfficialRate < minRub) {
      minRub = courseRUB.Cur_OfficialRate;
    }
  });

  let maxEur = 0;
  store.coursesEUR.map((courseEUR) => {
    if (courseEUR.Cur_OfficialRate > maxEur) {
      maxEur = courseEUR.Cur_OfficialRate;
    }
  });

  let minEur = 20;
  store.coursesEUR.map((courseEUR) => {
    if (courseEUR.Cur_OfficialRate < minEur) {
      minEur = courseEUR.Cur_OfficialRate;
    }
  });

  let maxUsd = 0;
  store.coursesUSD.map((courseUSD) => {
    if (courseUSD.Cur_OfficialRate > maxUsd) {
      maxUsd = courseUSD.Cur_OfficialRate;
    }
  });

  let minUsd = 20;
  store.coursesUSD.map((courseUSD) => {
    if (courseUSD.Cur_OfficialRate < minUsd) {
      minUsd = courseUSD.Cur_OfficialRate;
    }
  });

  return (
    <>
      <h1>Курс Валют</h1>
      <table>
        <thead>
          <tr>
            <th>{""}</th>
            <>
              {store.coursesEUR.map((courseEUR) => (
                <th key={courseEUR.id}>{courseEUR.Date.slice(0, 10)}</th>
              ))}
            </>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EUR</td>
            <>
              {store.coursesEUR.map((courseEUR) => {
                if (courseEUR.Cur_OfficialRate === maxEur) {
                  return (
                    <td style={{ color: "orange" }} key={courseEUR.Date}>
                      {courseEUR.Cur_OfficialRate}
                    </td>
                  );
                } else if (courseEUR.Cur_OfficialRate === minEur) {
                  return (
                    <td style={{ color: "green" }} key={courseEUR.Date}>
                      {courseEUR.Cur_OfficialRate}
                    </td>
                  );
                } else {
                  return (
                    <td key={courseEUR.Date}>{courseEUR.Cur_OfficialRate}</td>
                  );
                }
              })}
            </>
          </tr>
          <tr>
            <td>USD</td>
            <>
              {store.coursesUSD.map((courseUSD) => {
                if (courseUSD.Cur_OfficialRate === maxUsd) {
                  return (
                    <td style={{ color: "orange" }} key={courseUSD.Date}>
                      {courseUSD.Cur_OfficialRate}
                    </td>
                  );
                } else if (courseUSD.Cur_OfficialRate === minUsd) {
                  return (
                    <td style={{ color: "green" }} key={courseUSD.Date}>
                      {courseUSD.Cur_OfficialRate}
                    </td>
                  );
                } else {
                  return (
                    <td key={courseUSD.Date}>{courseUSD.Cur_OfficialRate}</td>
                  );
                }
              })}
            </>
          </tr>
          <tr>
            <td>RUB</td>
            <>
              {store.coursesRUB.map((courseRUB) => {
                if (courseRUB.Cur_OfficialRate === maxRub) {
                  return (
                    <td style={{ color: "orange" }} key={courseRUB.Date}>
                      {courseRUB.Cur_OfficialRate}
                    </td>
                  );
                } else if (courseRUB.Cur_OfficialRate === minRub) {
                  return (
                    <td style={{ color: "green" }} key={courseRUB.Date}>
                      {courseRUB.Cur_OfficialRate}
                    </td>
                  );
                } else {
                  return (
                    <td key={courseRUB.Date}>{courseRUB.Cur_OfficialRate}</td>
                  );
                }
              })}
            </>
          </tr>
        </tbody>
      </table>
    </>
  );
});

export default MainPage;
