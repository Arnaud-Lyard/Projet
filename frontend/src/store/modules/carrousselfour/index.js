import api from "../../../services/Api";

const state = () => {
  return {
    carrousselFourItems: [],
	status:'loading'
  }
}

const mutations = {

	UPDATE_STATUS (state, payload) {
		state.status = payload;
	},

    UPDATE_IMAGE_ITEMS (state, payload) {
		state.carrousselFourItems = payload;
	},

    INCREMENT_IMAGE_ITEMS (state) {

		/* get data from state before shuffle */
		var firstArray = JSON.parse(JSON.stringify(state.carrousselFourItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.carrousselFourItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.carrousselFourItems[i];
				state.carrousselFourItems[i] = state.carrousselFourItems[j];
				state.carrousselFourItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.carrousselFourItems));

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
		var firstArray = JSON.parse(JSON.stringify(state.carrousselFourItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.carrousselFourItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.carrousselFourItems[i];
				state.carrousselFourItems[i] = state.carrousselFourItems[j];
				state.carrousselFourItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.carrousselFourItems));

		/* Compare if first data from state is the same before and after shuffle */
		if (firstArray[0].id === secondArray[0].id){
			do {
				shuffleArray()
			}
			while (firstArray[0].id !== secondArray[0].id)
		}
    }
}
	
    
const actions = {
    async getcarrousselItems ({ commit }) {
        let response = await api().get('/image');
        commit('UPDATE_IMAGE_ITEMS', response.data),
		commit('UPDATE_STATUS', 'success');
    },
    incrementcarrousselFourItems ({ commit }, newUpdate) {
      	commit('INCREMENT_IMAGE_ITEMS', newUpdate)
    },
    decrementcarrousselFourItems ({ commit }, newUpdate1) {
      	commit('DECREMENT_IMAGE_ITEMS', newUpdate1)
    }
}

const getters = {
	carrousselFourItems: state => state.carrousselFourItems,
	getstatus: state => state.status
}

const carrousselFourModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
  
  export default carrousselFourModule;