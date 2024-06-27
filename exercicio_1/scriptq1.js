const btnVerify = document.getElementById("btnVerify");
const progressBar = document.getElementById("bar");

const alternativa1 = document.getElementById("alternativa1");
const alternativa1Selected = document.getElementById("alternativa1Selected");

const alternativa2 = document.getElementById("alternativa2");
const alternativa2Selected = document.getElementById("alternativa2Selected");

const alternativa3 = document.getElementById("alternativa3");
const alternativa3Selected = document.getElementById("alternativa3Selected");

const alternativa4 = document.getElementById("alternativa4");
const alternativa4Selected = document.getElementById("alternativa4Selected");
const returnText = document.getElementById("returnText");

progressBar.classList.add("none");

const btnTip = document.getElementById("btnTip");
btnTip.addEventListener("click", () => {
  window.open("../saibaMais/index.html");
});

const btnSkip = document.getElementById("btnSkip");
btnSkip.addEventListener("click", () => {
  const confirmation = window.confirm(
    "Você tem certeza que deseja pular o exercício?"
  );
  if (confirmation) {
    window.open("../exercicio_2/indexq2.html", "_self");
  }
});

btnVerify.addEventListener("click", () => {
  const rodape = document.getElementById("rodape");

  if (qSelect == 0) {
    console.log("Selecione uma alternativa");
  } else if (qSelect == 2) {
    rodape.style.opacity = "0";
    setTimeout(() => {
      progressBar.classList.remove("none");
      rodape.innerHTML = `
              <div id="lineFooter"></div>
              <div class="botoes">
                  <img id="circleSuccess" src="../assets/circleSuccess.png" alt="">
                  <p id="textSuccess"><b id="h1Success">Boa!</b><br>Vamos para a próxima.</p>
                  <div id="btnNext">Avançar</div>
              </div>
          `;

      const style = document.createElement("style");

      style.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
@keyframes fadeIn {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
  }
  .fadeInText {
    /* Estilizando o texto dentro da box */
    color: #fff;
    text-align: center;
    align-content: center;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 110%;
    font-style: normal;
    animation: fadeIn 2s ease-out;
}

@keyframes growCircle {
  0% {
      width: 0;
      height: 0;
      opacity: 1;
  }
  100% {
      width: 3000px;
      height: 3000px;
      opacity: 1;
  }
}

@keyframes shrinkCircle {
  0% {
      width: 3000px;
      height: 3000px;
      opacity: 1;
  }
  100% {
      width: 0px;
      height: 0px;
      opacity: 1;
  }
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.shake {
  animation: shake 1.5s;
}

.error {
  filter: hue-rotate(0deg) saturate(1000%);
}

#selectAlternativaH1 {
  display: flex;
  justify-content: center;
}

img {
    user-select: none; /* Para a maioria dos navegadores */
    -webkit-user-drag: none; /* Para navegadores baseados em WebKit */
    -moz-user-select: none; /* Para o Firefox */
    -webkit-user-select: none; /* Para o Safari */
    -ms-user-select: none; /* Para o Internet Explorer/Edge */
    pointer-events: none; /* Para impedir a interação com a imagem */
}


body {
  background-color: #131f24;
  user-select: none;
  overflow: hidden;
}
#prof {
  margin: 320px 0 0 100px;
}

.progress {
  display: flex;
  justify-content: center;
}

#progressbar {
  width: 800px;
  height: 20px;
  border: 3px solid #55646c;
  border-radius: 50px;
}

#bar {
  width: 12.5%;
  height: 20px;
  border-radius: 10px;
  background-color: #6d5f6d;
  transition: 50ms;
}
#pokebola {
  display: flex;
  position: absolute;
  justify-content: space-around;
  margin: -15px 0 0 150px;
}

#textVida {
    /* Estilizando o texto */
    color: #fff;
    align-content: center;
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-style: normal;
    margin-right: 15px;
}

.pokevida {
  width: 50px;
}

.none {
  display: none;
}

.logo {
  display: flex;
  justify-content: end;
}

.dialogBox {
  display: flex;
}

