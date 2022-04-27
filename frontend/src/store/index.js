import { createStore } from 'vuex';
import carrousselOne from './modules/carrousselone';
import carrousselTwo from './modules/carrousseltwo';
import carrousselThree from './modules/carrousselthree';
import carrousselFour from './modules/carrousselfour';
import carrousselFive from './modules/carrousselfive';

const store = createStore ({
  modules: {
    carrousselOne,
    carrousselTwo,
    carrousselThree,
    carrousselFour,
    carrousselFive,
  }
})

export default store;

