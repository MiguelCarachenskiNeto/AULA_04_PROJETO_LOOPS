function pedir() {
    var valor = parseInt(prompt("escolha um numero de 1  a 4: "));
    console.log(valor);
    console.log(typeof valor);
    console.log(typeof Number(valor));
    console.log(valor);
  
    switch (Number(valor)) {
      case 1:
        alert("Você escolheu Suco");
        break;
      case 2:
        alert("Você escolheu Agua gelada");
        break;
      case 3:
        alert("Você escolheu Sorvete");
        break;
      case 4:
        alert("Você chamou o garçom");
        break;
  
      default:
        alert("escolha entre 1 a 4!");
        break;
    }
  }