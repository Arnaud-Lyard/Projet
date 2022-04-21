import axios from 'axios';

const state = {
    imageItems: [],
}

const API_URL = 'http://127.0.0.1:8000/';

const mutations = {

    UPDATE_IMAGE_ITEMS (state, payload) {
		state.imageItems = payload;
	},

    INCREMENT_IMAGE_ITEMS (state) {

		/* get data from state before shuffle */
		var firstArray = JSON.parse(JSON.stringify(state.imageItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.imageItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.imageItems[i];
				state.imageItems[i] = state.imageItems[j];
				state.imageItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.imageItems));

		/* Compare if first data from state is the same before and after shuffle */
		if (firstArray[0].id === secondArray[0].id){
			do {
				shuffleArray()
			}
			while (firstArray[0].id !== secondArray[0].id)
		}
    },

    DECREMENT_IMAGE_ITEMS (state) {

		/* get data from state before shuffle */
		var firstArray = JSON.parse(JSON.stringify(state.imageItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.imageItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.imageItems[i];
				state.imageItems[i] = state.imageItems[j];
				state.imageItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.imageItems));

		/* Compare if first data from state is the same before and after shuffle */
		if (firstArray[0].id === secondArray[0].id){
			do {
				shuffleArray()
			}
			while (firstArray[0].id !== secondArray[0].id)
		}
    },
}

const actions = {
    getImageItems ({ commit }) {
		axios.get(API_URL + 'api/image').then((response) => {
			commit('UPDATE_IMAGE_ITEMS', response.data)
		});
    },
    incrementImageItems ({ commit }, newUpdate) {
      	commit('INCREMENT_IMAGE_ITEMS', newUpdate)
    },
    decrementImageItems ({ commit }, newUpdate1) {
      	commit('DECREMENT_IMAGE_ITEMS', newUpdate1)
    }
}

const getters = {
    imageItems: state => state.imageItems,
}

const imageModule = {
    state,
    mutations,
    actions,
    getters
}
  
  export default imageModule;