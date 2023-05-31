const vm = Vue.createApp({
    data() {
        //gets called when created
        return {
            firstName: 'Pedro',
            lastName: 'Savian'
        }
    }
    //# id selector
    //. class selector
    // vm= viewModel
}).mount('#app')

setTimeout(()=> {
    vm.firstName = 'Pietro'
},2000)
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