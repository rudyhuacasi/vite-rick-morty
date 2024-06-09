<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: `Component`,
    data() {
        return {
            store,
        };
    },
    created() {
        axios.get(this.store.apiUrl).then((response) => {
            this.store.results = response.data.results;
            this.store.info = response.data.info;

            //   console.log(store.results);
            //  console.log(this.store.results);
        });
    }
}
</script>
<template>
    <main>
            <div class="container text-center">
                <div class="row">
                    <div class="col-3" v-for="card in store.results">
                        <img :src="card.image" alt="">
                        <h4>{{ card.name }}</h4>
                        <p>{{ card.status }}</p>
                        <p>{{ card.species }}</p>
                    </div>
                </div>
            </div>
    </main>
</template>