#box {
  /* Estilizando a caixa */
  position: absolute;
  width: 440px;
  height: 152px;
  border: 5px solid #55646c;
  background-color: #1d292e;
  border-radius: 15px;
  top: 360px;
  left: 12%;
}

b {
  font-size: 16px;
  font-style: italic;
  color: #43515a;
}

.answerLines {
  display: flex;
  justify-content: center;
}

#line1 {
  position: absolute;
  top: 500px;
  width: 450px;
  border: 1px solid #55646c;
}

#line2 {
  position: absolute;
  top: 550px;
  width: 550px;
  border: 1px solid #55646c;
}

strong {
  color: #92c255;
}

.return {
  display: flex;
  justify-content: end;
  margin: 80px 20px 0 0;
}

#returnBox {
  position: absolute;
  width: 490px;
  height: 580px;
  background-color: #1d292e;
  border: 5px solid #3c4a51;
  border-top: none;
  border-radius: 40px 40px 15px 15px;
}
#returnHead {
  width: 490px;
  height: 60px;
  background-color: #807098;
  border-radius: 15px;

  /* Estilizando o texto */
  color: #fff;
  align-content: center;
  box-sizing: border-box;
  padding-left: 30px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
}

/* #returnHead:hover {
  cursor: pointer;
} */

#lineFooter {
  background-color: #37464f;
  width: 100%;
  height: 2px;
  margin-bottom: 16px;
}


.botoes {
  display: flex;
  margin-top: 30px;
}

#btnVerify {
    margin: 0 auto;
    background-color: #6d5f6d;
    border: 2px solid #665b66;
    border-bottom: 8px solid #5F555F;
    border-radius: 20px;
    width: 188px;
    height: 65px;

    /* Estilizando o texto */
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 150%;
    font-style: normal;
    align-content: center;
    text-align: center;
}

#btnVerify:hover {
    background-color: #7e727e;
    border-bottom: 8px solid #7e727e;
    padding-top: 5px;
    transition: 500ms;
    cursor: pointer;
}

       #btnNext {
           background-color: #92C255;
           border: 2px solid #92C255;
           border-bottom: 8px solid #83A755;
           border-radius: 20px;
           width: 200px;
           height: 65px;
       
           /* Estilizando o texto */
           color: #fff;
           font-family: "Ubuntu", sans-serif;
           font-weight: 600;
           font-size: 160%;
           font-style: normal;
           align-content: center;
           text-align: center;
       }
       
       #btnNext:hover {
           background-color: #b9d98f;
           border-bottom: 8px solid #b9d98f;
           padding-top: 5px;
           transition: 500ms;
           cursor: pointer;
       }

#btnSkip {
    margin: 0 auto;
    border: 5px solid #55646C;
    border-bottom: 9px solid #48555B;
    border-radius: 20px;
    width: 188px;
    height: 65px;

    /* Estilizando o texto */
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 150%;
    font-style: normal;
    align-content: center;
    text-align: center;
}

#btnSkip:hover {
  background-color: #1d292e;
  border: 5px solid #1d292e;
  border-bottom: 9px solid #1d292e;
  border-radius: 20px;
  transition: 500ms;
  padding-top: 5px;
  cursor: pointer;
}

#btnTip {
  margin: 0 auto;
  width: 188px;
  height: 65px;
  border: 8px solid #ffffff0d;
  border-radius: 20px;

  /* Estilizando o texto */
  color: #55646C;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#btnTip:hover {
  background-color: #1d292e;
  border: 8px solid #1d292e;
  border-radius: 20px;
  transition: 500ms;
  cursor: pointer;
}

.alternativasDiv {
  display: flex;
  position: absolute;
  top: 60%;
  left: 36%;

}

.alternativa {
  /* Estilizando as alternativa */
  border: 5px solid #55646C;
  border-bottom: 9px solid #48555B;
  border-radius: 20px;
  width: 250px;
  height: 65px;

  /* Estilizando o texto */
  color: #fff;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 13px;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#alternativa1 {
  margin: 0 20px 20px 0;
}

#alternativa3 {
  margin: 0 20px 20px 0;
}

