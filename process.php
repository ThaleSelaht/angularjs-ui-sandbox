<?php

$data = array(); // array to pass back data

  // if there are no errors, return a message
  $data['messageSuccess'] = 'Hey! Obrigado por entrar em contato. Retornaremos a mensagem em breve.';
  // CHANGE THE TWO LINES BELOW
  $email_to = "contato@thumb.com.br";
  $email_subject = "Formulário de contato site Thumb";
  $nome = $_POST['nome']; // required
  $email_from = $_POST['email']; // required
  $fone = $_POST['fone']; // required
  if(isset($_POST['assunto'])){
    $assunto = $_POST['assunto']; 
  }else{
    $assunto = "";
  }

  if(isset($_POST['descricao'])){
    $descricao = $_POST['descricao']; 
  }else{
    $descricao = "";
  }

  $email_message = "Detalhes do Formulário:"."\n";
  $email_message .= "Nome: ".$nome."\n";
  $email_message .= "Email: ".$email_from."\n";
  $email_message .= "Telefone: ".$fone."\n";
  $email_message .= "Assunto: ".$assunto."\n";
  $email_message .= "Descrição: ".$descricao."\n";
  $headers = 'From: '.$email_from."\n".
  'Reply-To: '.$email_from."\n" .
  'X-Mailer: PHP/' . phpversion();
  if(@mail($email_to, $email_subject, $email_message, $headers)){
    $data['success'] = true;
  }else{
    $data['success'] = false;
  }

// return all our data to an AJAX call
echo json_encode($data);