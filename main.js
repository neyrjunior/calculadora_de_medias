    const formAtv = document.getElementById('form');
    const imgApro = `<img src="./images/aprovado.png" alt="emoji feliz"/>`
    const imgRep = `<img src="./images/reprovado.png" alt="emoji triste"/>`
    let linhas = ''
    const arrMateria = [];
    const arrNotas = [];
    const spanApr = '<span class="resultado aprovado">Aprovado</span>'
    const spanRep = '<span class="resultado reprovado">Reprovado</span>'
    const notaMin = parseFloat(prompt('Digite a nota minima'))

    formAtv.addEventListener('submit', function(e) {
    e.preventDefault();

    addlinhas();
    atualizaTab();
    atualizaMedia();
    })
    function addlinhas() {
    const inputMateria = document.getElementById('materia');
    const inputNota = document.getElementById('nota');

    if (arrMateria.includes(inputMateria.value)) {
        alert(`A atividade:  ${inputMateria.value} já foi adicionada`)
    } else{

    arrMateria.push(inputMateria.value);
    arrNotas.push(parseFloat(inputNota.value));

    let linha = `<tr>`
    linha += `<td>${inputMateria.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= notaMin ? imgApro : imgRep }</td>`
    linha += `</tr>`

    linhas += linha

    inputMateria.value = '';
    inputNota.value = '';
    }}
    function atualizaTab() {

    const bodyTable = document.querySelector('tbody')
    bodyTable.innerHTML = linhas;
    }
    function atualizaMedia() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('medvalor').innerHTML = mediaFinal;
    document.getElementById('medresul').innerHTML = mediaFinal >= notaMin ? spanApr : spanRep;
    } 
    function calculaMediaFinal() {
    let somaNotas = 0;

    for (let i = 0; i < arrNotas.length; i++) {
    somaNotas += arrNotas[i];
    }  
    return somaNotas / arrNotas.length
    }