#alternativa1:hover, #alternativa2:hover, #alternativa3:hover, #alternativa4:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}

.alternativa1Select {
  transition: 10ms;
  position: absolute;
  top: -180px;
  left: 135px;
}

.alternativa2Select {
  position: absolute;
  top: -180px;
  left: 140px;
}

.alternativa3Select {
  transition: 10ms;
  position: absolute;
  top: -180px;
  right: 120px;
}

.alternativa4Select {
  transition: 10ms;
  position: absolute;
  top: -180px;
  right: 165px;
}

#alternativa1Selected {
  width: 250px;
  height: 75px;
  border: 2px solid #55646C;
  border-radius: 20px;
  background-color: #37464F;
  margin: 0 26px 20px 0
}

#alternativa2Selected, #alternativa4Selected {
  /* Estilizando as alternativas */
  width: 250px;
  height: 75px;
  border: 2px solid #55646C;
  border-radius: 20px;
  background-color: #37464F;
}

#alternativa3Selected {
  /* Estilizando as alternativas */
  width: 250px;
  height: 75px;
  border: 2px solid #55646C;
  border-radius: 20px;
  background-color: #37464F;

  margin: 0 20px 20px 0;
}

#returnText {
  /* Estilizando o texto */
  color: #92c255;
  align-content: center;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 30px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 120%;
  font-style: normal;
}
#alternativa1:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa2:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa3:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa4:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}

.container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
}

.circle {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #131f24;
}

.circleGrow {
  animation: growCircle 1.8s linear forwards;
}

.circleShrink {
  background-color: #131f24;
  border-radius: 50%;
  animation: shrinkCircle 1.8s linear forwards;
}

.invisivel {
  display: none
}

       
       
       #rodape {
           width: 100%;
           height: 100%;
           background-color: #202F36;
           transition: opacity 1s ease; /* Adicionando a transição de opacidade */
           opacity: 1; /* Garantir que o rodapé comece visível */
       }
       
       
       #circleSuccess {
           width: 100px;
           height: 100px;
       }
       
       #h1Success {
           display: inline-block;
           color: #92C255;
           font-family: "Ubuntu", sans-serif;
           font-weight: 600;
           font-size: 32px;
           font-style: normal;
       }
       
       
       #textSuccess {
           color: #94A0A7;
           font-family: "Ubuntu", sans-serif;
           font-weight: 600;
           font-size: 22px;
           font-style: normal;
           align-content: start;
           justify-content: start;
           text-align: start;
           margin-right: 1100px;
       }
       
       
          `;
      document.head.appendChild(style);

      rodape.style.opacity = "1";
      const btAvancar = document.getElementById("btnNext");
      btAvancar.addEventListener("click", () => {
        window.open("../exercicio_2/indexq2.html", "_self");
      });

      alternativa1.removeEventListener("click", () => {});
      alternativa2.removeEventListener("click", () => {});
      alternativa3.removeEventListener("click", () => {});
      alternativa4.removeEventListener("click", () => {});

      returnText.innerText = `
{
  "acknowledged": true,
  "insertedId": ObjectId("50"),
}

`;
    }, 1000);
  } else {
    const alternativas = document.querySelectorAll(".alternativa");
    alternativas.forEach((alternativa) => {
      alternativa.removeEventListener("click", () => {});
    });
    rodape.style.opacity = "0";
    setTimeout(() => {
      rodape.innerHTML = `
        <footer id="rodape">
            <div id="lineFooter"></div>
            <div class="botoes">
                <img id="circleLoss" src="../assets/circleLoss.png" alt="">
                <p id="textLoss"><b id="h1Loss">Ah não...</b><br>Não foi dessa vez, tente novamente</p>
                <div id="btnNext">Tentar novamente</div>
            </div>
        </footer>
          `;
      const btnNext = document.getElementById("btnNext");
      const style = document.createElement("style");
      style.innerHTML = `
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
@keyframes fadeIn {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
  }
  .fadeInText {
    /* Estilizando o texto dentro da box */
    color: #fff;
    text-align: center;
    align-content: center;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 110%;
    font-style: normal;
    animation: fadeIn 2s ease-out;
}

