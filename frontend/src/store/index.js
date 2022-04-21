import { createStore } from 'vuex';
import image from './modules/image';

const store = createStore ({
  modules: {
    image,
  }
})

export default store;

