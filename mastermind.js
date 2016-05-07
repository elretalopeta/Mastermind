$(document).ready(iniciar);

function iniciar(){

    //Mastermind (examen)
    $('#backWhite').css({'display':'none'});
    $('#showInfo').click(setContraseña);
    $('#backWhite').hide();
    $('#showInfo').hide();

    //Mastermind (practica)
    $('#start').click(init);


   
}

function init(){

    $('#start').hide();
    $('#find_password').hide();
    $('#resultats').hide();
    
    setColor();
    $('#set_password').click(guardar);
    $('#check_password').click(solucion);
}

function setColor(){

    //Registro
    $('#pas1').click(cambiar);
    $('#pas2').click(cambiar);
    $('#pas3').click(cambiar);
    $('#pas4').click(cambiar);

    //Comprobacion
   $('#op1').click(cambiar);
   $('#op2').click(cambiar);
   $('#op3').click(cambiar);
   $('#op4').click(cambiar);

}


function cambiar(){

    var clase = $(this).attr("class");

    switch (clase){
        case "opc1":
              $(this).attr("class","opc2");
            break;
        case "opc2":
              $(this).attr("class","opc3");
            break;        
        case "opc3":
              $(this).attr("class","opc4");
            break;
        case "opc4":
              $(this).attr("class","opc1");
            break;
        default:
            $(this).attr("class","opc1");
            break;
    }
}

function guardar(){

    //Mastermind (practica) 
    var c1 = $("#pas1").attr("class");
    var c2 = $("#pas2").attr("class");
    var c3 = $("#pas3").attr("class");
    var c4 = $("#pas4").attr("class");

    $.ajax({
       type: "POST",
       url: "checkMasterMind.php",
       dataType: "json",
       data:{
        nombre: "setPassword", 
        op1: c1, 
        op2: c2,
        op3: c3, 
        op4: c4
       },

       success: function(response){
        alert(response.succes);
        $('#crea_password').hide();
        $('#find_password').show();
       }, error: function(err){
            alert("Error "+err.responseText);
       }
     });

}

function solucion(){
    
    var c1 = $("#op1").attr("class");
    var c2 = $("#op2").attr("class");
    var c3 = $("#op3").attr("class");
    var c4 = $("#op4").attr("class");

    $.ajax({
       type: "POST",
       url: "checkMasterMind.php",
       dataType: "json",
       data:{
        nombre:"respCheck", 
        op1: c1, 
        op2: c2, 
        op3: c3, 
        op4: c4
      },
         success: function(response){

          $("#op1").attr("class", response.op1);
          $("#op2").attr("class", response.op2);
          $("#op3").attr("class", response.op3);
          $("#op4").attr("class", response.op4);

         if(response.op1 != 0 && response.op2 != 0 && response.op3 != 0 && response.op4 != 0){
          alert("CORRECTO!!");

         }

      }, error: function(error){
        alert("Error " + error.responseText);
      }
        });

}

function setContraseña(){
    $('#backWhite').fadeIn();
    $('#backWhite').css({'display':'block','position':'fixed','background-color':'white','opacity':'0.7','width':'100%','height':'100%','z-index':'100','top':'0px','left':'0px'});
    $('#getInfo').css({'position':'absolute','width':'200px','height':'120px','left':'0px'});
}


function ex03(){
    $('#getInfo').animate({'top':'90px','left':'100px'},{'duration':'1500'});
    $('#getInfo').click(ex04());
}

function ex04(){
    $.ajax({
       type: "POST",
       url: "checkMasterMind.php",
       dataType: "json",
       data:{op:"getInfo"},
       success: function(respJSON){
           var nombre = respJSON.nombre;
           var email = respJSON.email;
           $("#info").html(nombre);  
           //$("#info").html(email);  
}
    });
   
}





