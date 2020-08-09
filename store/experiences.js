import _ from 'lodash';

export const state = () => ({
  experiences: [],
  experience: {}
});

export const getters = {
  getExperiences(state) {
    return state.experiences;
  },
  getExperience(state) {
    return state.experience;
  }
};

export const mutations = {
  SET_EXPERIENCES(state, experiences) {
    state.experiences = experiences;
  },
  GET_EXPERIENCE(state, experience) {
    state.experience = experience;
  }
};

export const actions = {
  async fetchExperiences({ commit }) {
    const snapshot = await this.$fireStore.collection(`experiences_${this.app.i18n.locale}`).orderBy('id', 'desc').get();

    const allExperiences = snapshot.docChanges()
      .map(({ doc }) => ({
        uid: doc.id,
        id: doc.data().id,
        title: doc.data().title,
        company: doc.data().company,
        place: doc.data().place,
        type: doc.data().type,
        shortDesc: doc.data().shortDesc,
        skills: doc.data().skills,
        slug: doc.data().slug
      }));

    commit('SET_EXPERIENCES', _.cloneDeep(allExperiences));
  },
  async fetchOneExperience({ commit }, slug) {
    commit('GET_EXPERIENCE', {});
    const currentLocale = this.app.i18n.locales.find((i) => { return i.code === this.$i18n.locale; });
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    const snapshot = await this.$fireStore.collection(`experiences_${currentLocale.code}`).where('slug', '==', slug).get();

    const experiences = snapshot.docChanges()
      .map(({ doc }) => ({
        uid: doc.id,
        id: doc.data().id,
        title: doc.data().title,
        company: doc.data().company,
        place: doc.data().place,
        type: doc.data().type,
        skills: doc.data().skills,
        slug: doc.data().slug,
        start: new Date(doc.data().start.seconds * 1000).toLocaleDateString(currentLocale.iso, dateOptions),
        end: new Date(doc.data().end.seconds * 1000).toLocaleDateString(currentLocale.iso, dateOptions)
      }));
    const matchingExperience = experiences[0];

    const snapshot2 = await this.$fireStore.collection(`missions_${currentLocale.code}`).where('experienceId', '==', matchingExperience.id).get();
    const matchingExperienceMissions = snapshot2.docChanges().map(({ doc }) => ({
      uid: doc.id,
      id: doc.data().id,
      title: doc.data().title
    }));

    matchingExperience.missions = matchingExperienceMissions;

    commit('GET_EXPERIENCE', matchingExperience);
  }
};
