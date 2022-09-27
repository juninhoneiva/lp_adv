// Toggle Chat Window
const container = document.querySelector(".chat-container");
const header = document.querySelector(".chat-header");

header.addEventListener("click", () => {
  container.classList.toggle("active");
});

setTimeout(firstBotMessage, 1000);

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

function firstBotMessage() {
  const firstBot = document.getElementById("chat-box");
  firstBot.insertAdjacentHTML(
    "beforeend",
    "<div class='bot-msg' id='bot-msg'><img src='/assets/img/bot.png' height='45px' width='45px'><span>Olá, bem-vindo(a) à Resende e Neiva Advocacia Trabalhista!</span></div>"
  );
  setTimeout(secondBotMessage, 1300);
}

function secondBotMessage() {
  const secondBot = document.getElementById("chat-box");
  secondBot.insertAdjacentHTML(
    "beforeend",
    "<div class='bot-msg' id='bot-msg'><img src='/assets/img/bot.png' height='45px' width='45px'><span>Para falar com um advogado trabalhista agora, me diga o seu <strong>NOME</strong>.</span></div>"
  );
}
