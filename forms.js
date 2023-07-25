const containerProject = document.getElementById('container_project')
const card3 = document.getElementById('card_3')
const card4 = document.getElementById('card_4')
var btn = document.getElementById("btn_email")
const botaoMostrar = document.getElementById('btn_mostrar')
const boxBotaoMostrar = document.getElementById('box_mostrar')


clickBotaoMostrar = ()=>{
  const boxBotaoMostrar = document.getElementById('box_mostrar')
  console.log("entr")
  
  boxBotaoMostrar.classList.add("class","some")
  
 

  criarCards(arrayProjects)
  botaoMostrarMenos()
}

const botaoMostrarMenos = ()=> {
  const boxBotao = document.createElement("div")
  boxBotao.setAttribute("class","box_mostrar_menos")
  boxBotao.setAttribute("id","box_menos")
  const botaoMenos = document.createElement("button")
  botaoMenos.setAttribute("type","button")
  botaoMenos.setAttribute("class","btn_mostrar_menos")
  botaoMenos.classList.add("class","top-fill-2")
  botaoMenos.setAttribute("id","btn_menos")
  botaoMenos.setAttribute("onclick","clickBotaoMenos()")
  botaoMenos.innerHTML = "Mostrar Menos"
  boxBotao.appendChild(botaoMenos)
  containerProject.appendChild(boxBotao)
  
}

const clickBotaoMenos = ()=>{
  const boxBotao = document.getElementById('box_menos')
  const boxBotaoMostrar = document.getElementById('box_mostrar')
  const card5 = document.getElementById("card_5")
  const card6 = document.getElementById("card_6")
  const card7 = document.getElementById('card_7')
  const card8 = document.getElementById('card_8')
  containerProject.removeChild(card5)
  containerProject.removeChild(card6)
  containerProject.removeChild(card7)
  containerProject.removeChild(card8)
  containerProject.removeChild(boxBotao)
  boxBotaoMostrar.classList.remove("class","some")

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
    id:7,
    title: "aaaaa",
    description: "bbbbb",
    deploy_url: "https://projeto-shopgames-sombri.netlify.app/"
  },
  {
    id:8,
    title: "aaaaa",
    description: "bbbbb",
    deploy_url: "https://projeto-shopgames-sombri.netlify.app/"
  }
]


const criarCards = (arrayProjects) =>{

   

  for(let i = 0; i < arrayProjects.length; i++){
  containerProject.innerHTML += `
<div class="card_${arrayProjects[i].id}" id="card_${arrayProjects[i].id}">
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

btn.addEventListener('click', function(e){
  e.preventDefault()
  var name = document.getElementById('name').value 
  var email = document.getElementById('email').value
  var subject = document.getElementById('subject').value
  var message = document.getElementById('message').value
  var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject +
  '<br/> message: ' + message

  function checkInputs() {
    if (name === '') {
      alert('O nome de usuário é obrigatório.')
      return
    } else if (email === '') {
      alert('O endereço de email é obrigatório.')
      return
    }else if (!checkEmail(email)) {
      alert('Por favor, insira um email válido.')
      return
    }else if (subject === '') {
      alert('O assunto do email é obrigatório.')
      return
    } else if (message === '') {
      alert('A mensagem do email é obrigatório.')
      return
    } else {
      return true
    }

    function checkEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    }
  }

  if(checkInputs()){

  
  Email.send({
      SecureToken : "94b1e023-fd3f-43e9-8e2e-403698012df6",
      To : 'devsjoaovvictor@gmail.com',
      From : "devsjoaovvictor@gmail.com",
      Subject : "contact message",
      Body : body
  }).then(message => alert('Email enviado com sucesso'))
}
})

















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





