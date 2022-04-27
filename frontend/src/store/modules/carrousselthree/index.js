import api from "../../../services/Api";

const state = () => {
  return {
    carrousselThreeItems: [],
	status:'loading'
  }
}

const mutations = {

	UPDATE_STATUS (state, payload) {
		state.status = payload;
	},

    UPDATE_IMAGE_ITEMS (state, payload) {
		state.carrousselThreeItems = payload;
	},

    INCREMENT_IMAGE_ITEMS (state) {

		/* get data from state before shuffle */
		var firstArray = JSON.parse(JSON.stringify(state.carrousselThreeItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.carrousselThreeItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.carrousselThreeItems[i];
				state.carrousselThreeItems[i] = state.carrousselThreeItems[j];
				state.carrousselThreeItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.carrousselThreeItems));

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
		var firstArray = JSON.parse(JSON.stringify(state.carrousselThreeItems));
		
		/* define the function to shuffle the array */
		function shuffleArray() {
			for (var i = state.carrousselThreeItems.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = state.carrousselThreeItems[i];
				state.carrousselThreeItems[i] = state.carrousselThreeItems[j];
				state.carrousselThreeItems[j] = temp;
			}
		}

		/* execute the shuffleArray function */
		shuffleArray();
	
		/* get data from state after shuffle */
		var secondArray = JSON.parse(JSON.stringify(state.carrousselThreeItems));

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
    incrementcarrousselThreeItems ({ commit }, newUpdate) {
      	commit('INCREMENT_IMAGE_ITEMS', newUpdate)
    },
    decrementcarrousselThreeItems ({ commit }, newUpdate1) {
      	commit('DECREMENT_IMAGE_ITEMS', newUpdate1)
    }
}

const getters = {
	carrousselThreeItems: state => state.carrousselThreeItems,
	getstatus: state => state.status
}

const carrousselThreeModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
  
  export default carrousselThreeModule;