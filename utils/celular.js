// Gerador e validador de números de celular brasileiros
export const CelularUtils = {
  // DDD por região
  ddds: {
    'São Paulo (Capital)': ['11'],
    'São Paulo (Interior)': ['12', '13', '14', '15', '16', '17', '18', '19'],
    'Rio de Janeiro': ['21', '22', '24'],
    'Espírito Santo': ['27', '28'],
    'Minas Gerais': ['31', '32', '33', '34', '35', '37', '38'],
    'Paraná': ['41', '42', '43', '44', '45', '46'],
    'Santa Catarina': ['47', '48', '49'],
    'Rio Grande do Sul': ['51', '53', '54', '55'],
    'Distrito Federal/Goiás': ['61', '62', '64'],
    'Mato Grosso/Mato Grosso do Sul': ['65', '67'],
    'Acre/Rondônia': ['68', '69'],
    'Bahia': ['71', '73', '74', '75', '77'],
    'Sergipe': ['79'],
    'Pernambuco': ['81', '87'],
    'Alagoas': ['82'],
    'Paraíba': ['83'],
    'Rio Grande do Norte': ['84'],
    'Ceará': ['85', '88'],
    'Piauí': ['86', '89'],
    'Pará/Amapá': ['91', '93', '94', '96'],
    'Amazonas/Roraima': ['92', '97'],
    'Maranhão': ['98', '99']
  },

  // Gera um número de celular válido
  generate(options = {}) {
    const { formatted = true, region = null, operator = null } = options
    
    // Seleciona um DDD
    let ddd
    if (region && this.ddds[region]) {
      const regionDdds = this.ddds[region]
      ddd = regionDdds[Math.floor(Math.random() * regionDdds.length)]
    } else {
      const allDdds = Object.values(this.ddds).flat()
      ddd = allDdds[Math.floor(Math.random() * allDdds.length)]
    }
    
    // Prefixos das operadoras (9xxxx-xxxx)
    const operatorPrefixes = {
      'Vivo': ['9', '8', '7'],
      'Tim': ['9', '8', '7'],
      'Claro': ['9', '8', '7'],
      'Oi': ['9', '8', '7']
    }
    
    // Gera o primeiro dígito (sempre 9 para celular)
    let firstDigit = '9'
    
    // Gera o segundo dígito baseado na operadora
    let secondDigit
    if (operator && operatorPrefixes[operator]) {
      const prefixes = operatorPrefixes[operator]
      secondDigit = prefixes[Math.floor(Math.random() * prefixes.length)]
    } else {
      secondDigit = Math.floor(Math.random() * 10).toString()
    }
    
    // Gera os 7 dígitos restantes
    const remainingDigits = Math.floor(Math.random() * 10000000).toString().padStart(7, '0')
    
    const fullNumber = ddd + firstDigit + secondDigit + remainingDigits
    
    return formatted ? this.format(fullNumber) : fullNumber
  },

  // Valida um número de celular
  validate(celular) {
    if (!celular) return false
    
    // Remove formatação
    celular = celular.replace(/[^\d]/g, '')
    
    // Verifica se tem 11 dígitos
    if (celular.length !== 11) return false
    
    // Verifica se o DDD é válido
    const ddd = celular.substring(0, 2)
    const allDdds = Object.values(this.ddds).flat()
    if (!allDdds.includes(ddd)) return false
    
    // Verifica se o primeiro dígito após o DDD é 9 (celular)
    if (celular[2] !== '9') return false
    
    return true
  },

  // Formata um número de celular
  format(celular) {
    if (!celular) return ''
    celular = celular.replace(/[^\d]/g, '')
    
    if (celular.length === 11) {
      return celular.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }
    
    return celular
  },

  // Remove formatação do celular
  unformat(celular) {
    return celular ? celular.replace(/[^\d]/g, '') : ''
  },

  // Retorna todas as regiões disponíveis
  getRegions() {
    return Object.keys(this.ddds)
  }
}