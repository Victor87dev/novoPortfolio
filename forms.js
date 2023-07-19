const containerProject = document.getElementById('container_project')
const card3 = document.getElementById('card_3')
const card4 = document.getElementById('card_4')
const botaoMostrar = document.getElementById('btn_mostrar')

card4.addEventListener('mouseover', ()=>{
  botaoMostrar.classList.add('class','some')
})

card4.addEventListener('mouseout', ()=>{
  botaoMostrar.classList.remove('class','some')
})

card3.addEventListener('mouseover', ()=>{
  botaoMostrar.classList.add('class','some')
})

card3.addEventListener('mouseout', ()=>{
  botaoMostrar.classList.remove('class','some')
})

botaoMostrar.addEventListener('click', ()=>{
  botaoMostrar.classList.add("class","some")
  criarCard()
  criarCard()
})




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
/*
                  <div class="card_4" id="card_4">
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







