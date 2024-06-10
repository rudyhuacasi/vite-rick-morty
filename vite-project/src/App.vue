<script>
import axios from 'axios';
import listCard from './components/listCard.vue';

export default {
    name: `Component`,
    data() {
        return{
            searchName: '',
            searchStatus: '',
            results: []
        }
    },
    created() {
        this.fetchRandomCharacters();
    },
    methods: {
        async fetchRandomCharacters() {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character', {
                    params: {
                        page: Math.floor(Math.random() * 34) + 1, // Hay 34 páginas en la API, seleccionamos una al azar
                    },
                });
                this.results = response.data.results;
            } catch (error) {
                this.results = [];
            }
        },
        async search() {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character', {
                    params: {
                        name: this.searchName,
                        status: this.searchStatus
                    }
                });
                this.results = response.data.results;
            } catch (error) {
                this.results = [];
            }
        },
        reset() {
            this.searchName = '';
            this.searchStatus = '';
            this.results = [];
        }
    },
    components: {
        listCard,
    }
}
</script>
<template>
    <div id="app">
        <header class="container text-center">
            <h1 class="m-3">Rick and Morty App</h1>
            <div class="container">
                <input type="text" class="m-2 d-inline w-15 form-control" placeholder="Search character"
                    aria-label="Username" v-model="searchName" />
                <select class="m-2 form-select d-inline w-15" id="inputGroupSelect04"
                    aria-label="Example select with button addon" v-model="searchStatus">
                    <option value="">Select status</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <button type="button" class="m-2 btn btn-primary" @click="search">
                    Search
                </button>
                <button type="button" class="m-2 btn btn-warning" @click="reset">
                    Reset
                </button>
            </div>
        </header>
        <listCard :results="results" />
    </div>
</template>
<style></style>

