import _ from 'lodash';

export const state = () => ({
  studies: []
});

export const getters = {
  getStudies(state) {
    return state.studies;
  }
};

export const mutations = {
  SET_STUDIES(state, studies) {
    state.studies = studies;
  }
};

export const actions = {
  async fetchStudies({ commit }) {
    const snapshot = await this.$fireStore.collection(`studies_${this.app.i18n.locale}`).orderBy('id', 'desc').get();

    const allStudies = snapshot.docChanges()
      .map(({ doc }) => ({
        id: doc.id,
        title: doc.data().title,
        school: doc.data().school,
        city: doc.data().city,
        type: doc.data().type,
        start: doc.data().shortDesc,
        end: doc.data().end,
        shortDesc: doc.data().shortDesc,
        skills: doc.data().skills,
        slug: doc.data().slug
      }));

    commit('SET_STUDIES', _.cloneDeep(allStudies));
  }
};
