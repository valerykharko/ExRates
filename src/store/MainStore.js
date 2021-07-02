import { makeAutoObservable } from "mobx";

export default class MainStore {
  constructor() {
    this._coursesEUR = [];
    this._coursesUSD = [];
    this._coursesRUB = [];
    this._firstDate = "2021-6-21";
    this._lastDate = "2021-6-27";
    makeAutoObservable(this);
  }

  setCoursesEUR(coursesEUR) {
    this._coursesEUR = coursesEUR;
  }

  setCoursesUSD(coursesUSD) {
    this._coursesUSD = coursesUSD;
  }

  setCoursesRUB(coursesRUB) {
    this._coursesRUB = coursesRUB;
  }

  setFirstDate(firstDate) {
    this._firstDate = firstDate;
  }

  setLastDate(lastDate) {
    this._lastDate = lastDate;
  }

  get coursesEUR() {
    return this._coursesEUR;
  }

  get coursesUSD() {
    return this._coursesUSD;
  }

  get coursesRUB() {
    return this._coursesRUB;
  }

  get firstDate() {
    return this._firstDate;
  }

  get lastDate() {
    return this._lastDate;
  }
}
