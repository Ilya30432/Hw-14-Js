const bth = document.querySelector('.bth');
const form = document.querySelector('.form')
const product = document.querySelector('.form-product')

bth.addEventListener('click', function(){
    form.style.display = "block"
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach(function (value, key) {
            formObject[key] = value
    }) 
    validName(formObject);
    function validName(object){
        if(!isNaN(object.name)){
            const span = document.querySelector('span')
            span.style.display = 'block'
        }else{
            for (const key in formObject){
                const newDiv = document.createElement('div')
                newDiv.textContent = `${key}: ${formObject[key]}`;
                product.appendChild(newDiv)
                }
        };
    };
});
