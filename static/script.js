function AdicionarInput() {
    const inputTarefa = document.getElementById('input-tarefa');
    inputTarefa.style.display = 'block';
    inputTarefa.focus();

    inputTarefa.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            AdicionarTarefa();
        }
    });
}

function AdicionarTarefa() {
    const inputTarefa = document.getElementById('input-tarefa');
    const tarefa = inputTarefa.value.trim();

    if (tarefa !== '') {
        const lista = document.getElementById('to-do__lista');
        const item = document.createElement('li');
        item.textContent = tarefa;

        const botaoMoverParaDoing = document.createElement('button');
        const imagemMoverParaDoing = document.createElement('img');
        imagemMoverParaDoing.src = '/static/assets/botao-check.png';
        imagemMoverParaDoing.alt = 'Mover para Fazendo';
        botaoMoverParaDoing.classList.add('botao-check');
        botaoMoverParaDoing.appendChild(imagemMoverParaDoing);
        botaoMoverParaDoing.onclick = function() {
            MoverParaDoing(item);
        };

        item.appendChild(botaoMoverParaDoing);
        lista.appendChild(item);
        inputTarefa.value = '';
        inputTarefa.style.display = 'none';
    }
}

function MoverParaDoing(item) {
    const listaDoing = document.getElementById('doing__lista');
    item.removeChild(item.lastChild); 

    const botaoMoverParaDone = document.createElement('button');
    const imagemMoverParaDone = document.createElement('img');
    imagemMoverParaDone.src = '/static/assets/botao-check.png'; 
    imagemMoverParaDone.alt = 'Mover para Feito';
    botaoMoverParaDone.classList.add('botao-check');
    botaoMoverParaDone.appendChild(imagemMoverParaDone);
    botaoMoverParaDone.onclick = function() {
        MoverParaDone(item);
    };

    item.appendChild(botaoMoverParaDone);
    listaDoing.appendChild(item);
}

function MoverParaDone(item) {
    const listaDone = document.getElementById('done__lista');
    item.removeChild(item.lastChild);

    const botaoExcluir = document.createElement('button');
    const imagemExcluir = document.createElement('img');
    imagemExcluir.src = '/static/assets/botao-check.png';
    imagemExcluir.alt = 'Excluir';
    botaoExcluir.classList.add('botao-check');
    botaoExcluir.appendChild(imagemExcluir);
    botaoExcluir.onclick = function() {
        item.remove();
    };

    item.appendChild(botaoExcluir);
    listaDone.appendChild(item);
}
