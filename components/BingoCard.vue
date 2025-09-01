<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'BINGO'
  },
  cardNumber: {
    type: Number,
    default: 1
  },
  colorMode: {
    type: String,
    default: 'color' // 'bw' or 'color'
  }
})

// Generate random numbers for each column
const getRandomNumbers = (min, max, count) => {
  const numbers = new Set()
  while (numbers.size < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    numbers.add(num)
  }
  return Array.from(numbers).sort((a, b) => a - b)
}

// Generate the bingo card
const generateCard = () => {
  const columns = {
    B: getRandomNumbers(1, 15, 5),
    I: getRandomNumbers(16, 30, 5),
    N: getRandomNumbers(31, 45, 4),
    G: getRandomNumbers(46, 60, 5),
    O: getRandomNumbers(61, 75, 5)
  }
  
  // Insert free space in the middle
  columns.N.splice(2, 0, 'BINGO')
  
  return columns
}

const card = generateCard()
</script>

<template>
  <div class="bingo-card" :class="`${colorMode}-mode`">
    <div class="bingo-header">
      <h3>{{ title }} #{{ cardNumber }}</h3>
    </div>
    <div class="bingo-grid">
      <div class="bingo-row header">
        <div v-for="letter in ['B', 'I', 'N', 'G', 'O']" :key="letter" class="bingo-cell header">
          {{ letter }}
        </div>
      </div>
      <div v-for="row in 5" :key="row" class="bingo-row">
        <div v-for="(letter, col) in ['B', 'I', 'N', 'G', 'O']" :key="`${row}-${col}`" 
             class="bingo-cell" 
             :class="{ 'free-space': row === 3 && col === 2 }">
          {{ card[letter][row - 1] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bingo-card {
  border: 2px solid #333;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bingo-header {
  background-color:rgb(0, 0, 0);
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.bingo-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.bingo-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.bingo-row {
  display: flex;
  width: 100%;
}

.bingo-row.header {
  font-weight: bold;
  background-color: #f0f0f0;
}

.bingo-cell {
  flex: 1;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.25rem;
  position: relative;
}

.free-space {
  background-color: #f0f0f0;
  font-style: italic;
  font-size: 0.8rem;
}

/* Color mode styles */
.color-mode .bingo-header {
  background-color:rgb(0, 0, 0);
}

.color-mode .bingo-row:nth-child(odd) .bingo-cell:nth-child(odd),
.color-mode .bingo-row:nth-child(even) .bingo-cell:nth-child(even) {
  background-color: #fff5f5;
}

/* Print styles */
@media print {
  .bingo-card {
    break-inside: avoid;
    page-break-inside: avoid;
    box-shadow: none;
  }
}
</style>
