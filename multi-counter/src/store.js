import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count: []
};

const store = new Vuex.Store({
    state,
    getters: {
        getCountByIndex: (state) => (index) => {
            return state.count[index] || 0;
        },
        sum: (state) => () => {
            if (state.count.length > 0) {
                return state.count.reduce((accumulator, currentValue) => accumulator + currentValue);
            } else {
                return 0;
            }
        }
    },
    mutations: {
        increment(state, index) {
            const preValue = this.getters.getCountByIndex(index);
            Vue.set(state.count, index, preValue + 1);
        },
        decrement(state, index) {
            const preValue = this.getters.getCountByIndex(index);
            Vue.set(state.count, index, preValue - 1);
        }
    }
});

export default store
