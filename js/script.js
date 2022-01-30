console.log('JS ok');
console.log('Vue OK', Vue);

/*
Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

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
        ],
        newListElement: '',
    },
    methods: {
        listElementDelete(index) {
            this.listElements = this.listElements.filter((l, i) => {
                if (i === index) return false;
                else return true;
            })
        },
        addNewListElement() {
            const listElement = this.newListElement.trim();
            if (listElement) {
                this.listElements.push({ text: listElement, done: false });
            }
            this.newListElement = '';
        },
        check(index) {
            //this.listElements[index].done = !this.listElements[index].done;

            const updateListElement = this.listElements.map((listELement, i) => {
                if (i === index) listELement.done = !listELement.done;
                return listELement;

            });

        }
    }
});