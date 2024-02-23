const addressFrom = document.querySelector("#address-from");
const cepInput = document.querySelector("#cep"); 
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInput = document.querySelectorAll("[data-input]");


const fadeElement = document.querySelector("#fade");

const closeButton = document.querySelector("#close-message");

// Validar CEP input

cepInput.addEventListener("keypress", (e)=> {
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);


    // allow only numbers

    if(!onlyNumbers.test(key)){
        e.preventDefault();
        return;
    }
});

// Get addres event

cepInput.addEventListener("keyup", (e) =>{

    const inputValue = e.target.value;

    //Check if we have the correct length
    if (inputValue.length === 8 ){
        getAddress(inputValue);
    }
});


// Get customer address from API

const getAddress = async (cep) => {
    toggleLoader();

    cepInput.blur();

    const apiUrl = `https;//viacep.com.br/ws/${cep}/json`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    //show error e rest from 

    if(data.erro === "true"){

        if(!addressInput.hasAttribute("disabled")){
            toggleDisable();
        };

        addressFrom.reset();
        toggleLoader();
       toggleMessage("CEP invaálido, tente novamente.")
        return;
    }
    if(addressInput.value === ""){
        toggleDisable();
    };

    addressInput.value = data.logradrouro;
    cityInput.value = data.localidade;
    neighborhoodInput.value = data.bairro;
    regionInput.value = data.uf;


    toggleLoader()
};

//add or remove disabled attribute

const toggleDisable = () =>{
    if (regionInput.hasAttribute("disabled")){
        formInput.forEach((input) => {
            input.removeAttribute("disabled");
        });
    }else{
        formInputs.forEach((input) => {
            input.setAttribute("disable", "disabled");
        });
    }
};



// show or hide loader 

const toggleLoader = () => {
    const loaderElement = document.querySelector("#loader");

    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");

};


//show or hide message 

const toggleMessage = (msg) =>{
    const messageElement = document.querySelector("#message");

    const messageElementText = document.querySelector("#message p");

    messageElementText.innerText = msg;

    fadeElement.classList.toggle("hide");
    messageElement.classList.toggle("hide");
}

//close message modal 

closeButton.addEventListener("click", () => toggleMessage());


// Save address: tem que ser modificado para enviar par api

addressFrom.addEventListener("submit", (e) => {
    e.preventDefault();

    toggleLoader();

    setTimeout(()=>{
        toggleLoader();

        toggleMessage("Endereço salvo com sucesso!");

        addressFrom.reset();

        toggleDisable();
    }, 1500);
});