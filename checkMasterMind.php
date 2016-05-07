<?php

session_start();

// Mastermind (examen)
$nombre = "eric";
$email = "eric2reta@gmail.com";

// Mastermind (practica)
$nombre = $_POST['nombre'];

$op1 = $_POST['op1'];
$op2 = $_POST['op2'];
$op3 = $_POST['op3'];
$op4 = $_POST['op4'];

if($nombre == "setPassword"){

    $_SESSION['ok1'] = $op1; 
    $_SESSION['ok2'] = $op2; 
    $_SESSION['ok3'] = $op3; 
    $_SESSION['ok4'] = $op4; 

    $response = '{"succes": "Contraseña Guardada"}';

}else if($nombre == "respCheck"){

   
    if($op1 != $_SESSION['ok1']){      $op1 = 0;   }
    if($op2 != $_SESSION['ok2']){      $op2 = 0;   }
    if($op3 != $_SESSION['ok3']){      $op3 = 0;   }
    if($op4 != $_SESSION['ok4']){      $op4 = 0;   }

     $response = '{"op1":"'.$op1.'", "op2":"'.$op2.'", "op3":"'.$op3.'", "op4":"'.$op4.'"}';

} else if($nombre == "getInfo"){
   $response = '{"nombre":"'.$nombre.'","email":"'.$email.'"}'; 
}

echo $response;


?>
