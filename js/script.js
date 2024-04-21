const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newToDo: {
                text:"",
                done: false,
            },

            toDo: [],
        };
    },
    created() {
        //all avvio della pagina controllo se nel local storage c'è la chiave toDo
        const localToDo = localStorage.getItem("toDo");
        //se toDo è diverso da null 
        if (localToDo !== null) {
            // trasformo la stringa json in un array e lo salvo nel local storage
            this.toDo = JSON.parse(localToDo);
        } else {
            // altrimenti imposto array vuoto nel localstorgare
            this.toDo =  []; 
        }

    },
    methods: {
       addToDo: function () {
        this.toDo.push({ ...this.newToDo });
        this.newToDo.text = "";
        this.newToDo.done = false;

        // salvare in local storage 
        //1. trasformo l'array in una stirnga json
        const jsonToDo = JSON.stringify(this.toDo);
        //2. salvo la stringa in local storge
        localStorage.setItem("toDo", jsonToDo);
       }
    }
}).mount('#app')

