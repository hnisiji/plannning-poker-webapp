import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import mutations from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state: {
        sequences: [
            ['Standard', ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '90', '&#xE541;'], 1],
            ['Fibonacci', ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '?', '&#x221E;', '&#xE541;'], 1],
            ['T-Shirts', ['XS', 'S', 'M', 'L', 'XL', '2XL', '?', '&#x221E;', '&#xE541;'], 1],
        ],
        current: 0,
    },
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});

