const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        
        if(bmi <= 18.6)
        {
            result.innerHTML = `<span>You havr under Weight ${bmi}</span>`
        }else if(bmi > 18.6 && bmi < 24.9)
        {
            result.innerHTML = `<span>You have normal Weight ${bmi}</span>`
        }else if(bmi >= 24.9)
        {
            result.innerHTML = `<span>You have over Weight ${bmi}</span>`
        }
    }
})