import _ from 'lodash';

export const state = () => ({
  studies: [],
  study: {}
});

export const getters = {
  getStudies(state) {
    return state.studies;
  },
  getStudy(state) {
    return state.study;
  }
};

export const mutations = {
  SET_STUDIES(state, studies) {
    state.studies = studies;
  },
  GET_STUDY(state, study) {
    state.study = study;
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
        shortDesc: doc.data().shortDesc,
        skills: doc.data().skills,
        slug: doc.data().slug
      }));

    commit('SET_STUDIES', _.cloneDeep(allStudies));
  },
  async fetchOneStudy({ commit }, slug) {
    commit('GET_STUDY', {});
    const currentLocale = this.app.i18n.locales.find((i) => { return i.code === this.$i18n.locale; });
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    const snapshot = await this.$fireStore.collection(`studies_${currentLocale.code}`).where('slug', '==', slug).get();

    const studies = snapshot.docChanges()
      .map(({ doc }) => ({
        id: doc.id,
        title: doc.data().title,
        school: doc.data().school,
        city: doc.data().city,
        start: new Date(doc.data().start.seconds * 1000).toLocaleDateString(currentLocale.iso, dateOptions),
        end: new Date(doc.data().end.seconds * 1000).toLocaleDateString(currentLocale.iso, dateOptions),
        shortDesc: doc.data().shortDesc,
        longDesc: doc.data().longDesc,
        skills: doc.data().skills,
        slug: doc.data().slug
      }));
    const matchingStudy = studies[0];

    commit('GET_STUDY', matchingStudy);
  }
};
