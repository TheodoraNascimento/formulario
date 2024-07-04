
const form = document.querySelector("form")
const forms = document.querySelectorAll('.form-field')
const required = document.querySelectorAll('.required')
const submit = document.querySelector('.submit')
console.log(forms)
console.log(required)
// console.log(submit)
// console.log(forms[0].value)

form.addEventListener('submit', (submit) => {
    forms.forEach(function(field, index){
            submit.preventDefault()
            validation(index)
        }
    )

    })


// addEventListener("click", function(event){
//     event.preventDefault()
//   });

    // form.forEach(function(field, index){ 
    //     if(form[index].value === ""){
    //         console.log(form[index].value)
    //         invalid(field)
            
    //     }
        

    // })


function validation(index){
        if(forms[index].value !== ""){
            forms[index].classList.add("valid")
            forms[index].classList.remove("invalid")
            required[index].innerHTML = ''
            return;
        }
       else if(forms[index].value === ""){
            required[index].innerHTML = 'campo obrigatório'
            forms[index].classList.add("invalid")

       }
    }
     
  
        
       

    // required.innerHTML = 'campo obrigatório'



// question.forEach(function(element, index){
//     addOrRemoveActive(element, index);

// })



// function addOrRemoveActive(element, index){
//     element.addEventListener('click', () => {


// document.querySelector("form").addEventListener("submit", myFunction);

// function myFunction() {
//   alert("The form was submitted");
// }