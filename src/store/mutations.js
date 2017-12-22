import Vue from 'vue';

export default {
    editSequence(state, { name, sequence }) {
        const targetIndex = state.sequences.findIndex(([sequenceName]) => sequenceName === name);

        if (!targetIndex) {
            state.sequences.push([name, sequence, 0]);
            return;
        }

        const [, , locked] = state.sequences[targetIndex];
        if (locked) {
            throw new Error('Not editable');
        }

        Vue.set(state.sequences, targetIndex, [name, sequence, 0]);
    },

    setCurrent(state, index) {
        if (!state.sequences[index]) {
            throw new Error('Out of bounds');
        }

        Object.assign(state, { current: index });
    },
};
