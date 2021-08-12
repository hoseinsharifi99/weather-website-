const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#m1')
const message2 = document.querySelector('#m2')

message1.textContent=" "
message2.textContent=""

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    fetch('/weather?address='+location).then((response)=>{

        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
                message1.textContent=data.error
            }else{
                console.log(data.location)
                message1.textContent=data.location
                console.log(data.forecast)
                message2.textContent=data.forecast
            }
        })
    })
    
})