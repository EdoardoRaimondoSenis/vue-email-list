const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            
            .then(listemail => {
                const result = listemail.response.data;
                this.emails.push(result);
            });
        }
        
    }
    
}).mount('.prisultato');

console.log("giusto");