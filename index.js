
const form = document.querySelector("form")
const forms = document.querySelectorAll('.form-field')
const required = document.querySelectorAll('.required')
const submit = document.querySelector('.submit')
console.log(forms)
console.log(required)


form.addEventListener('submit', (submit) => {
    forms.forEach(function(field, index){
            submit.preventDefault()
            validation(index)
        }
    )

    })



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
     