@keyframes growCircle {
  0% {
      width: 0;
      height: 0;
      opacity: 1;
  }
  100% {
      width: 3000px;
      height: 3000px;
      opacity: 1;
  }
}

@keyframes shrinkCircle {
  0% {
      width: 3000px;
      height: 3000px;
      opacity: 1;
  }
  100% {
      width: 0px;
      height: 0px;
      opacity: 1;
  }
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.shake {
  animation: shake 1.5s;
}

.error {
  filter: hue-rotate(0deg) saturate(1000%);
}

#selectAlternativaH1 {
  display: flex;
  justify-content: center;
}

img {
    user-select: none; /* Para a maioria dos navegadores */
    -webkit-user-drag: none; /* Para navegadores baseados em WebKit */
    -moz-user-select: none; /* Para o Firefox */
    -webkit-user-select: none; /* Para o Safari */
    -ms-user-select: none; /* Para o Internet Explorer/Edge */
    pointer-events: none; /* Para impedir a interação com a imagem */
}


body {
  background-color: #131f24;
  user-select: none;
  overflow: hidden;
  }
#prof {
  margin: 320px 0 0 100px;
}

.progress {
  display: flex;
  justify-content: center;
}

#progressbar {
  width: 800px;
  height: 20px;
  border: 3px solid #55646c;
  border-radius: 50px;
}

#bar {
  width: 12.5%;
  height: 20px;
  border-radius: 10px;
  background-color: #6d5f6d;
  transition: 50ms;
}
#pokebola {
  display: flex;
  position: absolute;
  justify-content: space-around;
  margin: -15px 0 0 150px;
}

#textVida {
    /* Estilizando o texto */
    color: #fff;
    align-content: center;
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-style: normal;
    margin-right: 15px;
}

.pokevida {
  width: 50px;
}

.none {
  display: none;
}

.logo {
  display: flex;
  justify-content: end;
}

.dialogBox {
  display: flex;
}

#box {
  /* Estilizando a caixa */
  position: absolute;
  width: 440px;
  height: 152px;
  border: 5px solid #55646c;
  background-color: #1d292e;
  border-radius: 15px;
  top: 360px;
  left: 12%;
}

b {
  font-size: 16px;
  font-style: italic;
  color: #43515a;
}

.answerLines {
  display: flex;
  justify-content: center;
}

#line1 {
  position: absolute;
  top: 500px;
  width: 450px;
  border: 1px solid #55646c;
}

#line2 {
  position: absolute;
  top: 550px;
  width: 550px;
  border: 1px solid #55646c;
}

strong {
  color: #92c255;
}

.return {
  display: flex;
  justify-content: end;
  margin: 80px 20px 0 0;
}

#returnBox {
  position: absolute;
  width: 490px;
  height: 580px;
  background-color: #1d292e;
  border: 5px solid #3c4a51;
  border-top: none;
  border-radius: 40px 40px 15px 15px;
}
#returnHead {
  width: 490px;
  height: 60px;
  background-color: #807098;
  border-radius: 15px;

  /* Estilizando o texto */
  color: #fff;
  align-content: center;
  box-sizing: border-box;
  padding-left: 30px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
}

/* #returnHead:hover {
  cursor: pointer;
} */

#lineFooter {
  background-color: #37464f;
  width: 100%;
  height: 2px;
  margin-bottom: 16px;
}


.botoes {
  display: flex;
  margin-top: 30px;
}

#btnVerify {
    margin: 0 auto;
    background-color: #6d5f6d;
    border: 2px solid #665b66;
    border-bottom: 8px solid #5F555F;
    border-radius: 20px;
    width: 188px;
    height: 65px;

    /* Estilizando o texto */
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 150%;
    font-style: normal;
    align-content: center;
    text-align: center;
}

#btnVerify:hover {
    background-color: #7e727e;
    border-bottom: 8px solid #7e727e;
    padding-top: 5px;
    transition: 500ms;
    cursor: pointer;
}

