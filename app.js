const vm = Vue.createApp({
    data() {
        //gets called when created
        return {
            firstName: 'Pedro',
            middleName: '',
            lastName: 'Savian',
            url: 'https://google.com',
            rawUrl: `<a href ="url" target="_blank">Google</a>`,
            age: 20
        }
    },
    //# id selector
    //. class selector
    // vm= viewModel
    methods: {
        //functions for appf
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}` 
        },
        increment(){
            this.age++
        },
        updateLastName(msg,event){
            //event.preventDefault()
            // removed because it now uses event modfiers .prevent
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    }
    //methods are functions that you can use inside you VIEW instance or TEMPLATE functions
}).mount('#app')

/*setTimeout(()=> {
    vm.firstName = 'Pietro'
    //vm.$data.firstName
    //vue proxy this to getter and setters
},2000)*/


//what element it controls
//expressions: evaluates to a single value, only expressions are allowed on the {} in the html
    //no var declarations / no code behinde de scenes
    //it should be created on the template where its mounted on --> app
    //data MUST be inside the data function

/*Vue.createApp({
        data() {
            //gets called when created
            return {
                firstName: 'Bruno',
                lastName: 'Rodrigues'
            }
        }
}).mount('#secondApp')*/
// this is usually not commum.