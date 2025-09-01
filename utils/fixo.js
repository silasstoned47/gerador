// DDDs válidos para telefones fixos no Brasil (excluindo DDDs de celular)
const validDDDs = [
  '11', '12', '13', '14', '15', '16', '17', '18', '19', // São Paulo e interior
  '21', '22', '24', // Rio de Janeiro
  '27', '28', // Espírito Santo
  '31', '32', '33', '34', '35', '37', '38', // Minas Gerais
  '41', '42', '43', '44', '45', '46', // Paraná
  '47', '48', '49', // Santa Catarina
  '51', '53', '54', '55', // Rio Grande do Sul
  '61', // Distrito Federal
  '62', '64', // Goiás
  '63', '65', '66', '67', // Mato Grosso e Mato Grosso do Sul
  '68', '69', // Acre e Rondônia
  '71', '73', '74', '75', '77', // Bahia
  '79', // Sergipe
  '81', '87', // Pernambuco
  '82', '83', // Alagoas e Paraíba
  '84', '85', // Rio Grande do Norte e Ceará
  '86', '89', // Piauí
  '88', '96', '98', '99' // Outros estados
];

// Gera um DDD aleatório
function getRandomDDD() {
  return validDDDs[Math.floor(Math.random() * validDDDs.length)];
}

// Gera um número de telefone fixo aleatório
function generateFixoNumber(formatted = true, ddd = null) {
  const selectedDDD = ddd || getRandomDDD();
  
  // Gera os 8 dígitos do número (sem DDD)
  // Primeiro dígito (2-5 para telefones fixos)
  const firstDigit = Math.floor(Math.random() * 4) + 2; // 2-5
  // Resto do número (7 dígitos)
  const restNumber = Math.floor(1000000 + Math.random() * 9000000).toString().substring(1);
  
  const fullNumber = `${firstDigit}${restNumber}`;
  
  if (formatted) {
    // Formata como (XX) XXXX-XXXX
    return `(${selectedDDD}) ${fullNumber.substring(0, 4)}-${fullNumber.substring(4)}`;
  }
  
  // Sem formatação: DDD + número
  return `${selectedDDD}${fullNumber}`;
}

// Gera múltiplos números de telefone fixo
function generateMultipleFixoNumbers(count = 1, formatted = true, ddd = null) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(generateFixoNumber(formatted, ddd));
  }
  return numbers;
}

// Valida se um número de telefone fixo é válido
function validateFixoNumber(phoneNumber) {
  // Remove tudo que não for dígito
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Verifica se tem 10 dígitos (DDD + 8 dígitos) ou 11 dígitos (se incluir o 9º dígito)
  if (cleaned.length !== 10 && cleaned.length !== 11) {
    return false;
  }
  
  // Extrai DDD e número
  const ddd = cleaned.substring(0, 2);
  const number = cleaned.substring(2);
  
  // Verifica se o DDD é válido
  if (!validDDDs.includes(ddd)) {
    return false;
  }
  
  // Verifica se o primeiro dígito do número está entre 2 e 5 (para fixos)
  const firstDigit = parseInt(number.charAt(0));
  return firstDigit >= 2 && firstDigit <= 5;
}

// Exporta as funções
const FixoUtils = {
  generate: generateFixoNumber,
  generateMultiple: generateMultipleFixoNumbers,
  validate: validateFixoNumber,
  getValidDDDs: () => [...validDDDs]
};

export { FixoUtils };

export default {
  install: (app) => {
    app.config.globalProperties.$fixo = FixoUtils;
  }
};
