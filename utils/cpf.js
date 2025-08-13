// Gerador e validador de CPF
export const CPFUtils = {
  // Estados brasileiros e seus prefixos de CPF
  states: {
    'DF/GO/MS/TO': [1],
    'AC/AM/AP/PA/RO/RR': [2],
    'CE/MA/PI': [3],
    'AL/PB/PE/RN': [4],
    'BA/SE': [5],
    'MG': [6],
    'ES/RJ': [7],
    'SP': [8],
    'PR/SC': [9],
    'RS': [0]
  },

  // Gera um CPF válido
  generate(options = {}) {
    const { formatted = true, state = null } = options
    
    // Gera os 9 primeiros dígitos
    let cpf = ''
    
    // Se um estado foi especificado, usa o prefixo correto
    if (state && this.states[state]) {
      const prefix = this.states[state][0]
      cpf = Math.floor(Math.random() * 100000000).toString().padStart(8, '0') + prefix
    } else {
      cpf = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')
    }
    
    // Calcula o primeiro dígito verificador
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i)
    }
    let digit1 = 11 - (sum % 11)
    if (digit1 > 9) digit1 = 0
    
    // Calcula o segundo dígito verificador
    sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (11 - i)
    }
    sum += digit1 * 2
    let digit2 = 11 - (sum % 11)
    if (digit2 > 9) digit2 = 0
    
    const fullCpf = cpf + digit1.toString() + digit2.toString()
    
    return formatted ? this.format(fullCpf) : fullCpf
  },

  // Valida um CPF
  validate(cpf) {
    if (!cpf) return false
    
    // Remove formatação
    cpf = cpf.replace(/[^\d]/g, '')
    
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) return false
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false
    
    // Valida primeiro dígito verificador
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i)
    }
    let digit1 = 11 - (sum % 11)
    if (digit1 > 9) digit1 = 0
    
    if (parseInt(cpf[9]) !== digit1) return false
    
    // Valida segundo dígito verificador
    sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (11 - i)
    }
    sum += digit1 * 2
    let digit2 = 11 - (sum % 11)
    if (digit2 > 9) digit2 = 0
    
    return parseInt(cpf[10]) === digit2
  },

  // Formata um CPF
  format(cpf) {
    if (!cpf) return ''
    cpf = cpf.replace(/[^\d]/g, '')
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  },

  // Remove formatação do CPF
  unformat(cpf) {
    return cpf ? cpf.replace(/[^\d]/g, '') : ''
  }
}