function churrasco(){

  const p = prompt('Quantas pessoas vao participar do churrasco?');
  if(p === null) return;
  const n = +p;
  if(!(n > 0)) return alert('Por favor, digite um numero valido de pessoas!'), churrasco();

  alert('Lista de Compras - Churrasco para '+n+' pessoas\nCarne: '+n*0.4+'kg ('+n*400+'g)\nFarofa: '+n*0.1+'kg ('+n*100+'g)\nCarvao: '+Math.ceil(n/5)+'kg\nRefrigerante: '+Math.ceil(n/4)+' garrafas de 2L');
}

churrasco();