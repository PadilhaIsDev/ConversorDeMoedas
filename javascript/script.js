function updateCurrencyInfo() {
    // Select
    const selectedCurrency = document.getElementById("tipo-moeda").value;

    // Bloco Um
    const blocoUm = document.getElementById("dollar");
    const blocoUmMoeda = document.getElementById("bloco-1")
    const blocoUmImg = blocoUm.querySelector(".img-bloco");
    const blocoUmValue = blocoUm.querySelector("#bloco-1Value");

   // Bloco Dois
    const blocoDois = document.getElementById('euro');
    const blocoDoisMoeda = document.getElementById('bloco-2');
    const blocoDoisImg = blocoDois.querySelector('.img-bloco');
    const blocoDoisValue = blocoDois.querySelector('#bloco-2Value');
    
   // Bloco Três
    const blocoTres = document.getElementById('libra');
    const blocoTresMoeda = document.getElementById('bloco-3');
    const blocoTresImg = blocoTres.querySelector('.img-bloco');
    const blocoTresValue = blocoTres.querySelector('#bloco-3Value');

   // Bloco Quatro
    const blocoQuatro = document.getElementById('iene');
    const blocoQuatroMoeda = document.getElementById('bloco-4');
    const blocoQuatroImg = blocoQuatro.querySelector('.img-bloco');
    const title = document.getElementById('titulo');
    const blocoQuatroValue = blocoQuatro.querySelector('#bloco-4Value');

    // Set the selected currency block
    if (selectedCurrency === "real-select") {
        title.textContent = 'Digite um valor R$';

        blocoUmMoeda.textContent = 'Dollar: ';
        blocoUmImg.src = '../img/dollar.png'; 
        blocoUmValue.textContent = '';  
        
        blocoDoisMoeda.textContent = 'Euro: ' ;
        blocoDoisImg.src = '../img/euro.png';
        blocoDoisValue.textContent = '';

        blocoTresMoeda.textContent = 'Libra: ';
        blocoTresImg.src = '../img/libra.png';
        blocoTresValue.textContent = '';

        blocoQuatroMoeda.textContent = 'Yen: ';
        blocoQuatroImg.src = '../img/iene.png';
        blocoQuatroValue.textContent = '';
    } else if (selectedCurrency === 'dollar-select'){
        title.textContent = 'Digite um valor US$';

        blocoUmMoeda.textContent = 'Real: ';
        blocoUmImg.src = '../img/real.png';  
        blocoUmValue.textContent = '';  
        
        blocoDoisMoeda.textContent = 'Euro: ' ;
        blocoDoisImg.src = '../img/euro.png';
        blocoDoisValue.textContent = '';

        blocoTresMoeda.textContent = 'Libra: ';
        blocoTresImg.src = '../img/libra.png';
        blocoTresValue.textContent = '';

        blocoQuatroMoeda.textContent = 'Yen: ';
        blocoQuatroImg.src = '../img/iene.png';
        blocoQuatroValue.textContent = '';
    } else if (selectedCurrency === 'euro-select') {
        title.textContent = 'Digite um valor €';

        blocoUmMoeda.textContent = 'Real: ';
        blocoUmImg.src = '../img/real.png';  
        blocoUmValue.textContent = '';  
        
        blocoDoisMoeda.textContent = 'Dollar: ';
        blocoDoisImg.src = '../img/dollar.png';
        blocoDoisValue.textContent = '';

        blocoTresMoeda.textContent = 'Libra: ';
        blocoTresImg.src = '../img/libra.png';
        blocoTresValue.textContent = '';

        blocoQuatroMoeda.textContent = 'Yen: ';
        blocoQuatroImg.src = '../img/iene.png';
        blocoQuatroValue.textContent = '';
    } else if (selectedCurrency === 'libra-select') {
        title.textContent = 'Digite um valor £';

        blocoUmMoeda.textContent = 'Real: ';
        blocoUmImg.src = '../img/real.png';
        blocoUmValue.textContent = ''; 

        blocoDoisMoeda.textContent = 'Dollar: ';
        blocoDoisImg.src = '../img/dollar.png';
        blocoDoisValue.textContent = '';

        blocoTresMoeda.textContent = 'Euro: ';
        blocoTresImg.src = '../img/euro.png';
        blocoTresValue.textContent = '';

        blocoQuatroMoeda.textContent = 'Yen: ';
        blocoQuatroImg.src = '../img/iene.png';
        blocoQuatroValue.textContent = '';
    } else if (selectedCurrency === 'yen-select') {
        title.textContent = 'Digite um valor ¥';

        blocoUmMoeda.textContent = 'Real: ';
        blocoUmImg.src = '../img/real.png';
        blocoUmValue.textContent = ''; 

        blocoDoisMoeda.textContent = 'Dollar: ';
        blocoDoisImg.src = '../img/dollar.png';
        blocoDoisValue.textContent = '';

        blocoTresMoeda.textContent = 'Euro: ';
        blocoTresImg.src = '../img/euro.png';
        blocoTresValue.textContent = '';

        blocoQuatroMoeda.textContent = 'Libra: ';
        blocoQuatroImg.src = '../img/libra.png';
        blocoQuatroValue.textContent = '';
    };
};

