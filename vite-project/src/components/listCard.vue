<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: `Component`,
    props: {
        results: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            store,
        };
    },
    created() {
        axios.get(this.store.apiUrl).then((response) => {
            this.store.results = response.data.results;
            this.store.info = response.data.info;
        });
    }
    
}
</script>
<template>
    <main class="my-4">
            <div class="container text-center">
                <div class="row">
                    <div class="col-3" v-for="card in results" :key="card.id">
                        <img :src="card.image" alt="" />
                        <h4>{{ card.name }}</h4>
                        <p>{{ card.status }}</p>
                        <p>{{ card.species }}</p>
                    </div>
                </div>
            </div>
    </main>
</template>