import { reactive } from 'vue';

export const store = reactive({
    results: [],
    info: {},
    apiUrl:'https://rickandmortyapi.com/api/character',
    
    apiInfo: {
        url: 'https://rickandmortyapi.com/api/v7/',
        resultNumber: 20,
        afterNumber: 0,
        
    }
});