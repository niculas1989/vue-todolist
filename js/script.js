console.log('JS ok');
console.log('Vue OK', Vue);

Vue.config.devtools = true;

//| Inizializzo Vue
const root = new Vue({
    el: '#root',
    data: {
        listElements: [
            { text: 'Svegliarsi presto', done: false },
            { text: 'Accendere almeno 15 minuti prima il PC', done: false },
            { text: 'Seguire attentamente', done: false },
            { text: 'Prendere appunti', done: false },
            { text: 'Fare le esercitazioni pomeridiane', done: false },
            { text: 'Svagarsi dopo', done: false },
        ]
    },
    methods: {

    }
});