function toConvert() {
    const inputElement = document.getElementById('valor');
    const ValueAtConvert = document.getElementById('valor').value;
    const selectedCurrency = document.getElementById("tipo-moeda").value;

    // Bloco Um
    const blocoUm = document.getElementById("dollar");
    const blocoUmValue = blocoUm.querySelector("#bloco-1Value");

   // Bloco Dois
    const blocoDois = document.getElementById('euro');
    const blocoDoisValue = blocoDois.querySelector('#bloco-2Value');

   // Bloco Três
    const blocoTres = document.getElementById('libra');
    const blocoTresValue = blocoTres.querySelector('#bloco-3Value');


   // Bloco Quatro
    const blocoQuatro = document.getElementById('iene');
    const blocoQuatroValue = blocoQuatro.querySelector('#bloco-4Value');

    if (selectedCurrency === 'real-select') {
        let realToDollar = (ValueAtConvert / 4.92).toFixed(2);
        blocoUmValue.textContent = `US$${realToDollar}`;

        let realToEuro = (ValueAtConvert / 5.37).toFixed(2);
        blocoDoisValue.textContent = `€${realToEuro}`;

        let realToLibra = (ValueAtConvert / 6.25).toFixed(2);
        blocoTresValue.textContent = `£${realToLibra}`;

        let realToYen = (ValueAtConvert * 30.12).toFixed(2);
        blocoQuatroValue.textContent = `¥${realToYen}`;

       inputElement.value = '';

       inputElement.focus();

    } else if (selectedCurrency === 'dollar-select') {
        let dollarToReal = (ValueAtConvert * 4.92).toFixed(2);
        blocoUmValue.textContent = `R$${dollarToReal}`;

        let dollarToEuro = (ValueAtConvert / 1.09).toFixed(2);
        blocoDoisValue.textContent = `€${dollarToEuro}`;

        let dollarToLibra = (ValueAtConvert / 1.27 ).toFixed(2);
        blocoTresValue.textContent = `£${dollarToLibra}`;

        let dollarToYen = (ValueAtConvert *148.14 ).toFixed(2);
        blocoQuatroValue.textContent = `¥${dollarToYen}`;

        inputElement.value = '';

        inputElement.focus();

    } else if (selectedCurrency === 'euro-select') {
        let euroToReal = (ValueAtConvert * 5.38).toFixed(2);
        blocoUmValue.textContent = `R$${euroToReal}`;

        let euroToDollar = (ValueAtConvert * 1.09).toFixed(2);
        blocoDoisValue.textContent = `US$${euroToDollar}`;

        let euroToLibra = (ValueAtConvert / 1.16).toFixed(2);
        blocoTresValue.textContent = `£${euroToLibra}`;

        let euroToYen = (ValueAtConvert * 161.70).toFixed(2);
        blocoQuatroValue.textContent = `¥${euroToYen}`;

        inputElement.value = '';

        inputElement.focus();
    } else if (selectedCurrency === 'libra-select') {
        let libraToReal = (ValueAtConvert * 6.26).toFixed(2);
        blocoUmValue.textContent = `R$${libraToReal}`;

        let libraToDollar = (ValueAtConvert * 1.27).toFixed(2);
        blocoDoisValue.textContent = `US$${libraToDollar}`;

        let libraToeuro = (ValueAtConvert *1.16).toFixed(2);
        blocoTresValue.textContent = `€${libraToeuro}`;

        let libraToYen = (ValueAtConvert * 188.20).toFixed(2);
        blocoQuatroValue.textContent = `¥${libraToYen}`;

        inputElement.value = '';

        inputElement.focus();
    } else if (selectedCurrency === 'yen-select') {
        let yenToReal = (ValueAtConvert / 29.99).toFixed(3);
        blocoUmValue.textContent = `R$${yenToReal}`;

        let yenToDollar = (ValueAtConvert / 148.14).toFixed(4);
        blocoDoisValue.textContent = `US$${yenToDollar}`;

        let yenToeuro = (ValueAtConvert / 161.70).toFixed(4);
        blocoTresValue.textContent = `€${yenToeuro}`;

        let YenToLibra = (ValueAtConvert / 188.32).toFixed(4);
        blocoQuatroValue.textContent = `£${YenToLibra}`;

        inputElement.value = '';

        inputElement.focus();
    };
}