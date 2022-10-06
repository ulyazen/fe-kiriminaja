export const state = () => ({
  ekspedisi: {},
  team: {},
});

export const getters = {};

export const mutations = {
  setEkspedisi(state, payload) {
    state.ekspedisi = payload;
  },
  setTeam(state, payload) {
    state.team = payload;
  },
};

export const actions = {
  async fetchEkspedisi({ commit }) {
    const data = await this.$axios.$get("/ekspedisi");
    commit("setEkspedisi", data);
  },
  async fetchTeam({ commit }) {
    const data = await this.$axios.$get("/team");
    commit("setTeam", data);
  },
};
