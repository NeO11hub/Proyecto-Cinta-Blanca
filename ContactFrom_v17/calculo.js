
function calcularTotal(){ 
  let dLab = document.getElementById('diasLaborados').value;
  let hLab = document.getElementById('horasLaboradas').value;
  let vHora= document.getElementById('valorHoras').value;
  document.getElementById('resultado').innerHTML = parseInt(dLab) * parseInt(hLab)* parseInt(vHora);
}



