

const { createApp } = Vue;



const DateTime = luxon.DateTime;
const now = DateTime.now();





createApp({
    data() {
        return {
            response: '',
            emails: [],
        };

    },

    methods: {

        getData(){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(this);

                console.log(response.data.response)
                this.response = response.data.response
                this.generaEmails()
            })

        }, 
        
        generaEmails(){
            for (let index = 0; index < 10; index++) {
               let element = this.response;
                this.emails.push(element)
                
            }
            console.log(this.emails)
        }


    },

    created() {
        this.getData()
        
    }
   
    
}).mount("#app");