#btnSkip {
    margin: 0 auto;
    border: 5px solid #55646C;
    border-bottom: 9px solid #48555B;
    border-radius: 20px;
    width: 188px;
    height: 65px;

    /* Estilizando o texto */
    color: #fff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 150%;
    font-style: normal;
    align-content: center;
    text-align: center;
}

#btnSkip:hover {
  background-color: #1d292e;
  border: 5px solid #1d292e;
  border-bottom: 9px solid #1d292e;
  border-radius: 20px;
  transition: 500ms;
  padding-top: 5px;
  cursor: pointer;
}

#btnTip {
  margin: 0 auto;
  width: 188px;
  height: 65px;
  border: 8px solid #ffffff0d;
  border-radius: 20px;

  /* Estilizando o texto */
  color: #55646C;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#btnTip:hover {
  background-color: #1d292e;
  border: 8px solid #1d292e;
  border-radius: 20px;
  transition: 500ms;
  cursor: pointer;
}

.alternativasDiv {
  display: flex;
  position: absolute;
  top: 60%;
  left: 36%;

}

.alternativa {
  /* Estilizando as alternativa */
  border: 5px solid #55646C;
  border-bottom: 9px solid #48555B;
  border-radius: 20px;
  width: 250px;
  height: 65px;

  /* Estilizando o texto */
  color: #fff;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 13px;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#alternativa1 {
  margin: 0 20px 20px 0;
}

#alternativa3 {
  margin: 0 20px 20px 0;
}

#alternativa1:hover, #alternativa2:hover, #alternativa3:hover, #alternativa4:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}

.alternativa1Select {
  transition: 10ms;
  position: absolute;
  top: -180px;
  left: 135px;
}

.alternativa2Select {
  position: absolute;
  top: -180px;
  left: 140px;
}

.alternativa3Select {
  transition: 10ms;
  position: absolute;
  top: -180px;
  right: 120px;
}

.alternativa4Select {
  transition: 10ms;
  position: absolute;
  top: -180px;
  right: 165px;
}

#alternativa1Selected {
  width: 250px;
  height: 75px;
  border: 2px solid #55646C;
  border-radius: 20px;
  background-color: #37464F;
  margin: 0 26px 20px 0
}

#alternativa2Selected, #alternativa4Selected {
  /* Estilizando as alternativas */
  width: 250px;
  height: 75px;
  border: 2px solid #55646C;
  border-radius: 20px;
  background-color: #37464F;
}

#alternativa3Selected {
  /* Estilizando as alternativas */
  width: 250px;
  height: 75px;
  border: 2px solid #55646C;
  border-radius: 20px;
  background-color: #37464F;

  margin: 0 20px 20px 0;
}

#returnText {
  /* Estilizando o texto */
  color: #92c255;
  align-content: center;
  box-sizing: border-box;
  padding-top: 40px;
  padding-left: 30px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 120%;
  font-style: normal;
}
#alternativa1:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa2:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa3:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa4:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}

.container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
}

.circle {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #131f24;
}

.circleGrow {
  animation: growCircle 1.8s linear forwards;
}

.circleShrink {
  background-color: #131f24;
  border-radius: 50%;
  animation: shrinkCircle 1.8s linear forwards;
}

