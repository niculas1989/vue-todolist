console.log('JS ok');
console.log('Vue OK', Vue);

Vue.config.devtools = true;

//| Inizializzo Vue
const root = new Vue({
    el: '#root',
    data: {
        toDo: [
            { text: '', done: false },
            { text: '', done: false },
            { text: '', done: false },
            { text: '', done: false },
            { text: '', done: false },
            { text: '', done: false },
        ]
    },
    methods: {

    }
});