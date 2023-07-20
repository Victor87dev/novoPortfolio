const containerProject = document.getElementById('container_project')
const card3 = document.getElementById('card_3')
const card4 = document.getElementById('card_4')
const botaoMostrar = document.getElementById('btn_mostrar')
const boxBotaoMostrar = document.getElementById('box_mostrar')

let verificarBotaoMostar = false

card4.addEventListener('mouseover', ()=>{
  boxBotaoMostrar.classList.add('class','some')
})

card4.addEventListener('mouseout', ()=>{
  if(!verificarBotaoMostar){
    boxBotaoMostrar.classList.remove('class','some')
  }
})

card3.addEventListener('mouseover', ()=>{
  boxBotaoMostrar.classList.add('class','some')
})

card3.addEventListener('mouseout', ()=>{
  if(!verificarBotaoMostar){
    boxBotaoMostrar.classList.remove('class','some')
  }
})

botaoMostrar.addEventListener('click', ()=>{
  verificarBotaoMostar = true
  boxBotaoMostrar.classList.add("class","some")
  containerProject.classList.add("class","modificar_container")
  criarCard()
  criarCard2()
  alterar()
  botaoMostrarMenos()
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

const criarCard = ()=>{
  const caixaImagem = document.createElement("div")
  caixaImagem.setAttribute("class","img")
  const caixaContent = document.createElement("div")
  caixaContent.setAttribute("class","content")
  const spanContent = document.createElement("span")
  spanContent.setAttribute("class","title")
  spanContent.innerHTML = "O abraço da agonia"
  caixaContent.appendChild(spanContent)
  const pContent = document.createElement("p")
  pContent.setAttribute("class","desc")
  pContent.classList.add("class","alter")
  pContent.innerHTML = "Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua vum tormento inenarrável, gratificando-se com a dor alheia. Para ela, esses contatos são casinhos inocentes; Para o resto de Runeterra, são histórias macabras de encontros lascivos que deram errado e lembretes terríveis sobre o custo do desejo desenfreado."
  caixaContent.appendChild(pContent)
  const aLink = document.createElement("a")
  aLink.innerHTML = "Site no ar"
  aLink.setAttribute("target","_blank")
  aLink.setAttribute("class","button_card")
  aLink.setAttribute("style","--color:#000;")
  aLink.setAttribute("href","https://meu-projeto-contador.netlify.app/")
  const span1 = document.createElement("span")
  const span2 = document.createElement("span")
  const span3 = document.createElement("span")
  const span4 = document.createElement("span")
  aLink.appendChild(span1)
  aLink.appendChild(span2)
  aLink.appendChild(span3)
  aLink.appendChild(span4)
  const caixaArrow = document.createElement("div")
  caixaArrow.setAttribute("class","arrow")
  const spanArrow = document.createElement("span")
  spanArrow.innerHTML = "&#8673;"
  caixaArrow.appendChild(spanArrow)
  const caixaCard5 = document.createElement("div")
  caixaCard5.setAttribute("class","card_5")
  caixaCard5.setAttribute("id","card_5")
  caixaCard5.appendChild(caixaImagem)
  caixaCard5.appendChild(caixaContent)
  caixaCard5.appendChild(aLink)
  caixaCard5.appendChild(caixaArrow)
  containerProject.appendChild(caixaCard5)
}

const criarCard2 = ()=>{
  const caixaImagem = document.createElement("div")
  caixaImagem.setAttribute("class","img")
  const caixaContent = document.createElement("div")
  caixaContent.setAttribute("class","content")
  const spanContent = document.createElement("span")
  spanContent.setAttribute("class","title")
  spanContent.innerHTML = "O abraço da agonia"
  caixaContent.appendChild(spanContent)
  const pContent = document.createElement("p")
  pContent.setAttribute("class","desc")
  pContent.classList.add("class","alter")
  pContent.innerHTML = "Nas ruelas sombrias de Runeterra, minha loja azul demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua vum tormento inenarrável, gratificando-se com a dor alheia. Para ela, esses contatos são casinhos inocentes; Para o resto de Runeterra, são histórias macabras de encontros lascivos que deram errado e lembretes terríveis sobre o custo do desejo desenfreado."
  caixaContent.appendChild(pContent)
  const aLink = document.createElement("a")
  aLink.innerHTML = "Site no ar"
  aLink.setAttribute("target","_blank")
  aLink.setAttribute("class","button_card")
  aLink.setAttribute("style","--color:#000;")
  aLink.setAttribute("href","https://meu-projeto-contador.netlify.app/")
  const span1 = document.createElement("span")
  const span2 = document.createElement("span")
  const span3 = document.createElement("span")
  const span4 = document.createElement("span")
  aLink.appendChild(span1)
  aLink.appendChild(span2)
  aLink.appendChild(span3)
  aLink.appendChild(span4)
  const caixaArrow = document.createElement("div")
  caixaArrow.setAttribute("class","arrow")
  const spanArrow = document.createElement("span")
  spanArrow.innerHTML = "&#8673;"
  caixaArrow.appendChild(spanArrow)
  const caixaCard5 = document.createElement("div")
  caixaCard5.setAttribute("class","card_5")
  caixaCard5.setAttribute("id","card_5")
  caixaCard5.appendChild(caixaImagem)
  caixaCard5.appendChild(caixaContent)
  caixaCard5.appendChild(aLink)
  caixaCard5.appendChild(caixaArrow)
  containerProject.appendChild(caixaCard5)
}

const alterar = ()=>{

  const texto = [...document.querySelectorAll('.alter')]

  for(let i = 0; i <= texto.length; i++){
    texto[0].innerHTML = "zero"
    texto[1].innerHTML = "um"
  }
}













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







