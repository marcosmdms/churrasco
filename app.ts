// Função principal da calculadora
function churrasco(): void {
  // Pergunta quantas pessoas vão no churrasco
  const p = prompt('Quantas pessoas vao participar do churrasco?');

  // Se clicou em cancelar
  if (p === null) {
    // Pergunta se realmente quer cancelar
    if (confirm('Tem certeza que deseja cancelar?')) return;
    // Se não quiser cancelar, volta pro início
    return churrasco();
  }

  // Converte o texto pra número  
  const n = +p;

  // Valida: se não for maior que 0 (pega vazio, 0, negativo e NaN)
  if (!(n > 0)) {
    // Pede um numero valido e chama a função de novo
    return alert('Por favor, digite um numero valido de pessoas!'), churrasco();
  }

  // Monta e mostra a lista
  // Math.ceil arredonda pra cima
  alert(
    'Lista de Compras - Churrasco para ' + n + ' pessoas\n' +
    'Carne: ' + n * 0.4 + 'kg (' + n * 400 + 'g)\n' +
    'Farofa: ' + n * 0.1 + 'kg (' + n * 100 + 'g)\n' +
    'Carvao: ' + Math.ceil(n / 5) + 'kg\n' +
    'Refrigerante: ' + Math.ceil(n / 4) + ' garrafas de 2L'
  );
}

// Inicia a calculadora
churrasco();