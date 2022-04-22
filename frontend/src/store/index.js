import { createStore } from 'vuex';
import carrousselone from './modules/carrousselone';

const store = createStore ({
  modules: {
    carrousselone,
  }
})

export default store;

