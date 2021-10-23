function convertir() {
  var valor=parseFloat(document.getElementById("cantidad").value);
  console.log(valor);
  var de = document.getElementById("de").value;
  var a = document.getElementById("a").value;
  var dolar= 3777.67;
  var euro = 4399.80;
  var resultado;
  if(de==1&&a==2){
      resultado=valor/dolar;
      document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(5);
  }
  else if (de==1&&a==3) {
      resultado= valor/euro;
      document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(5);
  }
  else if (de==2&&a==1) {
      resultado= dolar*valor;
      document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
  }
  else if (de==2&&a==3) {
      resultado= dolar/euro;
      document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
  }
  else if (de==3&&a==1) {
      resultado= valor*euro; 
      document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);

  }
  else if (de==3&&a==2) {
      resultado= euro/dolar; 
      document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
  }
  else{
      resultado=valor;
      document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);}
  }