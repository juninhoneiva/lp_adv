<?php
$conn = mysqli_connect("localhost", "root", "A28r11N85j07@", "bot") or die("Database Error");

$getMesg = mysqli_real_escape_string($conn, $_POST['text']);

$check_data = "SELECT replies FROM chatbot WHERE queries LIKE '%$getMesg%'";
$run_query = mysqli_query($conn, $check_data) or die("Error");

if(mysqli_num_rows($run_query) > 0){
    $fetch_data = mysqli_fetch_assoc($run_query);
    $replay = $fetch_data['replies'];
    echo $replay;
}else{
  echo "Desculpe, sou apenas um assistente virtual. Tente perguntar outra coisa ou converse agora com um Advogado pelo WhatsApp. <br><br>
  <a href='https://wa.me/553135328456' target='_blank'> FALAR COM ADVOGADO </a>";
}

?>