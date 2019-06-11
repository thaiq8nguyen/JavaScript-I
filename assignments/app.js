

let app =  new Vue({
    el: "#app",
    data(){
        return {
            query: null,
            interns: [
                {
                  "id": 1,
                  "name": "Mitzi",
                  "email": "mmelloy0@psu.edu",
                  "gender": "F"  
                },
                {
                  "id": 2,
                  "name": "Kennan",
                  "email": "kdiben1@tinypic.com",
                  "gender": "M"   
                },
                {
                  "id": 3,
                  "name": "Keven",
                  "email": "kdiben1@tinypic.com",
                  "gender": "M"   
                },
                {
                  "id": 4,
                  "name": "Gannie",
                  "email": "kmummery2@wikimedia.org",
                  "gender": "M"   
                },
                {
                  "id": 5,
                  "name": "Antonietta",
                  "email": "adaine5@samsung.com",
                  "gender": "F"   
                }
              
              ],
              result: ""
        }
    },
    methods:{
        findInternNameByID() {

        
            const index = this.interns.findIndex((intern) => {
                

                return intern.id === parseInt(this.query);

            });

            
            
            if(index !== -1){
                this.result = this.interns[index].name;
            } else {
                this.result = "Intern not found" ; 
            }
            
                
            
            
        }
    
        
            
    }
});