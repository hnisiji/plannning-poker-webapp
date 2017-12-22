<template>
  <div class="poker">
      <card class="poker--card" v-for="(letters, index) in sequence" :key="index" :letters="letters"></card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from './Card.vue'
export default {
    name: 'app',
    components: { Card },
    computed: mapState({
        sequence(state) {
            const [, sequence] = state.sequences[state.current];
            return sequence;
        },
    }),
};
</script>

<style>
.poker {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}

.poker--card {
    width: 33%;
    background-color: red;
    border: 1px solid white;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
}

</style>