.invisivel {
  display: none
}   
       
       
        #btnNext {
            background-color: #EE4035;
            border: 2px solid #EE4035;
            border-bottom: 8px solid #BA2C2C;
            border-radius: 20px;
            width: 250px;
            height: 65px;

            /* Estilizando o texto */
            color: #fff;
            font-family: "Ubuntu", sans-serif;
            font-weight: 600;
            font-size: 160%;
            font-style: normal;
            align-content: center;
            text-align: center;
        }

        #btnNext:hover {
            background-color: #e65b51;
            border-bottom: 8px solid #e65b51;
            padding-top: 5px;
            transition: 500ms;
            cursor: pointer;
        }       
       
        #rodape {
            width: 100%;
            height: 100%;
            background-color: #202F36;
        }


        #circleLoss {
            width: 100px;
            height: 100px;
        }

        #h1Loss {
            display: inline-block;
            color: #EE4035;
            font-family: "Ubuntu", sans-serif;
            font-weight: 600;
            font-size: 35px;
            font-style: normal;
        }


        #textLoss {
            color: #94A0A7;
            font-family: "Ubuntu", sans-serif;
            font-weight: 600;
            font-size: 25px;
            font-style: normal;
            align-content: start;
            justify-content: start;
            text-align: start;
            margin-right: 1100px;
        }
       
       
          `;
      document.head.appendChild(style);

      rodape.style.opacity = "1";

      alternativa1.removeEventListener("click", () => {});
      alternativa2.removeEventListener("click", () => {});
      alternativa3.removeEventListener("click", () => {});
      alternativa4.removeEventListener("click", () => {});

      if (qSelect == 1) {
        returnText.innerText = `
          {
          "acknowledged": true,
          "matchedCount": 0,
          "modifiedCount": 0
          }

        `;
        returnText.style.color = "#EE4035";
      }
      if (qSelect == 3) {
        returnText.innerText = `
          {
            "acknowledged": true,
            "matchedCount": 0,
            "modifiedCount": 0
          }

        `;
        returnText.style.color = "#EE4035";
      }
      if (qSelect == 4) {
        returnText.innerText = "[]";
        returnText.style.color = "#EE4035";
      }

      btnNext.addEventListener("click", () => {
        window.open("./indexq1.html", "_self");
      });
    }, 1000);
  }
});

alternativa1Selected.classList.add("none");
alternativa2Selected.classList.add("none");
alternativa3Selected.classList.add("none");
alternativa4Selected.classList.add("none");

let qSelect = 0;

btnVerify.style.backgroundColor = "#6d5f6d28";
btnVerify.style.border = "2px solid #6d5f6d28";
btnVerify.style.borderBottom = "8px solid #6d5f6d2d";
btnVerify.style.cursor = "no-drop";


function selecaoDeAlternativas() {
  alternativa1.addEventListener("click", () => {
    if (qSelect == 0) {
      btnVerify.style.backgroundColor = "#6d5f6d";
      btnVerify.style.border = "2px solid #665b66";
      btnVerify.style.borderBottom = "8px solid #5F555F"; 
      btnVerify.style.cursor = "pointer";
      qSelect = 1;
      alternativa1Selected.classList.remove("none");
      alternativa1.classList.add("alternativa1Select");
    } else if (qSelect == 1) {
      btnVerify.style.backgroundColor = "#6d5f6d28";
      btnVerify.style.border = "2px solid #6d5f6d28";
      btnVerify.style.borderBottom = "8px solid #6d5f6d2d";
      btnVerify.style.cursor = "no-drop";
      qSelect = 0;
      alternativa1Selected.classList.add("none");
      alternativa1.classList.remove("alternativa1Select");
    }
  });

  alternativa2.addEventListener("click", () => {
    if (qSelect == 0) {
      btnVerify.style.backgroundColor = "#6d5f6d";
      btnVerify.style.border = "2px solid #665b66";
      btnVerify.style.borderBottom = "8px solid #5F555F";
      btnVerify.style.cursor = "pointer";
      qSelect = 2;
      alternativa2Selected.classList.remove("none");
      alternativa2.classList.add("alternativa2Select");
    } else if (qSelect == 2) {
      btnVerify.style.backgroundColor = "#6d5f6d28";
      btnVerify.style.border = "2px solid #6d5f6d28";
      btnVerify.style.borderBottom = "8px solid #6d5f6d2d";
      btnVerify.style.cursor = "no-drop";
      qSelect = 0;
      alternativa2Selected.classList.add("none");
      alternativa2.classList.remove("alternativa2Select");
    }
  });

  alternativa3.addEventListener("click", () => {
    if (qSelect == 0) {
      btnVerify.style.backgroundColor = "#6d5f6d";
      btnVerify.style.border = "2px solid #665b66";
      btnVerify.style.borderBottom = "8px solid #5F555F";  
      btnVerify.style.cursor = "pointer";
      qSelect = 3;
      alternativa3Selected.classList.remove("none");
      alternativa3.classList.add("alternativa3Select");
    } else if (qSelect == 3) {
      btnVerify.style.backgroundColor = "#6d5f6d28";
      btnVerify.style.border = "2px solid #6d5f6d28";
      btnVerify.style.borderBottom = "8px solid #6d5f6d2d";
      btnVerify.style.cursor = "no-drop";
      qSelect = 0;
      alternativa3Selected.classList.add("none");
      alternativa3.classList.remove("alternativa3Select");
    }
  });

  alternativa4.addEventListener("click", () => {
    if (qSelect == 0) {
      btnVerify.style.backgroundColor = "#6d5f6d";
      btnVerify.style.border = "2px solid #665b66";
      btnVerify.style.borderBottom = "8px solid #5F555F";  
      btnVerify.style.cursor = "pointer";
      qSelect = 4;
      alternativa4Selected.classList.remove("none");
      alternativa4.classList.add("alternativa4Select");
    } else if (qSelect == 4) {
      btnVerify.style.backgroundColor = "#6d5f6d28";
      btnVerify.style.border = "2px solid #6d5f6d28";
      btnVerify.style.borderBottom = "8px solid #6d5f6d2d";
      btnVerify.style.cursor = "no-drop";
      qSelect = 0;
      alternativa4Selected.classList.add("none");
      alternativa4.classList.remove("alternativa4Select");
    }
  });
}

selecaoDeAlternativas();
let audio = new Audio("../assets/batalha.mp3");
let audio2 = new Audio("../assets/home.mp3");
const circle = document.querySelector("#circle_obj");
const container = document.querySelector("#circle");

window.addEventListener("load", () => {
  audio.play();
});
const verif = localStorage.getItem("tutorial");
if (verif == "entrou") {
  setTimeout(function () {
    circle.classList.remove("invisivel");
    circle.classList.remove("circleGrow");
    circle.classList.add("circleShrink");
    setTimeout(function () {
      circle.classList.add("invisivel");
      container.classList.add("invisivel");
    }, 1800);
    fadeIn(audio, 2000);
  }, 100);
} else {
  fadeIn(audio2, 2000);
  container.classList.remove("invisivel");

  circle.classList.add("circle");
  circle.classList.add("circleGrow");
  setTimeout(function () {
    const div_tutorial = document.createElement("div");
    div_tutorial.id = "tutorial";
    div_tutorial.style.position = "absolute";
    div_tutorial.style.top = "auto";
    div_tutorial.style.left = "auto";
    div_tutorial.style.width = "100%";
    div_tutorial.style.height = "100%";
    div_tutorial.style.zIndex = "999";

    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.top = "32%";
    iframe.style.left = "auto";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.zIndex = "999";
    iframe.setAttribute("src", "../tutorial/index_tutorial.html");

    div_tutorial.appendChild(iframe);
    circle.appendChild(div_tutorial);
  }, 1800);
}

window.addEventListener("storage", function (event) {
  if (event.storageArea === localStorage) {
    console.log("Uma mudança foi detectada no localStorage!");
    console.log("Chave:", event.key);
    console.log("Novo valor:", event.newValue);
    console.log("Antigo valor:", event.oldValue);
    fadeOut(audio2, 1800);
    this.setTimeout(function () {
      window.location.reload();
    }, 100);
  }
});

function fadeOut(audioElement, duration) {
  const step = 0.01;

  const interval = duration / (1 / step);

  const fade = setInterval(() => {
    if (audioElement.volume > 0) {
      audioElement.volume = Math.max(0, audioElement.volume - step);
    } else {
      clearInterval(fade);

      audioElement.pause();
    }
  }, interval);
}

function fadeIn(audioElement, duration, targetVolume = 1.0) {
  audioElement.volume = 0;

  audioElement.play();

  const step = 0.01;

  const interval = duration / (targetVolume / step);

  const fade = setInterval(() => {
    if (audioElement.volume < targetVolume) {
      audioElement.volume = Math.min(targetVolume, audioElement.volume + step);
    } else {
      clearInterval(fade);
    }
  }, interval);
}
