// Fortaleza
const fortalezas_defeitos = {
    1: "O teto goteja.",
    2: "A fortaleza está infestada de ratos (veja a página 127 do Guia do Mestre).",
    3: "Alguma pessoa reivindica a fortaleza. A MdJ decide quem.",
    4: "Um fantasma (veja a página 90 do Guia do Mestre) assombra a fortaleza.",
    5: "Um bando de harpias (veja a página 96 do Guia do Mestre) tem um ninho na fortaleza.",
    6: "Muitos mortos foram enterrados nos terrenos da fortaleza, e às vezes ele acordam como mortos-vivos (veja a página 106 do Guia do Mestre)."
}

const fortaleza_calote = {
    1: "O serviçal deixa seu posto e também espalha rumores sobre sua mesquinhez. Adicione dois dados na próxima rolagem para eventos em sua fortaleza (veja a página 12 do Guia do Mestre).",
    2: "O serviçal deixa seu posto e rouba algo valioso quando sai. A MdJ determina o quê.",
    3: "O serviçal reclama alto e junta todos os outros serviçais da fortaleza sob a mesma causa. Todos eles desertam de seus postos e deixam a fortaleza.",
    4: "O serviçal continua em seu posto, mas faz seu trabalho de forma irregular e não realiza todas as obrigações. Role novamente se ele não for pago em uma semana.",
    5: "O serviçal continua trabalhando, mas espalha rumores sobre sua mesquinhez. O valor de sua Reputação conta como um passo acima para a próxima rolagem de eventos da fortaleza (veja a página 12 do Guia do Mestre). Role novamente se o serviçal não for pago em uma semana.",
    6: "O serviçal continua trabalhando diligentemente e sem reclamar. Role novamente se o serviçal não for pago em uma semana."
}

const fortaleza_desprotegida = {
    1: "Um príncipe, chefe orc ou similar da região (detalhes ao critério da MdJ) descobre a fortaleza desprotegida e a ocupa. Todos os serviçais fogem. Quando as aventureiras voltam, a fortaleza é guardada por 2D6 soldados ou guerreiros hostis.",
    2: "Outro bando de aventureiros toma a fortaleza para si. Todos os serviçais fogem. As PJs precisam usar a força para expulsar os intrusos ou negociar com eles.",
    3: "Um bando de harpias (veja a página 96 do Guia do Mestre) faz seu ninho na fortaleza. Elas fazem uma bagunça, comendo toda a COMIDA, roubando tudo que for reluzente e expulsando os serviçais. Quando as aventureiras retornam, elas precisam afugentar as harpias e também limpar a fortaleza (veja acima) antes que ela possa ser usada novamente.",
    4: "Um enorme urso cinzento entra na fortaleza e faz de uma parte dela o seu covil. Os serviçais ficam na fortaleza, mas evitam a parte que o urso habita.",
    5: "Um grupo de andarilhos faz da fortaleza seu abrigo temporário. Eles bagunçam tudo e roubam 2D6 unidades de COMIDA, caso exista alguma. De resto, deixam a fortaleza intocada.",
    6: "Por sorte, ninguém perturbou a fortaleza desprotegida."
}

const fortaleza_manutencao = {
    1: "Um enorme incêndio ocorre, destruindo D6 funções aleatórias da fortaleza. Role também um D6 para cada serviçal da fortaleza — uma rolagem de 1 significa que o serviçal morreu nas chamas do incêndio.",
    2: "Uma função aleatória quebra, desaba, pega fogo ou é arruinada de alguma outra maneira. A função precisa ser reconstruída.",
    3: "Um serviçal sofre uma queda grave ou é atingido por pedras em queda. Faça uma rolagem na tabela de trauma concussivo.",
    4: "Um bando de ratos (veja a página 127 do Guia do Mestre) invade a fortaleza e consome 2D6 unidades da COMIDA que estava estocada.",
    5: "O teto começa a gotejar. No inverno ou no outono, todos os ocupantes sofrem os efeitos do frio (veja a página 111). Para reparar o vazamento, é preciso um Quarto de Dia de trabalho e uma rolagem bem-sucedida de ARTESANATO.",
    6: "A fortaleza continua intacta, apesar da falta de manutenção."
}

function gerar_defeito() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = fortalezas_defeitos[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
        <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Defeito na Fortaleza</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>

        </div>    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}

function gerar_evento_calote() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = fortaleza_calote[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Calote ao Funcionário</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}

function gerar_evento_desprotegida() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = fortaleza_desprotegida[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Fortaleza Desprotegida</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}

function gerar_evento_manutencao() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = fortaleza_manutencao[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Manutenção de Forteleza</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}









































