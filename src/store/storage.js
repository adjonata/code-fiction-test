export default {
  SET_STORAGE(name, value) {
    return localStorage.setItem(name, JSON.stringify(value));
  },
  GET_STORAGE(name) {
    return JSON.parse(localStorage.getItem(name));
  },
  REM_STORAGE(name) {
    return localStorage.removeItem(name);
  },
};
