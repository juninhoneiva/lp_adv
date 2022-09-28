// Toggle Chat Window
const container = document.querySelector(".chat-container");
const header = document.querySelector(".chat-header");

header.addEventListener("click", () => {
  container.classList.toggle("active");
  header.classList.add("active");
  callBot();
});

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
    "<div class='bot-msg' id='bot-msg'><img src='/assets/img/bot.png' height='45px' width='45px'><span>Olá, bem-vindo(a) à Resende e Neiva Advocacia Trabalhista!</span></div><h6 id='chat-time-bot'></h6>"
  );
  setTimeout(secondBotMessage, 1300);
}

function secondBotMessage() {
  const secondBot = document.getElementById("chat-box");
  secondBot.insertAdjacentHTML(
    "beforeend",
    "<div class='bot-msg'><img src='/assets/img/bot.png' height='45px' width='45px'><span>Para falar com um advogado trabalhista agora, me diga o seu <strong>NOME</strong>.</span></div><h6 id='chat-time-bot'></h6>"
  );
}

function callBot() {
  let msg = document.querySelectorAll("#bot-msg").length > 0;
  if (header.classList.contains("active") && !msg) {
    setTimeout(firstBotMessage, 1000);
  }
}
