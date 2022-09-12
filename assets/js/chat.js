// Toggle Chat Window
const container = document.querySelector(".chat-container");
const header = document.querySelector(".chat-header");

header.addEventListener("click", () => {
  container.classList.toggle("active");
  if (container.classList.contains("active"))
    setTimeout(() => {
      firstBotMessage();
    }, 1000);
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

// Gets the first message
function firstBotMessage() {
  let firstMessage =
    "Olá, precisando de um Advogado Trabalhista? Será um prazer ajudar!";
  document.getElementById("bot-msg-one").innerHTML =
    "<span>" + firstMessage + "</span>";
}
