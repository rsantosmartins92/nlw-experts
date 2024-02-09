const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilização de páginas web",
        "Uma linguagem de programação para criação de documentos HTML",
        "Uma linguagem de programação para desenvolvimento de aplicações web interativas",
      ],
      correta: 2 // Resposta C
    },
    {
      pergunta: "Qual palavra-chave é utilizada para declarar variáveis em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita de igualdade",
        "Concatenação de strings",
      ],
      correta: 1 // Resposta B
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar elementos de uma página web",
        "Executar consultas em um banco de dados",
        "Criar novos elementos HTML",
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      respostas: [
        "Adiciona um ouvinte de eventos a um elemento HTML",
        "Remove um elemento HTML do documento",
        "Altera o estilo de um elemento HTML",
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Concatenação de strings",
        "Operador de atribuição",
        "Operador lógico de 'E' (AND)",
      ],
      correta: 2 // Resposta C
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter uma string em um número inteiro",
        "Converter um número em uma string",
        "Arredondar um número decimal para o inteiro mais próximo",
      ],
      correta: 0 // Resposta A
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um valor armazenado em uma variável",
        "Um loop que executa uma tarefa repetidamente",
        "Um bloco de código reutilizável que executa uma tarefa específica",
      ],
      correta: 2 // Resposta C
    },
    {
      pergunta: "Qual é a função do método 'push()' em JavaScript?",
      respostas: [
        "Remover o último elemento de um array",
        "Adicionar um elemento ao final de um array",
        "Ordenar os elementos de um array em ordem alfabética",
      ],
      correta: 1 // Resposta B
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma biblioteca de funções matemáticas",
        "Uma ferramenta de depuração de código",
        "Uma representação da estrutura hierárquica de elementos HTML em uma página web",
      ],
      correta: 2 // Resposta C
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  
  
  // loop ou laço de repetição
  for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
     corretas.delete(item)
     if(estaCorreta){
       corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size 
      'de' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //remove o primeiro item
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  
  