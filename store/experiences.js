import _ from 'lodash';

export const state = () => ({
  experiences: []
});

export const getters = {
  getExperiences(state) {
    return state.experiences;
  }
};

export const mutations = {
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences;
  }
};

export const actions = {
  async fetchExperiences({ commit }) {
    const snapshot = await this.$fireStore.collection('experiences_fr').get();

    const allExperiences = snapshot.docChanges()
      .map(({ doc }) => ({
        id: doc.id,
        title: doc.data().title,
        company: doc.data().company,
        place: doc.data().place,
        type: doc.data().type,
        shortDesc: doc.data().shortDesc,
        skills: doc.data().skills,
        slug: doc.data().slug
      }));

    commit('SET_EXPERIENCES', _.cloneDeep(allExperiences));
  }
};
