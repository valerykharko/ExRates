import { $host } from "./index";

export const fetchUser = async (name) => {
  const { data } = await $host.get("users/" + name);
  return data;
};

export const fetchCoursesEUR = async (CUR_ID, startdate, enddate) => {
  const { data } = await $host.get("dynamics/" + CUR_ID, {
    params: {
      startdate,
      enddate,
    },
  });
  return data;
};

export const fetchCoursesUSD = async (CUR_ID, startdate, enddate) => {
  const { data } = await $host.get("dynamics/" + CUR_ID, {
    params: {
      startdate,
      enddate,
    },
  });
  return data;
};

export const fetchCoursesRUB = async (CUR_ID, startdate, enddate) => {
  const { data } = await $host.get("dynamics/" + CUR_ID, {
    params: {
      startdate,
      enddate,
    },
  });
  return data;
};
