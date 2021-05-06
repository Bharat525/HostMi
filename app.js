let html = `<img src="/img/download-free-png-correct-prompt-correct-right-icon-with-png-and-right-icon-png-512_512.jpg" alt="">
<h3>Thanks for submition</h3>`
let form = document.querySelector('.form');
let inputName = document.getElementById('name');
let mailInput = document.getElementById('mail');
let companyName = document.getElementById('company');
const links = document.querySelector('.Links');

console.log(links)



const linkBtn = document.querySelector('.Links')

// linkBtn.addEventListener('click' , humBurger)

function humBurger(e){
    e.classList.toggle('change');
    linkBtn.classList.toggle('active2') 


}



const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', submit)


console.log(submitBtn);



    


function submit(){


    if(inputName.value.length > 3 && mailInput.value && companyName.value){
        form.innerHTML = ""
        form.innerHTML = html

        console.log("hey")

        console.log(form);

    }else{
        inputName.style.border = "1px solid red"
    }




}





// here we have iteam var

const count = document.querySelectorAll('.count');
console.log(count);


count.forEach( i => {

    i.innerHTML = 0;

    // here we have update counter function
    const UpdateCount = () => {
        const target = +i.getAttribute('data-target')
        // console.log(target)
        const ourNew =+ i.innerText;
        const incress = target/8;

        

        // here we have IF else

        if(ourNew < target){
            i.innerHTML = `${Math.ceil(ourNew + incress)}`
            setTimeout(UpdateCount, 100);
        }else{
            i.innerHTML = target;
        }
        
    }

    UpdateCount();


})