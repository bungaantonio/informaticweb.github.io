function checkFeedback() {
  let elMsg = document.getElementById("feedback");
  if (this.value.length < 5) {
    elMsg.textContent = "Assunto deve ter 5 ";
  } else {
    elMsg.textContent = "";
  }
}
let elAssunto = document.getElementById("assunto");
elAssunto.onblur = checkFeedback;
// Footer Scripts
const today = new Date();
const year = today.getFullYear();

let el = document.getElementById("anoAtual");
el.innerHTML = "<span>Todos os direitos reservados&copy; " + year + "</span>.";
