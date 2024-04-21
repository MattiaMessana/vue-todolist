const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newToDo: {
                text:"",
                done: false,
            },

            toDo: [
                {
                    text: "Querterly Newsletters",
                    done: false,
                },
                {
                    text: "spesa",
                    done: false,
                },
            ],
        };
    },
    created() {
        
    },
    methods: {
       addToDo: function () {
        this.toDo.push({ ...this.newToDo });
        this.newToDo.text = "";
        this.newToDo.done = false;
       }
    }
}).mount('#app')

