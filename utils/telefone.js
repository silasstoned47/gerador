// Gerador e validador de números de telefone fixo brasileiros
export const TelefoneUtils = {
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
  
    // Prefixos válidos para telefones fixos (primeiro dígito após DDD)
    validPrefixes: ['2', '3', '4', '5'],
  
    // Gera um número de telefone fixo válido
    generate(options = {}) {
      const { formatted = true, region = null } = options
      
      // Seleciona um DDD
      let ddd
      if (region && this.ddds[region]) {
        const regionDdds = this.ddds[region]
        ddd = regionDdds[Math.floor(Math.random() * regionDdds.length)]
      } else {
        const allDdds = Object.values(this.ddds).flat()
        ddd = allDdds[Math.floor(Math.random() * allDdds.length)]
      }
      
      // Gera o primeiro dígito (2, 3, 4 ou 5 para telefone fixo)
      const firstDigit = this.validPrefixes[Math.floor(Math.random() * this.validPrefixes.length)]
      
      // Gera os 7 dígitos restantes
      const remainingDigits = Math.floor(Math.random() * 10000000).toString().padStart(7, '0')
      
      const fullNumber = ddd + firstDigit + remainingDigits
      
      return formatted ? this.format(fullNumber) : fullNumber
    },
  
    // Valida um número de telefone fixo
    validate(telefone) {
      if (!telefone) return false
      
      // Remove formatação
      telefone = telefone.replace(/[^\d]/g, '')
      
      // Verifica se tem 10 dígitos
      if (telefone.length !== 10) return false
      
      // Verifica se o DDD é válido
      const ddd = telefone.substring(0, 2)
      const allDdds = Object.values(this.ddds).flat()
      if (!allDdds.includes(ddd)) return false
      
      // Verifica se o primeiro dígito após o DDD é válido para fixo (2, 3, 4 ou 5)
      const firstDigit = telefone[2]
      if (!this.validPrefixes.includes(firstDigit)) return false
      
      return true
    },
  
    // Formata um número de telefone fixo
    format(telefone) {
      if (!telefone) return ''
      telefone = telefone.replace(/[^\d]/g, '')
      
      if (telefone.length === 10) {
        return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
      }
      
      return telefone
    },
  
    // Remove formatação do telefone
    unformat(telefone) {
      return telefone ? telefone.replace(/[^\d]/g, '') : ''
    },
  
    // Retorna todas as regiões disponíveis
    getRegions() {
      return Object.keys(this.ddds)
    },
  
    // Verifica se um número é fixo ou celular
    getType(numero) {
      if (!numero) return null
      
      numero = numero.replace(/[^\d]/g, '')
      
      if (numero.length === 10) {
        const firstDigit = numero[2]
        if (this.validPrefixes.includes(firstDigit)) {
          return 'fixo'
        }
      } else if (numero.length === 11) {
        const firstDigit = numero[2]
        if (firstDigit === '9') {
          return 'celular'
        }
      }
      
      return null
    },
  
    // Gera múltiplos números
    generateBatch(count = 10, options = {}) {
      const numbers = []
      for (let i = 0; i < count; i++) {
        numbers.push(this.generate(options))
      }
      return numbers
    },
  
    // Estatísticas sobre um DDD
    getDddInfo(ddd) {
      for (const [region, ddds] of Object.entries(this.ddds)) {
        if (ddds.includes(ddd)) {
          return {
            ddd,
            region,
            type: 'fixo',
            digits: 10,
            format: '(XX) XXXX-XXXX'
          }
        }
      }
      return null
    }
  }