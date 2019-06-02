export const state = () => ({
  currentCourse: undefined
});

export const mutations = {
  setCurrentCourse(state, currentCourse) {
    state.currentCourse = currentCourse;
  }
};
