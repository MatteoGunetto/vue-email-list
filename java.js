// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const { createApp } = Vue

createApp({
    data() {
        return {
            EmailsArray: []
        }
    },
    mounted() {
        for (let index = 1; index < 11; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {    
                    this.EmailsArray.push(resp.data.response);
                })
        }
        }
}).mount('#app')