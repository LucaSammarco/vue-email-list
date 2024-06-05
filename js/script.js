

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
                // console.log(this);

                // console.log(response.data.response)
                this.response = response.data.response
                // this.emails.push(this.response)
               

            })

        }, 
        
        generaEmails()
        {
          

            while (this.emails.length < 10 && this.response !== "") {
                
                this.getData();
                this.emails.push(this.response)
            } 
                
                console.log(this.emails)
           
                
        }
       
            


    },

    created() {
        this.getData()
        this.generaEmails()
        
    }
   
    
}).mount("#app");