// Ferimentos
const ferimentos_laceracao = {
    11: {ferimento: "Testa sangrando", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    12: {ferimento: "Testa sangrando", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    13: {ferimento: "Nariz cortado", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    14: {ferimento: "Nariz cortado", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    15: {ferimento: "Dedo da mão cortado", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6"},
    16: {ferimento: "Dedo da mão cortado", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6"},
    21: {ferimento: "Dedo do pé cortado", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    22: {ferimento: "Dedo do pé cortado", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    23: {ferimento: "Coxa sangrando", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "D6"},
    24: {ferimento: "Coxa sangrando", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "D6"},
    25: {ferimento: "Boca cortada", letal: false, limite: null, efeitos: "-2 para MANIPULAÇÃO.", cura: "D6"},
    26: {ferimento: "Boca cortada", letal: false, limite: null, efeitos: "-2 para MANIPULAÇÃO.", cura: "D6"},
    31: {ferimento: "Tendão cortado", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    32: {ferimento: "Tendão cortado", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    33: {ferimento: "Ombro ferido", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "2D6"},
    34: {ferimento: "Ombro ferido", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "2D6"},
    35: {ferimento: "Orelha cortada", letal: false, limite: null, efeitos: "-1 para PATRULHA.", cura: "D6"},
    36: {ferimento: "Orelha cortada", letal: false, limite: null, efeitos: "-1 para PATRULHA.", cura: "D6"},
    41: {ferimento: "Pálpebra cortada", letal: false, limite: null, efeitos: "-2 para PONTARIA e PATRULHA.", cura: "2D6"},
    42: {ferimento: "Pálpebra cortada", letal: false, limite: null, efeitos: "-2 para PONTARIA e PATRULHA.", cura: "2D6"},
    43: {ferimento: "Pulmão perfurado", letal: true, limite: "D6 dias", efeitos: "-2 para RESILIÊNCIA e MOVIMENTAÇÃO.", cura: "D6"},
    44: {ferimento: "Pulmão perfurado", letal: true, limite: "D6 dias", efeitos: "-2 para RESILIÊNCIA e MOVIMENTAÇÃO.", cura: "D6"},
    45: {ferimento: "Pé decepado", letal: true, limite: "D6 dias", efeitos: "CORRER se torna uma ação lenta.", cura: "Permanente"},
    46: {ferimento: "Pé decepado", letal: true, limite: "D6 dias", efeitos: "CORRER se torna uma ação lenta.", cura: "Permanente"},
    51: {ferimento: "Abdômen sangrando", letal: true, limite: "D6 horas", efeitos: "1 ponto de dano para cada rolagem de POTÊNCIA, MOVIMENTAÇÃO e LUTA.", cura: "D6"},
    52: {ferimento: "Abdômen sangrando", letal: true, limite: "D6 horas", efeitos: "1 ponto de dano para cada rolagem de POTÊNCIA, MOVIMENTAÇÃO e LUTA.", cura: "D6"},
    53: {ferimento: "Intestino perfurado", letal: true, limite: "D6 horas", efeitos: "Doença com Virulência 6.", cura: "2D6"},
    54: {ferimento: "Intestino perfurado", letal: true, limite: "D6 horas", efeitos: "Doença com Virulência 6.", cura: "2D6"},
    55: {ferimento: "Braço decepado", letal: true, limite: "D6 horas", efeitos: "Não pode utilizar armas de duas mãos.", cura: "Permanente", modificador: -1},
    56: {ferimento: "Braço decepado", letal: true, limite: "D6 horas", efeitos: "Não pode utilizar armas de duas mãos.", cura: "Permanente", modificador: -1},
    61: {ferimento: "Perna decepada", letal: true, limite: "D6 horas", efeitos: "CORRER se torna uma ação lenta.", cura: "Permanente", modificador: -1},
    62: {ferimento: "Perna decepada", letal: true, limite: "D6 horas", efeitos: "CORRER se torna uma ação lenta.", cura: "Permanente", modificador: -1},
    63: {ferimento: "Garganta cortada", letal: true, limite: "D6 rodadas", efeitos: "-2 em rolagens de RESILIÊNCIA.", cura: "D6", modificador: -1},
    64: {ferimento: "Garganta cortada", letal: true, limite: "D6 rodadas", efeitos: "-2 em rolagens de RESILIÊNCIA.", cura: "D6", modificador: -1},
    65: {ferimento: "Crânio atravessado", letal: true, limite: null, efeitos: "Você morre imediatamente.", cura: null},
    66: {ferimento: "Decapitação", letal: true, limite: null, efeitos: "Sua cabeça deixa o seu corpo.", cura: null}
}

const ferimentos_concussivo = {
    11: {ferimento: "Atordoado", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    12: {ferimento: "Atordoado", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    13: {ferimento: "Esbaforido", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    14: {ferimento: "Esbaforido", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    15: {ferimento: "Concussão", letal: false, limite: null, efeitos: "-2 para PATRULHA.", cura: "D6"},
    16: {ferimento: "Concussão", letal: false, limite: null, efeitos: "-2 para PATRULHA.", cura: "D6"},
    21: {ferimento: "Nariz quebrado", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    22: {ferimento: "Nariz quebrado", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    23: {ferimento: "Dedos das mãos quebrados", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6"},
    24: {ferimento: "Dedos das mãos quebrados", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6"},
    25: {ferimento: "Dedos dos pés quebrados", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "D6"},
    26: {ferimento: "Dedos dos pés quebrados", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "D6"},
    31: {ferimento: "Dentes quebrados", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    32: {ferimento: "Dentes quebrados", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    33: {ferimento: "Dentes quebrados", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    34: {ferimento: "Acerto na virilha", letal: false, limite: null, efeitos: "Sofre 1 ponto de dano para cada rolagem de MOVIMENTAÇÃO ou LUTA.", cura: "D6"},
    35: {ferimento: "Acerto na virilha", letal: false, limite: null, efeitos: "Sofre 1 ponto de dano para cada rolagem de MOVIMENTAÇÃO ou LUTA.", cura: "D6"},
    36: {ferimento: "Acerto na virilha", letal: false, limite: null, efeitos: "Sofre 1 ponto de dano para cada rolagem de MOVIMENTAÇÃO ou LUTA.", cura: "D6"},
    41: {ferimento: "Costelas quebradas", letal: false, limite: null, efeitos: "-2 para MOVIMENTAÇÃO e LUTA.", cura: "2D6"},
    42: {ferimento: "Costelas quebradas", letal: false, limite: null, efeitos: "-2 para MOVIMENTAÇÃO e LUTA.", cura: "2D6"},
    43: {ferimento: "Costelas quebradas", letal: false, limite: null, efeitos: "-2 para MOVIMENTAÇÃO e LUTA.", cura: "2D6"},
    44: {ferimento: "Braço quebrado", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "2D6"},
    45: {ferimento: "Braço quebrado", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "2D6"},
    46: {ferimento: "Perna quebrada", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    51: {ferimento: "Perna quebrada", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    52: {ferimento: "Olho saiu da órbita", letal: false, limite: null, efeitos: "-2 para PONTARIA e PATRULHA.", cura: "2D6"},
    53: {ferimento: "Olho saiu da órbita", letal: false, limite: null, efeitos: "-2 para PONTARIA e PATRULHA.", cura: "2D6"},
    54: {ferimento: "Pé esmagado", letal: true, limite: "D6 dias", efeitos: "CORRER se torna uma ação lenta.", cura: "3D6"},
    55: {ferimento: "Pé esmagado", letal: true, limite: "D6 dias", efeitos: "CORRER se torna uma ação lenta.", cura: "3D6"},
    56: {ferimento: "Cotovelo esmagado", letal: true, limite: "D6 dias", efeitos: "Não pode utilizar armas de duas mãos.", cura: "Permanente"},
    61: {ferimento: "Cotovelo esmagado", letal: true, limite: "D6 dias", efeitos: "Não pode utilizar armas de duas mãos.", cura: "Permanente"},
    62: {ferimento: "Joelho esmagado", letal: true, limite: "D6 dias", efeitos: "CORRER se torna uma ação lenta.", cura: "Permanente"},
    63: {ferimento: "Joelho esmagado", letal: true, limite: "D6 dias", efeitos: "CORRER se torna uma ação lenta.", cura: "Permanente"},
    64: {ferimento: "Pescoço quebrado", letal: false, limite: null, efeitos: "Paralisada do pescoço para baixo. Se não for CURADA a tempo, o efeito é permanente.", cura: "3D6"},
    65: {ferimento: "Crânio esmagado", letal: true, limite: null, efeitos: "A vida de sua aventureira acaba aqui.", cura: null},
    66: {ferimento: "Crânio esmagado", letal: true, limite: null, efeitos: "A vida de sua aventureira acaba aqui.", cura: null}
}

const ferimentos_perfuracao = {
    11: {ferimento: "Orelha perfurada", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    12: {ferimento: "Orelha perfurada", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    13: {ferimento: "Orelha perfurada", letal: false, limite: null, efeitos: "Nenhum.", cura: null},
    14: {ferimento: "Pé trespassado", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "D6"},
    15: {ferimento: "Pé trespassado", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "D6"},
    16: {ferimento: "Pé trespassado", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "D6"},
    21: {ferimento: "Mão perfurada", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6"},
    22: {ferimento: "Mão perfurada", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6"},
    23: {ferimento: "Mão perfurada", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6"},
    24: {ferimento: "Bochecha perfurada", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    25: {ferimento: "Bochecha perfurada", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    26: {ferimento: "Bochecha perfurada", letal: false, limite: null, efeitos: "-1 para MANIPULAÇÃO.", cura: "D6"},
    31: {ferimento: "Coxa empalada", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    32: {ferimento: "Coxa empalada", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    33: {ferimento: "Coxa empalada", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "2D6"},
    34: {ferimento: "Tendão rompido", letal: false, limite: null, efeitos: "CORRER se torna uma ação lenta.", cura: "3D6"},
    35: {ferimento: "Ombro empalado", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "2D6"},
    36: {ferimento: "Ombro empalado", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "2D6"},
    41: {ferimento: "Ombro empalado", letal: false, limite: null, efeitos: "Não pode utilizar armas de duas mãos.", cura: "2D6"},
    42: {ferimento: "Pálpebra perfurada", letal: false, limite: null, efeitos: "-2 para rolagens de PONTARIA e PATRULHA.", cura: "2D6"},
    43: {ferimento: "Pálpebra perfurada", letal: false, limite: null, efeitos: "-2 para rolagens de PONTARIA e PATRULHA.", cura: "2D6"},
    44: {ferimento: "Virilha perfurada", letal: false, limite: null, efeitos: "Sofre 1 ponto de dano para cada rolagem de MOVIMENTAÇÃO ou LUTA.", cura: "2D6"},
    45: {ferimento: "Virilha perfurada", letal: false, limite: null, efeitos: "Sofre 1 ponto de dano para cada rolagem de MOVIMENTAÇÃO ou LUTA.", cura: "2D6"},
    46: {ferimento: "Pulmão perfurado", letal: true, limite: "D6 dias", efeitos: "-2 em rolagens de RESILIÊNCIA e MOVIMENTAÇÃO.", cura: "D6"},
    51: {ferimento: "Pulmão perfurado", letal: true, limite: "D6 dias", efeitos: "-2 em rolagens de RESILIÊNCIA e MOVIMENTAÇÃO.", cura: "D6"},
    52: {ferimento: "Abdômen sangrando", letal: true, limite: "D6 horas", efeitos: "1 ponto de dano a cada rolagem de POTÊNCIA, MOVIMENTAÇÃO e LUTA.", cura: "D6"},
    53: {ferimento: "Abdômen sangrando", letal: true, limite: "D6 horas", efeitos: "1 ponto de dano a cada rolagem de POTÊNCIA, MOVIMENTAÇÃO e LUTA.", cura: "D6"},
    54: {ferimento: "Abdômen sangrando", letal: true, limite: "D6 horas", efeitos: "1 ponto de dano a cada rolagem de POTÊNCIA, MOVIMENTAÇÃO e LUTA.", cura: "D6"},
    55: {ferimento: "Intestino rompido", letal: true, limite: "D6 horas", efeitos: "Doença com Virulência 6.", cura: "2D6"},
    56: {ferimento: "Intestino rompido", letal: true, limite: "D6 horas", efeitos: "Doença com Virulência 6.", cura: "2D6"},
    61: {ferimento: "Artéria do braço perfurada", letal: true, limite: "D6 minutos", efeitos: "Não pode utilizar armas de duas mãos.", cura: "D6", modificador: -1},
    62: {ferimento: "Artéria da perna perfurada", letal: true, limite: "D6 minutos", efeitos: "CORRER se torna uma ação lenta.", cura: "D6", modificador: -1},
    63: {ferimento: "Pescoço empalado", letal: true, limite: "D6 rodadas", efeitos: "-2 para rolagens de RESILIÊNCIA.", cura: "2D6", modificador: -1},
    64: {ferimento: "Crânio perfurado", letal: true, limite: null, efeitos: "Você morre imediatamente.", cura: null},
    65: {ferimento: "Coração empalado", letal: true, limite: null, efeitos: "Seu coração bate pela última vez.", cura: null},
    66: {ferimento: "Coração empalado", letal: true, limite: null, efeitos: "Seu coração bate pela última vez.", cura: null}
}

const ferimentos_horror = {
    11: {ferimento: "Tremedeira", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Agilidade.", cura: "D6"},
    12: {ferimento: "Tremedeira", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Agilidade.", cura: "D6"},
    13: {ferimento: "Tremedeira", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Agilidade.", cura: "D6"},
    14: {ferimento: "Tremedeira", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Agilidade.", cura: "D6"},
    15: {ferimento: "Tremedeira", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Agilidade.", cura: "D6"},
    16: {ferimento: "Tremedeira", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Agilidade.", cura: "D6"},
    21: {ferimento: "Cabelo branco", letal: false, limite: null, efeitos: "Nenhum.", cura: "Permanente"},
    22: {ferimento: "Ansiedade", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Astúcia.", cura: "D6"},
    23: {ferimento: "Ansiedade", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Astúcia.", cura: "D6"},
    24: {ferimento: "Ansiedade", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Astúcia.", cura: "D6"},
    25: {ferimento: "Taciturna", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Empatia.", cura: "D6"},
    26: {ferimento: "Taciturna", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Empatia.", cura: "D6"},
    31: {ferimento: "Taciturna", letal: false, limite: null, efeitos: "Penalidade de -1 em todas as rolagens de Empatia.", cura: "D6"},
    32: {ferimento: "Pesadelos", letal: false, limite: null, efeitos: "Faça uma rolagem de DISCERNIMENTO a cada Quarto de Dia que você passar DORMINDO. Falhar significa que o ato de DORMIR não contou.", cura: "D6"},
    33: {ferimento: "Pesadelos", letal: false, limite: null, efeitos: "Faça uma rolagem de DISCERNIMENTO a cada Quarto de Dia que você passar DORMINDO. Falhar significa que o ato de DORMIR não contou.", cura: "D6"},
    34: {ferimento: "Pesadelos", letal: false, limite: null, efeitos: "Faça uma rolagem de DISCERNIMENTO a cada Quarto de Dia que você passar DORMINDO. Falhar significa que o ato de DORMIR não contou.", cura: "D6"},
    35: {ferimento: "Pesadelos", letal: false, limite: null, efeitos: "Faça uma rolagem de DISCERNIMENTO a cada Quarto de Dia que você passar DORMINDO. Falhar significa que o ato de DORMIR não contou.", cura: "D6"},
    36: {ferimento: "Noturna", letal: false, limite: null, efeitos: "Você só consegue DORMIR durante a parte do dia que está iluminada.", cura: "2D6"},
    41: {ferimento: "Noturna", letal: false, limite: null, efeitos: "Você só consegue DORMIR durante a parte do dia que está iluminada.", cura: "2D6"},
    42: {ferimento: "Fobia", letal: false, limite: null, efeitos: "Você se aterroriza com algo relacionado ao que deixou você Acabado. A MdJ decide o que é. Você recebe um ponto de dano em Astúcia a cada rodada na qual você está dentro da distância PERTO do objeto de sua fobia.", cura: "2D6"},
    43: {ferimento: "Fobia", letal: false, limite: null, efeitos: "Você se aterroriza com algo relacionado ao que deixou você Acabado. A MdJ decide o que é. Você recebe um ponto de dano em Astúcia a cada rodada na qual você está dentro da distância PERTO do objeto de sua fobia.", cura: "2D6"},
    44: {ferimento: "Alcoolismo", letal: false, limite: null, efeitos: "Você precisa beber vinho ou cerveja todo dia, ou sofrerá um ponto de dano em Agilidade.", cura: "3D6"},
    45: {ferimento: "Alcoolismo", letal: false, limite: null, efeitos: "Você precisa beber vinho ou cerveja todo dia, ou sofrerá um ponto de dano em Agilidade.", cura: "3D6"},
    46: {ferimento: "Claustrofobia", letal: false, limite: null, efeitos: "A cada turno (15 minutos) em um ambiente confinado, você sofre um ponto de dano em Astúcia.", cura: "2D6"},
    51: {ferimento: "Claustrofobia", letal: false, limite: null, efeitos: "A cada turno (15 minutos) em um ambiente confinado, você sofre um ponto de dano em Astúcia.", cura: "2D6"},
    52: {ferimento: "Mitomania", letal: false, limite: null, efeitos: "Você não consegue parar de mentir, sobre qualquer coisa. O efeito deve ser interpretado.", cura: "2D6"},
    53: {ferimento: "Paranoia", letal: false, limite: null, efeitos: "Você está certa de que alguém está atrás de você de alguma forma. Os efeitos devem ser interpretados.", cura: "2D6"},
    54: {ferimento: "Paranoia", letal: false, limite: null, efeitos: "Você está certa de que alguém está atrás de você de alguma forma. Os efeitos devem ser interpretados.", cura: "2D6"},
    55: {ferimento: "Esquizofrenia", letal: false, limite: null, efeitos: "Você está totalmente convencida de algo que é uma completa inverdade, por exemplo, que uma certa ascendência não existe.", cura: "3D6"},
    56: {ferimento: "Alucinações", letal: false, limite: null, efeitos: "Faça uma rolagem de DISCERNIMENTO a cada Quarto de Dia. Se você falhar, você sofre uma poderosa alucinação. A MdJ determina os detalhes.", cura: "3D6"},
    61: {ferimento: "Personalidade alterada", letal: false, limite: null, efeitos: "Sua personalidade é alterada de uma forma fundamental. Determine junto com a MdJ. O efeito deve ser interpretado.", cura: "Permanente"},
    62: {ferimento: "Personalidade alterada", letal: false, limite: null, efeitos: "Sua personalidade é alterada de uma forma fundamental. Determine junto com a MdJ. O efeito deve ser interpretado.", cura: "Permanente"},
    63: {ferimento: "Amnésia", letal: false, limite: null, efeitos: "Você perde toda a sua memória e não é capaz de lembrar quem são as outras aventureiras. O efeito deve ser interpretado.", cura: "D6"},
    64: {ferimento: "Catatonia", letal: false, limite: null, efeitos: "Você olha inexpressivamente para o vazio e não responde a nenhum estímulo.", cura: "D6"},
    65: {ferimento: "Catatonia", letal: false, limite: null, efeitos: "Você olha inexpressivamente para o vazio e não responde a nenhum estímulo.", cura: "D6"},
    66: {ferimento: "Ataque cardíaco", letal: true, limite: null, efeitos: "Seu coração para. Você morre de puro medo", cura: null}
}

const infortunios_magicos = {
    11: {efeito: "Alguém presencia sua magia e conta para outras pessoas. A sua reputação aumenta em um passo."},
    12: {efeito: "Alguém presencia sua magia e conta para outras pessoas. A sua reputação aumenta em um passo."},
    13: {efeito: "Alguém presencia sua magia e conta para outras pessoas. A sua reputação aumenta em um passo."},
    14: {efeito: "A sua magia te deixa muito FAMINTA."},
    15: {efeito: "A sua magia te deixa muito FAMINTA."},
    16: {efeito: "A sua magia te deixa subitamente DESIDRATADA."},
    21: {efeito: "A sua magia te deixa subitamente DESIDRATADA."},
    22: {efeito: "A magia atrapalha o seu sono. Você não será capaz de dormir por D6 dias, o que te deixará INSONE."},
    23: {efeito: "A magia atrapalha o seu sono. Você não será capaz de dormir por D6 dias, o que te deixará INSONE."},
    24: {efeito: "A sua magia drena a sua energia, causando 1 ponto de dano em Agilidade."},
    25: {efeito: "A sua magia drena a sua energia, causando 1 ponto de dano em Agilidade."},
    26: {efeito: "A sua magia fere o seu corpo, causando 1 ponto de dano em Força."},
    31: {efeito: "A sua magia fere o seu corpo, causando 1 ponto de dano em Força."},
    32: {efeito: "Você é sobrecarregada pelo poder de sua própria magia e sente que as pessoas ao seu redor são meras formigas em comparação. Você sofre 1 ponto de dano em Empatia."},
    33: {efeito: "Você é sobrecarregada pelo poder de sua própria magia e sente que as pessoas ao seu redor são meras formigas em comparação. Você sofre 1 ponto de dano em Empatia."},
    34: {efeito: "A magia cria visões demoníacas que fazem você sofrer 1 ponto de dano em Astúcia."},
    35: {efeito: "A magia cria visões demoníacas que fazem você sofrer 1 ponto de dano em Astúcia."},
    36: {efeito: "A magia desencadeia uma doença mágica com Virulência de 2D6. Você e todos AO ALCANCE DAS MÃOS estarão suscetíveis ao contágio pelo próximo Quarto de Dia."},
    41: {efeito: "A magia desencadeia uma doença mágica com Virulência de 2D6. Você e todos AO ALCANCE DAS MÃOS estarão suscetíveis ao contágio pelo próximo Quarto de Dia."},
    42: {efeito: "A magia também afeta um amigo ou outra vítima não intencional. Uma magia de cura ou de auxílio afeta um inimigo junto com o alvo desejado."},
    43: {efeito: "A magia também afeta um amigo ou outra vítima não intencional. Uma magia de cura ou de auxílio afeta um inimigo junto com o alvo desejado."},
    44: {efeito: "A magia também afeta um amigo ou outra vítima não intencional. Uma magia de cura ou de auxílio afeta um inimigo junto com o alvo desejado."},
    45: {efeito: "A magia também afeta um amigo ou outra vítima não intencional. Uma magia de cura ou de auxílio afeta um inimigo junto com o alvo desejado."},
    46: {efeito: "A sua magia altera permanentemente sua aparência. A MdJ decide como."},
    51: {efeito: "A magia a deixa cega. Você age como se estivesse em escuridão total pelo próximo dia inteiro."},
    52: {efeito: "A magia devasta sua mente. Role imediatamente para um ferimento grave (horror)."},
    53: {efeito: "A magia devasta sua mente. Role imediatamente para um ferimento grave (horror)."},
    54: {efeito: "A magia devasta sua mente. Role imediatamente para um ferimento grave (horror)."},
    55: {efeito: "A magia devasta sua mente. Role imediatamente para um ferimento grave (horror)."},
    56: {efeito: "A força da magia quebra ossos em seu corpo. Role imediatamente para um ferimento grave (trauma concussivo)."},
    61: {efeito: "A sua magia atrai um demônio de outra dimensão. A MdJ pode escolher um demônio aleatoriamente (veja a página 79 do Guia do Mestre) ou criar um ela mesma. O demônio aparece ao longo do próximo Quarto de Dia e causa todo tipo de problema."},
    62: {efeito: "A magia tem o efeito contrário. Uma magia ofensiva afeta você em vez do alvo desejado. Uma magia protetiva ou curativa causa ferimentos em vez de seus efeitos. Uma metamorfose falha horrivelmente, e você se torna um animal estúpido. Uma invocação de morto-vivo, demônio ou ilusão se volta contra você. A MdJ especifica os detalhes."},
    63: {efeito: "A magia tem o efeito contrário. Uma magia ofensiva afeta você em vez do alvo desejado. Uma magia protetiva ou curativa causa ferimentos em vez de seus efeitos. Uma metamorfose falha horrivelmente, e você se torna um animal estúpido. Uma invocação de morto-vivo, demônio ou ilusão se volta contra você. A MdJ especifica os detalhes."},
    64: {efeito: "A magia tem o efeito contrário. Uma magia ofensiva afeta você em vez do alvo desejado. Uma magia protetiva ou curativa causa ferimentos em vez de seus efeitos. Uma metamorfose falha horrivelmente, e você se torna um animal estúpido. Uma invocação de morto-vivo, demônio ou ilusão se volta contra você. A MdJ especifica os detalhes."},
    65: {efeito: "A magia tem o efeito contrário. Uma magia ofensiva afeta você em vez do alvo desejado. Uma magia protetiva ou curativa causa ferimentos em vez de seus efeitos. Uma metamorfose falha horrivelmente, e você se torna um animal estúpido. Uma invocação de morto-vivo, demônio ou ilusão se volta contra você. A MdJ especifica os detalhes."},
    66: {efeito: "Sua magia abre uma fenda para outra dimensão, e um demônio puxa você para o outro lado. É hora de fazer uma nova personagem. Sua antiga personagem voltará como uma PNJ após D66 dias, mas ela estará... mudada."}
}

function gerar_infortunio_magico() {
    const d1 = Math.floor(Math.random() * 6) + 1
    const d2 = Math.floor(Math.random() * 6) + 1
    const numero_aleatorio = `${d1}${d2}`
    const resultado = infortunios_magicos[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Infortúnio Mágico</h2>
            <p>Efeito: ${resultado.efeito}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_ferimentos_horror() {
    const d1 = Math.floor(Math.random() * 6) + 1
    const d2 = Math.floor(Math.random() * 6) + 1
    const numero_aleatorio = `${d1}${d2}`
    const resultado = ferimentos_horror[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Ferimento de Horror</h2>
            <p>Ferimento: ${resultado.ferimento}</p>
            <p>Letal: ${resultado.letal}</p>
            <p>Limite: ${resultado.limite || " - "}</p>
            <p>Efeitos: ${resultado.efeitos}</p>
            <p>Cura: ${resultado.cura || " - "}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_ferimentos_perfuracao() {
    const d1 = Math.floor(Math.random() * 6) + 1
    const d2 = Math.floor(Math.random() * 6) + 1
    const numero_aleatorio = `${d1}${d2}`
    const resultado = ferimentos_perfuracao[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Ferimento de Perfuração</h2>
            <p>Ferimento: ${resultado.ferimento}</p>
            <p>Letal: ${resultado.letal}</p>
            <p>Limite: ${resultado.limite || " - "}</p>
            <p>Efeitos: ${resultado.efeitos}</p>
            <p>Cura: ${resultado.cura || " - "}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_ferimentos_concussivo() {
    const d1 = Math.floor(Math.random() * 6) + 1
    const d2 = Math.floor(Math.random() * 6) + 1
    const numero_aleatorio = `${d1}${d2}`
    const resultado = ferimentos_concussivo[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Ferimento Concussivo</h2>
            <p>Ferimento: ${resultado.ferimento}</p>
            <p>Letal: ${resultado.letal}</p>
            <p>Limite: ${resultado.limite || " - "}</p>
            <p>Efeitos: ${resultado.efeitos}</p>
            <p>Cura: ${resultado.cura || " - "}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_ferimentos_laceracao() {
    const d1 = Math.floor(Math.random() * 6) + 1
    const d2 = Math.floor(Math.random() * 6) + 1
    const numero_aleatorio = `${d1}${d2}`
    const resultado = ferimentos_laceracao[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Ferimento de Laceração</h2>
            <p>Ferimento: ${resultado.ferimento}</p>
            <p>Letal: ${resultado.letal}</p>
            <p>Limite: ${resultado.limite || " - "}</p>
            <p>Efeitos: ${resultado.efeitos}</p>
            <p>Cura: ${resultado.cura || " - "}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}
























































const infortunios_coleta = {
    1: "Você encontra uma unidade de VEGETAIS, mas ela é venenosa, uma coisa que você só descobre na próxima refeição. O veneno no VEGETAL tem uma potência de 3.",
    2: "Sanguessugas mordem sua pele e bebem seu sangue, causando 1 ponto de dano de Força. As sanguessugas podem ser removidas com um sucesso em uma rolagem de CURA. Se você falhar na rolagem, você sofre outro ponto de dano, mas consegue removê-las de qualquer maneira.",
    3: "Você cai e torce o tornozelo, sofrendo um ferimento grave equivalente ao resultado 25-26 da tabela de trauma concussivo na página 197.",
    4: "Suas roupas foram danificadas. Suas botas se rompem ou seu manto se rasga em plantas espinhentas ou pedras afiadas. Você precisa rolar contra os efeitos do frio. Suas roupas podem ser reparadas fazendo uma rolagem de ARTESANATO com sucesso.",
    5: "Um lobo, urso ou outro animal selvagem se sente ameaçado e ataca vocês. A MdJ escolhe o animal pela tabela na página 126 do Guia do Mestre.",
    6: "Um esquilo, pássaro ou outro pequeno animal as segue em todos os lugares e não as deixa em paz. O animal causa problemas, que são descritos pela MdJ – pode ser que ele faça barulho em momentos inapropriados, coma a comida do grupo ou roube alguma coisa."
};

const infortunios_caca = {
    1: "Você cai e torce o tornozelo, sofrendo um ferimento grave equivalente ao resultado 25-26 da tabela de trauma concussivo na página 197.",
    2: "Você perde algum equipamento ou arma. A MdJ decide qual.",
    3: "Suas roupas foram danificadas. Suas botas se rompem ou seu manto se rasga em plantas espinhentas ou pedras afiadas. Você precisa rolar contra os efeitos do frio. Suas roupas podem ser reparadas fazendo uma rolagem de ARTESANATO com sucesso.",
    4: "Você pisa na armadilha de outro caçador. Pode ser um laço, uma rede ou um poço coberto. Você sofre um ponto de dano em Força e precisa fazer uma rolagem de MOVIMENTAÇÃO para sair da armadilha.",
    5: "Um lobo, urso ou outro animal selvagem se sente ameaçado e ataca vocês. A MdJ escolhe o animal da tabela na página 126 do Guia do Mestre.",
    6: "Você derruba um animal aleatório, mas ele está doente, e quem quer que coma de sua carne será infectada com uma doença de valor de Virulência 3. Isso é descoberto durante sua próxima refeição."
};

const infortunios_pesca = {
    1: "Seu anzol ou rede prende ao fundo. Você precisa fazer uma rolagem de POTÊNCIA para ser capaz de recuperar seu equipamento de pesca. Se você falhar, o equipamento estará perdido.",
    2: "Você conseguiu furar o próprio dedo com o anzol, em vez de fisgar um peixe. Você sofre um ponto de dano em Força. Role novamente caso esteja pescando com uma rede.",
    3: "Seu equipamento de pesca quebra. Você precisa repará-lo (uma rolagem de ARTESANATO) ou conseguir um novo equipamento.",
    4: "Um enorme enxame de mosquitos ou borrachudos atacam vocês, deixando-as loucas com suas mordidas e zumbidos. Eles atacam com quatro Dados Base, causando dano em Empatia.",
    5: "Você perde o equilíbrio e cai na água. Veja as regras para natação e afogamento na página 113.",
    6: "Um peixe ou enguia agressivo te ataca, causando uma ferida sangrenta. Você sofre 1 ponto de dano em Força"
};

const infortunios_acampamento = {
    11: "A água que vocês estão carregando estragou. Todas do grupo devem reduzir o Dado de Recurso de água em um passo.",
    12: "A água que vocês estão carregando estragou. Todas do grupo devem reduzir o Dado de Recurso de água em um passo.",
    13: "A água que vocês estão carregando estragou. Todas do grupo devem reduzir o Dado de Recurso de água em um passo.",
    14: "Sua comida apodreceu ou foi infectada por insetos. Todas no grupo precisam reduzir o Dado de Recurso de comida em um passo.",
    15: "Sua comida apodreceu ou foi infectada por insetos. Todas no grupo precisam reduzir o Dado de Recurso de comida em um passo.",
    16: "Sua comida apodreceu ou foi infectada por insetos. Todas no grupo precisam reduzir o Dado de Recurso de comida em um passo.",
    21: "Seu local de acampamento se revela muito incômodo para dormir. Ninguém no grupo consegue DORMIR nada até que vocês tenham encontrado um novo local para acampar.",
    22: "Seu local de acampamento se revela muito incômodo para dormir. Ninguém no grupo consegue DORMIR nada até que vocês tenham encontrado um novo local para acampar.",
    23: "Seu local de acampamento se revela muito incômodo para dormir. Ninguém no grupo consegue DORMIR nada até que vocês tenham encontrado um novo local para acampar.",
    24: "Seu local de acampamento se revela muito incômodo para dormir. Ninguém no grupo consegue DORMIR nada até que vocês tenham encontrado um novo local para acampar.",
    25: "Seu local de acampamento se revela muito incômodo para dormir. Ninguém no grupo consegue DORMIR nada até que vocês tenham encontrado um novo local para acampar.",
    26: "Uma chuva intensa começa no meio da noite. O acampamento é alagado e tudo fica encharcado. Todas as aventureiras devem rolar para os efeitos de frio, e ninguém consegue DORMIR nada nessa noite.",
    31: "Uma chuva intensa começa no meio da noite. O acampamento é alagado e tudo fica encharcado. Todas as aventureiras devem rolar para os efeitos de frio, e ninguém consegue DORMIR nada nessa noite.",
    32: "Uma chuva intensa começa no meio da noite. O acampamento é alagado e tudo fica encharcado. Todas as aventureiras devem rolar para os efeitos de frio, e ninguém consegue DORMIR nada nessa noite.",
    33: "A lenha está úmida e faz a sua fogueira se apagar. Todas no grupo precisam rolar para os efeitos de frio (veja página 111).",
    34: "A lenha está úmida e faz a sua fogueira se apagar. Todas no grupo precisam rolar para os efeitos de frio (veja página 111).",
    35: "A lenha está úmida e faz a sua fogueira se apagar. Todas no grupo precisam rolar para os efeitos de frio (veja página 111).",
    36: "A lenha está úmida e faz a sua fogueira se apagar. Todas no grupo precisam rolar para os efeitos de frio (veja página 111).",
    41: "Subitamente, as chamas de sua fogueira se espalham e saem do controle. Suas tendas, peles de dormir e outros equipamentos pegam fogo. Cada aventureira sofre um ataque com cinco Dados Base (Dano de Arma 1). Cada aventureira também deve fazer uma rolagem de MOVIMENTAÇÃO para salvar seu equipamento. Falhar significa que um equipamento (a MdJ decide qual) é perdido no fogo.",
    42: "Subitamente, as chamas de sua fogueira se espalham e saem do controle. Suas tendas, peles de dormir e outros equipamentos pegam fogo. Cada aventureira sofre um ataque com cinco Dados Base (Dano de Arma 1). Cada aventureira também deve fazer uma rolagem de MOVIMENTAÇÃO para salvar seu equipamento. Falhar significa que um equipamento (a MdJ decide qual) é perdido no fogo.",
    43: "Seu acampamento fica bem no meio de uma trilha de formigas. Todas vocês sofrem 1 ponto de dano de Agilidade e ninguém consegue DORMIR nada.",
    44: "Seu acampamento fica bem no meio de uma trilha de formigas. Todas vocês sofrem 1 ponto de dano de Agilidade e ninguém consegue DORMIR nada.",
    45: "Seu acampamento fica bem no meio de uma trilha de formigas. Todas vocês sofrem 1 ponto de dano de Agilidade e ninguém consegue DORMIR nada.",
    46: "Uma aventureira selecionada aleatoriamente pegou piolhos. A coceira é horrível, e ela tem irritações por todo o corpo. A vítima sofre 1 ponto de dano em Agilidade a cada dia e não consegue dormir. Um sucesso em uma rolagem de CURA acaba com os piolhos.",
    51: "Uma aventureira selecionada aleatoriamente pegou piolhos. A coceira é horrível, e ela tem irritações por todo o corpo. A vítima sofre 1 ponto de dano em Agilidade a cada dia e não consegue dormir. Um sucesso em uma rolagem de CURA acaba com os piolhos.",
    52: "Um enorme enxame de mosquitos ou borrachudos atacam vocês, deixando-as loucas com suas mordidas e zumbidos. Eles atacam com quatro Dados Base, causando dano em Empatia.",
    53: "Um enorme enxame de mosquitos ou borrachudos atacam vocês, deixando-as loucas com suas mordidas e zumbidos. Eles atacam com quatro Dados Base, causando dano em Empatia.",
    54: "Um enorme enxame de mosquitos ou borrachudos atacam vocês, deixando-as loucas com suas mordidas e zumbidos. Eles atacam com quatro Dados Base, causando dano em Empatia.",
    55: "Um lobo, urso ou outro animal selvagem se sente ameaçado e ataca vocês. A MdJ escolhe o animal da tabela na página 126 do Guia do Mestre.",
    56: "Um lobo, urso ou outro animal selvagem se sente ameaçado e ataca vocês. A MdJ escolhe o animal da tabela na página 126 do Guia do Mestre.",
    61: "Uma aventureira selecionada aleatoriamente perde um equipamento. A MdJ decide o que foi perdido e se o item pode ser encontrado.",
    62: "Uma aventureira selecionada aleatoriamente perde um equipamento. A MdJ decide o que foi perdido e se o item pode ser encontrado.",
    63: "Uma aventureira selecionada aleatoriamente perde um equipamento. A MdJ decide o que foi perdido e se o item pode ser encontrado.",
    64: "Um item pertencente a uma aventureira selecionada aleatoriamente é quebrado. A MdJ decide qual item. O item pode ser consertado com uma rolagem de ARTESANATO.",
    65: "Um item pertencente a uma aventureira selecionada aleatoriamente é quebrado. A MdJ decide qual item. O item pode ser consertado com uma rolagem de ARTESANATO.",
    66: "Um item pertencente a uma aventureira selecionada aleatoriamente é quebrado. A MdJ decide qual item. O item pode ser consertado com uma rolagem de ARTESANATO."
};


const infortunios_maritimos = {
    1: "Erro de Navegação: Vocês navegam para fora do curso naval e não fazem progresso no mapa durante aquele Quarto de Dia.",
    2: "Vendaval: Um vendaval súbito faz seu barco inclinar de repente. Um item importante cai na água. A MdJ decide qual item.",
    3: "Redemoinho: Seu barco é pego em um redemoinho. A capitã precisa fazer uma rolagem de SOBREVIVÊNCIA (modificado pelo talento MARINHEIRO). Falhar significa que o barco encalha e precisa ser reparado (uma rolagem de ARTESANATO) antes de sua jornada continuar.",
    4: "Vazamento: Seu barco tem o casco danificado e começa a minar água. O vazamento precisa ser reparado (uma rolagem de ARTESANATO), demorando um turno (15 minutos), mas a sua jornada pode continuar enquanto isso. Se o vazamento não for reparado, o barco afunda após D6 horas.",
    5: "Ao mar!: Alguém do grupo (A MdJ escolhe) cai na água depois que uma grande onda bate no barco. Veja as regras para natação e afogamento na página 113.",
    6: "Encalhe: Seu barco encalha e precisa ser abandonado ou reparado com uma rolagem de ARTESANATO. O barco precisa estar na costa para ser reparado."
};


const infortunios_desbravamento = {
    11: "O chão se abre debaixo de seus pés. Vocês andaram até uma área de areia movediça. Vocês estão completamente atoladas, e precisam rolar POTÊNCIA para escapar. Se falharem, vocês sofrerão 1 ponto de dano em Agilidade e precisam rolar novamente. Quem se libertar pode ajudar qualquer aventureira que ainda esteja atolada. Vocês também precisarão dar a volta na área perigosa, e não fazem nenhum progresso no mapa neste Quarto de Dia.",
    12: "O chão se abre debaixo de seus pés. Vocês andaram até uma área de areia movediça. Vocês estão completamente atoladas, e precisam rolar POTÊNCIA para escapar. Se falharem, vocês sofrerão 1 ponto de dano em Agilidade e precisam rolar novamente. Quem se libertar pode ajudar qualquer aventureira que ainda esteja atolada. Vocês também precisarão dar a volta na área perigosa, e não fazem nenhum progresso no mapa neste Quarto de Dia.",
    13: "O caminho à frente está bloqueado por rochas, árvores caídas, arbustos grossos ou inundação (dependendo do tipo de terreno do hexágono). Você precisa rolar POTÊNCIA ou MOVIMENTAÇÃO para conseguir seguir em frente. Se você falhar, sofrerá 1 ponto de dano em Força e precisa rolar novamente. Qualquer PJ cuja rolagem tiver sucesso pode ajudar as aventureiras que ainda não tiveram. Vocês não avançam no mapa durante esse Quarto de Dia.",
    14: "O caminho à frente está bloqueado por rochas, árvores caídas, arbustos grossos ou inundação (dependendo do tipo de terreno do hexágono). Você precisa rolar POTÊNCIA ou MOVIMENTAÇÃO para conseguir seguir em frente. Se você falhar, sofrerá 1 ponto de dano em Força e precisa rolar novamente. Qualquer PJ cuja rolagem tiver sucesso pode ajudar as aventureiras que ainda não tiveram. Vocês não avançam no mapa durante esse Quarto de Dia.",
    15: "O caminho à frente está bloqueado por rochas, árvores caídas, arbustos grossos ou inundação (dependendo do tipo de terreno do hexágono). Você precisa rolar POTÊNCIA ou MOVIMENTAÇÃO para conseguir seguir em frente. Se você falhar, sofrerá 1 ponto de dano em Força e precisa rolar novamente. Qualquer PJ cuja rolagem tiver sucesso pode ajudar as aventureiras que ainda não tiveram. Vocês não avançam no mapa durante esse Quarto de Dia.",
    16: "O caminho à frente está bloqueado por rochas, árvores caídas, arbustos grossos ou inundação (dependendo do tipo de terreno do hexágono). Você precisa rolar POTÊNCIA ou MOVIMENTAÇÃO para conseguir seguir em frente. Se você falhar, sofrerá 1 ponto de dano em Força e precisa rolar novamente. Qualquer PJ cuja rolagem tiver sucesso pode ajudar as aventureiras que ainda não tiveram. Vocês não avançam no mapa durante esse Quarto de Dia.",
    21: "O caminho à frente está bloqueado por rochas, árvores caídas, arbustos grossos ou inundação (dependendo do tipo de terreno do hexágono). Você precisa rolar POTÊNCIA ou MOVIMENTAÇÃO para conseguir seguir em frente. Se você falhar, sofrerá 1 ponto de dano em Força e precisa rolar novamente. Qualquer PJ cuja rolagem tiver sucesso pode ajudar as aventureiras que ainda não tiveram. Vocês não avançam no mapa durante esse Quarto de Dia.",
    22: "Vocês percebem que têm andado em círculos. Vocês estão perdidas e não fazem qualquer progresso no mapa durante este Quarto de Dia. Sua desbravadora também deve fazer uma rolagem de SOBREVIVÊNCIA com sucesso para encontrar o caminho para fora do hexágono. Uma rolagem pode ser feita a cada Quarto de Dia.",
    23: "Vocês percebem que têm andado em círculos. Vocês estão perdidas e não fazem qualquer progresso no mapa durante este Quarto de Dia. Sua desbravadora também deve fazer uma rolagem de SOBREVIVÊNCIA com sucesso para encontrar o caminho para fora do hexágono. Uma rolagem pode ser feita a cada Quarto de Dia.",
    24: "Vocês percebem que têm andado em círculos. Vocês estão perdidas e não fazem qualquer progresso no mapa durante este Quarto de Dia. Sua desbravadora também deve fazer uma rolagem de SOBREVIVÊNCIA com sucesso para encontrar o caminho para fora do hexágono. Uma rolagem pode ser feita a cada Quarto de Dia.",
    25: "Vocês percebem que têm andado em círculos. Vocês estão perdidas e não fazem qualquer progresso no mapa durante este Quarto de Dia. Sua desbravadora também deve fazer uma rolagem de SOBREVIVÊNCIA com sucesso para encontrar o caminho para fora do hexágono. Uma rolagem pode ser feita a cada Quarto de Dia.",
    26: "Vocês percebem que têm andado em círculos. Vocês estão perdidas e não fazem qualquer progresso no mapa durante este Quarto de Dia. Sua desbravadora também deve fazer uma rolagem de SOBREVIVÊNCIA com sucesso para encontrar o caminho para fora do hexágono. Uma rolagem pode ser feita a cada Quarto de Dia.",
    31: "Sua desbravadora cai e torce o tornozelo, sofrendo um ferimento grave equivalente ao resultado 25-26 da tabela de trauma concussivo na página 197.",
    32: "Sua desbravadora cai e torce o tornozelo, sofrendo um ferimento grave equivalente ao resultado 25-26 da tabela de trauma concussivo na página 197.",
    33: "Suas roupas foram danificadas. Suas botas se rompem ou seu manto se rasga em plantas espinhentas ou pedras afiadas. Você precisa rolar contra os efeitos do frio. Suas roupas podem ser reparadas fazendo uma rolagem de ARTESANATO com sucesso.",
    34: "Suas roupas foram danificadas. Suas botas se rompem ou seu manto se rasga em plantas espinhentas ou pedras afiadas. Você precisa rolar contra os efeitos do frio. Suas roupas podem ser reparadas fazendo uma rolagem de ARTESANATO com sucesso.",
    35: "Vocês estão andando em terreno acidentado quando subitamente o chão se abre debaixo de seus pés. Vocês precisam rolar MOVIMENTAÇÃO – se falharem, vocês sofrem um ataque com quatro Dados Base e Dano de Arma 1 (trauma concussivo).",
    36: "Vocês estão andando em terreno acidentado quando subitamente o chão se abre debaixo de seus pés. Vocês precisam rolar MOVIMENTAÇÃO – se falharem, vocês sofrem um ataque com quatro Dados Base e Dano de Arma 1 (trauma concussivo).",
    41: "Uma chuva ou nevasca (dependendo da época do ano) pesada pega vocês de surpresa. Vocês devem rolar para os efeitos de frio (página 111). Vocês também precisam procurar um abrigo até que a tempestade tenha passado. Vocês não fazem nenhum progresso no mapa durante esse Quarto de Dia.",
    42: "Uma chuva ou nevasca (dependendo da época do ano) pesada pega vocês de surpresa. Vocês devem rolar para os efeitos de frio (página 111). Vocês também precisam procurar um abrigo até que a tempestade tenha passado. Vocês não fazem nenhum progresso no mapa durante esse Quarto de Dia.",
    43: "Uma chuva ou nevasca (dependendo da época do ano) pesada pega vocês de surpresa. Vocês devem rolar para os efeitos de frio (página 111). Vocês também precisam procurar um abrigo até que a tempestade tenha passado. Vocês não fazem nenhum progresso no mapa durante esse Quarto de Dia.",
    44: "Uma chuva ou nevasca (dependendo da época do ano) pesada pega vocês de surpresa. Vocês devem rolar para os efeitos de frio (página 111). Vocês também precisam procurar um abrigo até que a tempestade tenha passado. Vocês não fazem nenhum progresso no mapa durante esse Quarto de Dia.",
    45: "Uma chuva ou nevasca (dependendo da época do ano) pesada pega vocês de surpresa. Vocês devem rolar para os efeitos de frio (página 111). Vocês também precisam procurar um abrigo até que a tempestade tenha passado. Vocês não fazem nenhum progresso no mapa durante esse Quarto de Dia.",
    46: "Vocês são pegas distraídas por uma neblina densa. A distância que vocês cobrem neste Quarto de Dia é diminuída em um hexágono. Em terreno dificultoso, vocês ficam presas no hexágono em que começaram. Em adição a isso, cada aventureira sofre 1 ponto de dano em Empatia devido à neblina macabra.",
    51: "Vocês são pegas distraídas por uma neblina densa. A distância que vocês cobrem neste Quarto de Dia é diminuída em um hexágono. Em terreno dificultoso, vocês ficam presas no hexágono em que começaram. Em adição a isso, cada aventureira sofre 1 ponto de dano em Empatia devido à neblina macabra.",
    52: "Vocês são pegas distraídas por uma neblina densa. A distância que vocês cobrem neste Quarto de Dia é diminuída em um hexágono. Em terreno dificultoso, vocês ficam presas no hexágono em que começaram. Em adição a isso, cada aventureira sofre 1 ponto de dano em Empatia devido à neblina macabra.",
    53: "Vocês dão de cara com um ninho de vespas. Um enxame furioso ataca todo o grupo. Cada aventureira deve fazer uma rolagem de MOVIMENTAÇÃO, ou sofre um ataque com quatro Dados Base, causando dano em Agilidade.",
    54: "Vocês dão de cara com um ninho de vespas. Um enxame furioso ataca todo o grupo. Cada aventureira deve fazer uma rolagem de MOVIMENTAÇÃO, ou sofre um ataque com quatro Dados Base, causando dano em Agilidade.",
    55: "Um enorme enxame de mosquitos ou borrachudos ataca vocês, deixando-as loucas com suas mordidas e zumbidos. Eles atacam com quatro Dados Base, causando dano em Empatia.",
    56: "Um enorme enxame de mosquitos ou borrachudos ataca vocês, deixando-as loucas com suas mordidas e zumbidos. Eles atacam com quatro Dados Base, causando dano em Empatia.",
    61: "Um enorme enxame de mosquitos ou borrachudos ataca vocês, deixando-as loucas com suas mordidas e zumbidos. Eles atacam com quatro Dados Base, causando dano em Empatia.",
    62: "Um lobo, urso ou outro animal selvagem se sente ameaçado e ataca vocês. A MdJ escolhe o animal pela tabela na página 126 do Guia do Mestre.",
    63: "Um lobo, urso ou outro animal selvagem se sente ameaçado e ataca vocês. A MdJ escolhe o animal pela tabela na página 126 do Guia do Mestre.",
    64: "Um lobo, urso ou outro animal selvagem se sente ameaçado e ataca vocês. A MdJ escolhe o animal pela tabela na página 126 do Guia do Mestre.",
    65: "Um esquilo, pássaro ou outro pequeno animal as segue por todos os lugares e não as deixa em paz. O animal causa problemas, que são descritos pela MdJ – pode ser que ele faça barulho em momentos inapropriados, coma a comida do grupo ou roube alguma coisa.",
    66: "Um esquilo, pássaro ou outro pequeno animal as segue por todos os lugares e não as deixa em paz. O animal causa problemas, que são descritos pela MdJ – pode ser que ele faça barulho em momentos inapropriados, coma a comida do grupo ou roube alguma coisa."
}

function gerar_infortunios_coleta() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = infortunios_coleta[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Infortunios de Coleta</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_infortunios_caca() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = infortunios_caca[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Infortunios de Caça</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_infortunios_pesca() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = infortunios_pesca[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Infortunios de Pesca</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_infortunios_maritimos() {
    const numero_aleatorio = Math.floor(Math.random() * 6) + 1
    const resultado = infortunios_maritimos[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Infortunios Marítimos</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_infortunios_acampamento() {
    const d1 = Math.floor(Math.random() * 6) + 1
    const d2 = Math.floor(Math.random() * 6) + 1
    const numero_aleatorio = `${d1}${d2}`
    const resultado = infortunios_acampamento[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Infortunios de Acampamento</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


function gerar_infortunios_desbravamento() {
    const d1 = Math.floor(Math.random() * 6) + 1
    const d2 = Math.floor(Math.random() * 6) + 1
    const numero_aleatorio = `${d1}${d2}`
    const resultado = infortunios_desbravamento[numero_aleatorio]
    const modal = document.createElement('div')
    modal.className = 'modal'
    modal.style.display = 'block'
    modal.style.position = 'fixed'
    modal.style.zIndex = '1000'
    modal.style.left = '0'
    modal.style.top = '0'
    modal.style.width = '100%'
    modal.style.height = '100%'
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)'
    modal.innerHTML = `
    <div class="modal-content" style=" position: relative; background-color: white; margin: auto; padding: 20px; width: 80%; max-width: 500px; top: 50%; transform: translateY(-50%); z-index: 2;">
            <h2 style="font-weight: bold; border-bottom: 2px solid #191919; padding-bottom: 10px; margin-bottom: 15px;">Infortunios de Desbravamento</h2>
            <p>${resultado}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="background-color: #953E4B; border: 2px solid #FBF4A7; color: white; border-radius: 4px;">Fechar</button>
        </div>
    `
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove()
        }
    }
    document.body.appendChild(modal)
    return resultado
}


