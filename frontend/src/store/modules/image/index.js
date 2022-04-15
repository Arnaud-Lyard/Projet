import axios from 'axios';

const state = {
    imageItems: []
}

const mutations = {
    UPDATE_IMAGE_ITEMS (state, payload) {
      state.imageItems = payload;
    }
  }

const API_URL = 'http://127.0.0.1:8000/';

const actions = {
    getImageItems ({ commit }) {
      axios.get(API_URL + 'api/image').then((response) => {
        commit('UPDATE_IMAGE_ITEMS', response.data)
      });
    }
  }

  const getters = {
    imageItems: state => state.imageItems,
    imageItemById: (state) => (id) => {
      return state.imageItems.find(imageItem => imageItem.id === id)
    }
  }


  const imageModule = {
    state,
    mutations,
    actions,
    getters
  }
  
  export default imageModule;