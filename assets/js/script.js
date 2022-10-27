
/*por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementByClass Name()
por Seletor: querySelector()
*/

const nome = window.document.getElementById('nome')
const email = document.querySelector('#email')
const assunto = document.querySelector('#assunto')
const mapa = document.querySelector('.mapa')

nome.style.width = '100%'
email.style.width = '100%'

let nomeOk = false
let emailOk = false
let assuntoOk = false


    function validaNome() {
        let txtNome = document.querySelector('#txtNome')
        if(nome.value.length >= 2) {
          nomeOk = true
          txtNome.innerHTML = 'Nome válido'
          txtNome.style.color = 'green'
        } else {
          nomeOk = false
          txtNome.style.color = 'red'
          txtNome.innerHTML = 'Nome inválido'
        }
      }

    //   function validaEmail() {
    //     let txtEmail = document.querySelector('#txtEmail')
    //     if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1) {
    //       txtEmail.innerHTML = 'E-mail inválido'
    //       txtEmail.style.color = 'red'
    //       emailOk = false
    //     } else {
    //       txtEmail.innerHTML = 'E-mail válido'
    //       txtEmail.style.color = 'green'
    //       emailOk = true
    //     }
    //   }

      function validaEmail() {
        // o regex irá verificar a padronização do que será digitado no campo, e validar o padrão
        // qualquer email tem que ter letras + @ + letras + .com no minimo, e isso é o que o regex verifica
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let txtEmail = document.querySelector('#txtEmail')
      
        // aqui, iremos verificar se os valores batem, com a função match() do JS, então fazemos 
        // o if meio que contrário ao anterior, pois esperamos o acerto
        if(email.value.match(regex)) {
          txtEmail.innerHTML = 'E-mail válido'
          txtEmail.style.color = 'green'
          emailOk = true
        } else {
          txtEmail.innerHTML = 'E-mail inválido'
          txtEmail.style.color = 'red'
          emailOk = false
        }
      }
      
      function validaAssunto() {
        let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length <= 100) {
          assuntoOk = true
          txtAssunto.innerHTML = ''
          txtAssunto.style.color = 'green'
        } else {
          assuntoOk = false
          txtAssunto.innerHTML = 'Muitos caracteres meu xapa, tenta resumir ♥'
          txtAssunto.style.color = 'red'
        }
      }
      
      function enviarForm() {
        if(nomeOk == true && emailOk == true && assuntoOk == true) {
          alert('Enviamos seu formulário, aguarde a resposta')
        } else {
          alert('Algum dos campos está fora do esperado, confira, por favor')
        }
      }
      
      function zoomMapa() {
        mapa.style.aspectRatio = '16/19'
      }
      
      function mapaSemZoom() {
        mapa.style.aspectRatio = '16/12'
      }
      
      
      // função para voltar a tela para o topo, e o máximo pra esquerda possivel.
      function topo() {
        window.scrollTo(0,0)
      }