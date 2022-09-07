export const state = () => ({
  list: [],
  filtered: [],
  filter: {
    search: '',
  },
  currentScreen: null,
});

export const actions = {
  loadAll(context) {
    this.$axios.$get("/api/v1/screen-list").then(rows => context.commit('setScreens', rows));
  },
  async filterSearch ({ commit, dispatch }, search) {
    await commit('setFilterSearch', search);
  },
  async getById({ commit, dispatch }, id) {
    await commit('loadById', id);
  },
}

export const getters = {
  filterScreens(state) {
    const screens = [...state.list];

    if (!state.filter.search) {
      return screens;
    }

    return screens.filter(
      ({ name }) => name.toLowerCase().includes(state.filter.search.toLowerCase())
    );
  },
}

export const mutations = {
  setScreens(state, screens) {
    state.list = screens;
  },
  loadById(state, id) {
    state.currentScreen = state.list.find((screen) => screen.id === id);
  },
  setFilterSearch(state, search) {
    state.filter.search = search;
  },
}
