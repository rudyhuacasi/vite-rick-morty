<script>
import listCard from './components/listCard.vue';
import { store } from './store';
import axios from 'axios';
export default {
    name: `Component`,
    data() {
        return {
            store,
        };
    },
    components: {
        listCard,
    },
    created() {
        axios.get(this.store.apiUrl).then((response) => {
            this.store.data = response.data.data;
            this.store.meta = response.data.meta;

            //  console.log(response.data);
            //  console.log(this.store.results);
        });
    }
}
</script>
<template>
    <header class="container text-center">
        <h1 class="m-3">Rick and Morty App</h1>
        <div class="container">
            <input type="text" class=" m-2  d-inline w-15 form-control" placeholder="Search character" aria-label="Username">
            <select class=" m-2  form-select d-inline w-15" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Select status</option>
                <option value="1">Human</option>
                <option value="2">Alien</option>
            </select>
      
            <button type="button" class=" m-2 btn btn-primary">Search</button>
            <button type="button" class=" m-2 btn btn-warning">Reset</button>
        </div>
    </header>
    <listCard />
</template>
<style></style>
