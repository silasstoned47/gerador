<template>
  <div class="qr-code-card" :class="cardClasses">
    <div class="card-content">
      <!-- Title Section -->
      <div v-if="title" class="title-section">
        <h3 class="card-title">{{ title }}</h3>
        <div v-if="codeNumber" class="code-number">
          #{{ String(codeNumber).padStart(3, '0') }}
        </div>
      </div>

      <!-- QR Code Section -->
      <div class="qr-code-section">
        <div class="qr-code-container" :class="sizeClasses">
          <canvas
            ref="qrCanvas"
            class="qr-code-canvas"
          ></canvas>
        </div>
      </div>

      <!-- Text Section -->
      <div v-if="includeText && text" class="text-section">
        <div class="qr-text">
          {{ displayText }}
        </div>
      </div>

      <!-- Footer -->
      <div class="card-footer">
        <div class="footer-text">geradorii.com</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import QRCode from 'qrcode'

// Props
const props = defineProps({
  text: {
    type: String,
    default: 'https://geradorii.com'
  },
  title: {
    type: String,
    default: 'QR CODE'
  },
  codeNumber: {
    type: Number,
    default: null
  },
  colorMode: {
    type: String,
    default: 'color',
    validator: (value) => ['color', 'bw'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  includeText: {
    type: Boolean,
    default: true
  }
})

// Refs
const qrCanvas = ref(null)
const qrInitialized = ref(false)
const qrError = ref(null)

// Initialize QR code on mount
onMounted(() => {
  generateQRCode()
})

// Watch for changes in text to regenerate QR code
watch(() => props.text, () => {
  if (QRCode) {
    generateQRCode()
  } else {
    generateQRCodeCanvas()
  }
})

// Computed properties
const cardClasses = computed(() => ({
  'color-mode': props.colorMode === 'color',
  'bw-mode': props.colorMode === 'bw',
  [`size-${props.size}`]: true
}))

const sizeClasses = computed(() => ({
  'qr-small': props.size === 'small',
  'qr-medium': props.size === 'medium',
  'qr-large': props.size === 'large'
}))

const displayText = computed(() => {
  if (props.text.length > 50) {
    return props.text.substring(0, 47) + '...'
  }
  return props.text
})

// Methods

const generateQRCode = async () => {
  if (!qrCanvas.value) return

  const canvas = qrCanvas.value
  const size = getSizePixels()
  
  canvas.width = size
  canvas.height = size

  try {
    const options = {
      width: size,
      margin: 1,
      color: {
        dark: props.colorMode === 'color' ? '#1f2937' : '#000000',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'M'
    }

    await QRCode.toCanvas(canvas, props.text, options)
    qrInitialized.value = true
    qrError.value = null
  } catch (error) {
    console.error('QR Code generation error:', error)
    qrError.value = error
    generateQRCodeCanvas()
  }
}

const generateQRCodeCanvas = () => {
  if (!qrCanvas.value) return

  const canvas = qrCanvas.value
  const ctx = canvas.getContext('2d')
  const size = getSizePixels()
  
  // Clear canvas
  canvas.width = size
  canvas.height = size

  try {
    // Draw background
    ctx.fillStyle = props.colorMode === 'color' ? '#f3f4f6' : '#ffffff'
    ctx.fillRect(0, 0, size, size)
    
    // Draw QR code placeholder
    const qrSize = Math.min(size * 0.8, 200)
    const qrX = (size - qrSize) / 2
    const qrY = (size - qrSize) / 2
    
    ctx.fillStyle = props.colorMode === 'color' ? '#1f2937' : '#000000'
    ctx.fillRect(qrX, qrY, qrSize, qrSize)
    
    // Draw QR code pattern (simple representation)
    const cellSize = qrSize / 10
    const dotSize = cellSize * 0.5
    const startX = qrX + (qrSize - (cellSize * 7)) / 2
    const startY = qrY + (qrSize - (cellSize * 7)) / 2
    
    // Draw position markers
    ctx.fillStyle = props.colorMode === 'color' ? '#f3f4f6' : '#ffffff'
    
    // Top-left marker
    ctx.fillRect(startX, startY, cellSize * 7, cellSize * 7)
    ctx.fillStyle = props.colorMode === 'color' ? '#1f2937' : '#000000'
    ctx.fillRect(startX + cellSize, startY + cellSize, cellSize * 5, cellSize * 5)
    ctx.fillStyle = props.colorMode === 'color' ? '#f3f4f6' : '#ffffff'
    ctx.fillRect(startX + cellSize * 2, startY + cellSize * 2, cellSize * 3, cellSize * 3)
    
    // Add text
    ctx.fillStyle = props.colorMode === 'color' ? '#1f2937' : '#000000'
    ctx.font = `bold ${Math.max(10, size / 20)}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText('QR CODE', size / 2, size * 0.9)
    
  } catch (error) {
    console.error('Error generating fallback QR code:', error)
    // If all else fails, show a simple error message
    ctx.fillStyle = '#ffebee'
    ctx.fillRect(0, 0, size, size)
    ctx.fillStyle = '#d32f2f'
    ctx.font = '12px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Error generating QR code', size / 2, size / 2)
  }
}

const getSizePixels = () => {
  switch (props.size) {
    case 'small': return 120
    case 'medium': return 160
    case 'large': return 200
    default: return 160
  }
}
</script>

<style scoped>
.qr-code-card {
  @apply bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 mx-auto;
  width: 100%;
  max-width: 280px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  page-break-inside: avoid;
}

.qr-code-card.color-mode {
  @apply border-blue-200 bg-gradient-to-br from-blue-50 to-white;
}

.qr-code-card.bw-mode {
  @apply border-gray-400 bg-white;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

/* Title Section */
.title-section {
  text-align: center;
  margin-bottom: 16px;
  width: 100%;
}

.card-title {
  @apply font-bold text-gray-800 mb-2;
  font-size: 16px;
  line-height: 1.2;
}

.color-mode .card-title {
  @apply text-blue-800;
}

.code-number {
  @apply text-xs font-medium px-2 py-1 rounded;
}

.color-mode .code-number {
  @apply bg-blue-100 text-blue-700;
}

.bw-mode .code-number {
  @apply bg-gray-100 text-gray-700;
}

/* QR Code Section */
.qr-code-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 16px 0;
}

.qr-code-container {
  @apply border-2 rounded-lg p-2 bg-white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-mode .qr-code-container {
  @apply border-blue-200;
}

.bw-mode .qr-code-container {
  @apply border-gray-300;
}

.qr-code-container.qr-small {
  width: 140px;
  height: 140px;
}

.qr-code-container.qr-medium {
  width: 180px;
  height: 180px;
}

.qr-code-container.qr-large {
  width: 220px;
  height: 220px;
}

.qr-code-canvas {
  max-width: 100%;
  max-height: 100%;
  border-radius: 4px;
}

/* Text Section */
.text-section {
  margin-top: 12px;
  width: 100%;
  text-align: center;
}

.qr-text {
  @apply text-sm text-gray-700 break-words;
  font-weight: 500;
  line-height: 1.4;
  padding: 8px 4px;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.color-mode .qr-text {
  @apply text-blue-800;
}

.bw-mode .qr-text {
  @apply text-gray-800;
}

/* Footer */
.card-footer {
  margin-top: auto;
  padding-top: 12px;
  text-align: center;
  width: 100%;
  border-top: 1px solid;
}

.color-mode .card-footer {
  @apply border-blue-100;
}

.bw-mode .card-footer {
  @apply border-gray-200;
}

.footer-text {
  @apply text-xs font-medium;
}

.color-mode .footer-text {
  @apply text-blue-600;
}

.bw-mode .footer-text {
  @apply text-gray-600;
}

/* Size variants */
.size-small {
  max-width: 240px;
  min-height: 280px;
}

.size-small .card-title {
  font-size: 14px;
}

.size-small .qr-text {
  font-size: 12px;
}

.size-medium {
  max-width: 280px;
  min-height: 320px;
}

.size-large {
  max-width: 320px;
  min-height: 360px;
}

.size-large .card-title {
  font-size: 18px;
}

.size-large .qr-text {
  font-size: 14px;
}

/* Print styles */
@media print {
  .qr-code-card {
    box-shadow: none !important;
    border: 1px solid #000 !important;
    background: white !important;
    page-break-inside: avoid;
    margin: 0;
  }
  
  .color-mode.qr-code-card {
    background: white !important;
  }
  
  .qr-code-container {
    border: 1px solid #ccc !important;
  }
  
  .card-title,
  .qr-text,
  .footer-text {
    color: #000 !important;
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .qr-code-card {
    max-width: 100%;
    min-width: 240px;
  }
}
</style>