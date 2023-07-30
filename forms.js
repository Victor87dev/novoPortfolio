const containerProject = document.getElementById('container_project')
const card3 = document.getElementById('card_3')
const card4 = document.getElementById('card_4')
var btn = document.getElementById("btn_email")
const botaoMostrar = document.getElementById('btn_mostrar')
const boxBotaoMostrar = document.getElementById('box_mostrar')


clickBotaoMostrar = ()=>{
  const boxBotaoMostrar = document.getElementById('box_mostrar')
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
  },
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
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var subject = document.getElementById('subject')
  var message = document.getElementById('message')
  var labelNome = document.getElementById("labelNome")
  var inputBoxNome = document.getElementById("inputBoxNome")
  var labelEmail = document.getElementById("labelEmail")
  var inputBoxEmail = document.getElementById("inputBoxEmail")
  var labelAssunto = document.getElementById("labelAssunto")
  var inputBoxAssunto = document.getElementById("inputBoxAssunto")
  var labelMensagem = document.getElementById("labelMensagem")
  var inputBoxMensagem = document.getElementById("inputBoxMensagem")
  var boxEmail = document.getElementById("box_email")
  var boxForm = document.getElementById("box_form")
  var body = 'Nome: ' + name.value + '<br/> Email: ' + email.value + '<br/> Assunto: ' + subject.value +
  '<br/> Mensagem: ' + message.value
 


  function checkInputs() {
  if(name.value === '' || email.value === '' || !checkEmail(email.value) || subject.value === '' || message.value === ''){
   
  
    if (name.value === '') {
        name.setAttribute("class","error")
        labelNome.classList.add("class","errorLetras")
        inputBoxNome.classList.add("class","inputNomeRed")
        
    }else{
     name.removeAttribute("class","error")
     labelNome.classList.remove("class","errorLetras")
     inputBoxNome.classList.remove("class","inputNomeRed")
     labelNome.classList.remove("class","recolocacaoLetras")
     
    }


  if(name.value === ''){
    if(inputBoxNome.children.length <= 2){
      labelNome.classList.add("class","recolocacaoLetras")
      var pErrorNome = document.createElement("p")
      pErrorNome.setAttribute("class","errorLetrasP")
      pErrorNome.setAttribute("id","errorNome")
      pErrorNome.innerHTML = "Insira um nome"
      inputBoxNome.appendChild(pErrorNome)
    }
  }else if(name.value !== ''){
    var errorNome = document.getElementById("errorNome")
    labelNome.classList.remove("class","recolocacaoLetras")
    errorNome.classList.add("class","someP")
  }

  if(name.value === '' && inputBoxNome.children.length > 2){
    var errorNome = document.getElementById("errorNome")
    labelNome.classList.add("class","recolocacaoLetras")
    errorNome.classList.remove("class","someP")
  }


  if(name.value !== '' && email.value === ''){
     labelNome.classList.add("class","recolocacaoLetras")
  }else if(name.value !== '' && !checkEmail(email.value)){
    labelNome.classList.add("class","recolocacaoLetras")
  }


    if (email.value === '' || !checkEmail(email.value)) {
      email.setAttribute("class","error")
      labelEmail.classList.add("class","errorLetras")
      inputBoxEmail.classList.add("class","inputNomeRed")
      
    }else{
      email.removeAttribute("class","error")
      labelEmail.classList.remove("class","errorLetras")
      inputBoxEmail.classList.remove("class","inputNomeRed") 
      labelEmail.classList.remove("class","recolocacaoLetras")
    }

if(email.value === '' || !checkEmail(email.value) ){
  if(inputBoxEmail.children.length <= 2){
    labelEmail.classList.add("class","recolocacaoLetras")
    var pErrorEmail = document.createElement("p")
      pErrorEmail.setAttribute("class","errorLetrasP")
      pErrorEmail.setAttribute("id","errorEmail")
      pErrorEmail.innerHTML = "Insira um email válido"
      inputBoxEmail.appendChild(pErrorEmail)
  }
}else if(email.value !== '' && checkEmail(email.value)){
  var errorEmail = document.getElementById("errorEmail")
  labelEmail.classList.remove("class","recolocacaoLetras")
  errorEmail.classList.add("class","someP")
}

if(email.value === '' && inputBoxEmail.children.length > 2){
  var errorEmail = document.getElementById("errorEmail")
  labelEmail.classList.add("class","recolocacaoLetras")
  errorEmail.classList.remove("class","someP")
}

if(!checkEmail(email.value) && inputBoxEmail.children.length > 2){
  var errorEmail = document.getElementById("errorEmail")
  labelEmail.classList.add("class","recolocacaoLetras")
  errorEmail.classList.remove("class","someP")
}

if(email.value !== '' && checkEmail(email.value) && name.value === ''){
  labelEmail.classList.add("class","recolocacaoLetras")
}

    if(subject.value === ''){
      subject.setAttribute("class","error")
      labelAssunto.classList.add("class","errorLetras")
      inputBoxAssunto.classList.add("class","inputNomeRed")
     
      
    } else{
      subject.removeAttribute("class","error")
      labelAssunto.classList.remove("class","errorLetras")
      inputBoxAssunto.classList.remove("class","inputNomeRed")
      
    } 

  if(subject.value === ''){
    if(inputBoxAssunto.children.length <= 2){
      labelAssunto.classList.add("class","recolocacaoLetras")
      var pErrorAssunto = document.createElement("p")
        pErrorAssunto.setAttribute("class","errorLetrasP")
        pErrorAssunto.setAttribute("id","errorAssunto")
        pErrorAssunto.innerHTML = "Insira um Assunto"
        inputBoxAssunto.appendChild(pErrorAssunto)
    }
  }else if(subject.value !== ''){
    var errorAssunto = document.getElementById("errorAssunto")
    labelAssunto.classList.remove("class","recolocacaoLetras")
    errorAssunto.classList.add("class","someP")
  }
 
  if(subject.value === '' && inputBoxAssunto.children.length > 2){
    var errorAssunto = document.getElementById("errorAssunto")
    labelAssunto.classList.add("class","recolocacaoLetras")
    errorAssunto.classList.remove("class","someP")
  }


    if(message.value === ''){ 
      message.setAttribute("class","error")
      labelMensagem.classList.add("class","errorLetras")
      inputBoxMensagem.classList.add("class","inputNomeRedTextArea")
      
    } else{
      message.removeAttribute("class","error")
      labelMensagem.classList.remove("class","errorLetras")
      inputBoxMensagem.classList.remove("class","inputNomeRedTextArea")
      
    }

  if(message.value === ''){
    if(inputBoxMensagem.children.length <= 2){
      var pErrorMensagem = document.createElement("p")
      pErrorMensagem.setAttribute("class","errorLetrasP")
      pErrorMensagem.setAttribute("id","errorMensagem")
      pErrorMensagem.innerHTML = "Insira uma mensagem"
      inputBoxMensagem.appendChild(pErrorMensagem)
    }
  }else if(message.value !== ''){
    var errorMensagem = document.getElementById("errorMensagem")
    errorMensagem.classList.add("class","someP")
  }

  if(message.value === '' && inputBoxEmail.children.length > 2){
    var errorMensagem = document.getElementById("errorMensagem")
    errorMensagem.classList.remove("class","someP")
  }
    
  }else{
    if(name.value !== '' && email.value !== '' && subject.value !== '' && message.value !== ''){
      name.removeAttribute("class","error")
      labelNome.classList.remove("class","errorLetras")
      inputBoxNome.classList.remove("class","inputNomeRed")
      email.removeAttribute("class","error")
      labelEmail.classList.remove("class","errorLetras")
      inputBoxEmail.classList.remove("class","inputNomeRed")
      subject.removeAttribute("class","error")
      labelAssunto.classList.remove("class","errorLetras")
      inputBoxAssunto.classList.remove("class","inputNomeRed")
      message.removeAttribute("class","error")
      labelMensagem.classList.remove("class","errorLetras")
      inputBoxMensagem.classList.remove("class","inputNomeRedTextArea")
      name.value = ''
      email.value = ''
      subject.value = ''
      message.value = ''
      boxForm.classList.add("class","someP")
      const boxEmailEnviado = document.createElement("div")
      boxEmailEnviado.setAttribute("class","email_enviado")
      boxEmailEnviado.setAttribute("id","email_enviado")
      const pEmailEnviado = document.createElement("p")
      pEmailEnviado.setAttribute("class","text_email_enviado")
      pEmailEnviado.innerHTML = "Email enviado com sucesso!"
      const buttonVoltar = document.createElement("button")
      buttonVoltar.setAttribute("type","button")
      buttonVoltar.setAttribute("class","button_email_enviado")
      buttonVoltar.setAttribute("id","button_email_enviado")
      buttonVoltar.setAttribute("onclick","teste")
      buttonVoltar.innerHTML = "Voltar"
      boxEmailEnviado.appendChild(pEmailEnviado)
      boxEmailEnviado.appendChild(buttonVoltar)
      boxEmail.appendChild(boxEmailEnviado)
      buttonVoltar.addEventListener('click',()=>{
        boxForm.classList.remove("class","someP")
        boxEmail.removeChild(boxEmailEnviado)
      })
    }
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
  }).then(message => console.log("enviado"))
}
})

/* anmição das letras */

let label = document.querySelectorAll('label').
forEach(label => {
 label.innerHTML = label.innerText.split('').map
 ((letters, i) => `<span style="transition-delay: ${i * 50}ms">${letters}</span>`).join('');
});
















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





