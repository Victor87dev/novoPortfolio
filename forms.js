const containerProject = document.getElementById('container_project')
const card3 = document.getElementById('card_3')
const card4 = document.getElementById('card_4')
const botaoMostrar = document.getElementById('btn_mostrar')
const boxBotaoMostrar = document.getElementById('box_mostrar')

let verificarBotaoMostrar = false

card4.addEventListener('mouseover', ()=>{
  boxBotaoMostrar.classList.add('class','some')
})

card4.addEventListener('mouseout', ()=>{
  if(!verificarBotaoMostrar){
    boxBotaoMostrar.classList.remove('class','some')
  }
})

card3.addEventListener('mouseover', ()=>{
  boxBotaoMostrar.classList.add('class','some')
})

card3.addEventListener('mouseout', ()=>{
  if(!verificarBotaoMostrar){
    boxBotaoMostrar.classList.remove('class','some')
  }
})



botaoMostrar.addEventListener('click', ()=>{
  verificarBotaoMostrar = true
 
  if(verificarBotaoMostrar){
    boxBotaoMostrar.classList.add("class","some")
  containerProject.classList.add("class","modificar_container")
  console.log("aaaaa")
  criarCards(arrayProjects)
  
  
  }
  botaoMostrar()
})

const botaoMostrarMenos = ()=>{
  const boxBotao = document.createElement("div")
  boxBotao.setAttribute("class","box_mostrar")
  boxBotao.setAttribute("id","box_menos")
  const botaoMenos = document.createElement("button")
  botaoMenos.setAttribute("type","button")
  botaoMenos.setAttribute("class","btn_mostrar")
  botaoMenos.setAttribute("id","btn_menos")
  botaoMenos.innerHTML = "Mostrar Menos"
  boxBotao.appendChild(botaoMenos)
  containerProject.appendChild(boxBotao)
}

const criarCards = (arrayProjects) =>{

  for(let i = 0; i <= arrayProjects.length; i++){
  containerProject.innerHTML += `
<div class="card_${arrayProjects[i].id}">
  <div class="img">
      
  </div>

  <div class="content">
      <span class="title">${arrayProjects[i].title}</span>
      <p class="desc">${arrayProjects[i].description}</p>
  </div>

  <a target="_blank" class="button_card" href="${arrayProjects[i].deploy_url}" style="--color:#000;"> 
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   Site no ar
  </a>
  
  <div class="arrow">
      <span>&#8673;</span>
  </div>
</div>
  `
}



}

const arrayProjects = [
  {
    id:5,
    title: "aaaaa",
    description: "bbbbb",
    deploy_url: "https://projeto-shopgames-sombri.netlify.app/"
  },
  {
    id:6,
    title: "ccccccc",
    description: "dddddddd",
    deploy_url: "https://alarme-project-8777.netlify.app/"
  },
  {
    id:5,
    title: "aaaaa",
    description: "bbbbb",
    deploy_url: "https://projeto-shopgames-sombri.netlify.app/"
  },
  {
    id:6,
    title: "aaaaa",
    description: "bbbbb",
    deploy_url: "https://projeto-shopgames-sombri.netlify.app/"
  }
]

/*
const criarCards = () =>{

  containerProject.innerHTML += `
  <div class="card_5" id="card_5">
  <div class="img">
      
  </div>

  <div class="content">
      <span class="title">O abraço da agonia</span>
      <p class="desc">Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua vum tormento inenarrável, gratificando-se com a dor alheia. Para ela, esses contatos são casinhos inocentes; Para o resto de Runeterra, são histórias macabras de encontros lascivos que deram errado e lembretes terríveis sobre o custo do desejo desenfreado.</p>
  </div>

  <a target="_blank" class="button_card" href="https://projeto-criando-bolas87.netlify.app/" style="--color:#000;"> 
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   Site no ar
  </a>
  
  <div class="arrow">
      <span>&#8673;</span>
  </div>
</div>

<div class="card_6" id="card_6">
<div class="img">
    
</div>

<div class="content">
    <span class="title">O abraço da agonia</span>
    <p class="desc">Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua vum tormento inenarrável, gratificando-se com a dor alheia. Para ela, esses contatos são casinhos inocentes; Para o resto de Runeterra, são histórias macabras de encontros lascivos que deram errado e lembretes terríveis sobre o custo do desejo desenfreado.</p>
</div>

<a target="_blank" class="button_card" href="https://projeto-criando-bolas87.netlify.app/" style="--color:#000;"> 
  <span></span>
  <span></span>
  <span></span>
  <span></span>
 Site no ar
</a>

<div class="arrow">
    <span>&#8673;</span>
</div>
</div>

  `
}
*/










window.addEventListener('scroll', reveal);

function reveal(){
  let reveals = document.querySelectorAll('.reveal')

  for(let i = 0; i < reveals.length; i++){

    let windowHeight = window.innerHeight
    let revealTop = reveals[i].getBoundingClientRect().top
    let revealPoint = 150 
    
    if(revealTop < windowHeight - revealPoint){
     reveals[i].classList.add('active')
    }else{
      reveals[i].classList.remove('active')
    }
  }
}







