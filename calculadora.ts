// Feita de uma forma mais didática e simples 
// Função que calcula quantos itens precisa
// Ela espera receber o total de pessoas e quantas pessoas cada unidade serve
function calcularItens(totalPessoas: number, pessoasPorUnidade: number): number {
  // Se a divisão fecha exata, devolve só a divisão
  if (totalPessoas % pessoasPorUnidade === 0) {
    return totalPessoas / pessoasPorUnidade;
  }
  // Se não fecha, desconta o resto e soma mais 1
  return (totalPessoas - (totalPessoas % pessoasPorUnidade)) / pessoasPorUnidade + 1;
}

// Loop que mantém o programa rodando até ter uma resposta válida ou cancelar
while (true) {
  // Pede o número de pessoas e guarda na variável pergunta
  const pergunta = prompt("Quantas pessoas vão participar do churrasco?");

  // Se o usuário clicou em cancelar, a pergunta vem como null
  if (pergunta === null) {
    // Pergunta se realmente quer sair
    if (confirm("Tem certeza que deseja cancelar?")) {
      break; // Sai do loop e encerra
    } else {
      continue; // Volta pro começo do loop
    }
  }

  // Converte o texto da pergunta para número
  const pessoas = Number(pergunta);

  // Valida se veio vazio, se não é número ou se é zero ou negativo
  if (pergunta === "" || isNaN(pessoas) || pessoas <= 0) {
    alert("Por favor, digite um número válido de pessoas!");
    continue; // Volta a perguntar
  }

  // Cálculos de carne e farofa (podem ser fracionados)
  const carneGramas = pessoas * 400; // 400g por pessoa
  const carneKg = carneGramas / 1000; // converte grama para kg
  const farofaGramas = pessoas * 100; // 100g por pessoa
  const farofaKg = farofaGramas / 1000; // converte grama para kg

  // Cálculos de itens que não fraciona, usando a função
  const carvaoKg = calcularItens(pessoas, 5); // 1kg a cada 5 pessoas
  const refrigeranteGarrafas = calcularItens(pessoas, 4); // 1 garrafa 2L a cada 4 pessoas

  // Monta o texto final da lista
  const resultado = 'Lista de Compras - Churrasco para ' + pessoas + ' pessoas\n' +
  'Carne: ' + carneKg + 'kg (' + carneGramas + 'g)\n' +
  'Farofa: ' + farofaKg + 'kg (' + farofaGramas + 'g)\n' +
  'Carvão: ' + carvaoKg + 'kg\n' +
  'Refrigerante: ' + refrigeranteGarrafas + ' garrafas de 2L';

  // Mostra o resultado na tela
  alert(resultado);
  break; // Encerra o loop depois de mostrar
}