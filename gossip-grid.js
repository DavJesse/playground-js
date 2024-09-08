import { gossips } from './gossip-grid.data.js'

export const grid = () => {
  const body = document.body

  // Create ranges container
  const rangesContainer = document.createElement('div')
  rangesContainer.className = 'ranges'
  body.appendChild(rangesContainer)

  // Create range inputs
  const ranges = [
    { id: 'width', min: 200, max: 800, value: 250, label: 'Width' },
    { id: 'fontSize', min: 20, max: 40, value: 20, label: 'Font Size' },
    { id: 'background', min: 20, max: 75, value: 50, label: 'Background' }
  ]

  ranges.forEach(range => {
    const rangeContainer = document.createElement('div')
    rangeContainer.className = 'range'

    const label = document.createElement('label')
    label.htmlFor = range.id
    label.textContent = range.label

    const input = document.createElement('input')
    input.type = 'range'
    input.id = range.id
    input.min = range.min
    input.max = range.max
    input.value = range.value
    input.className = 'range'

    const span = document.createElement('span')
    span.textContent = range.value

    rangeContainer.appendChild(label)
    rangeContainer.appendChild(input)
    rangeContainer.appendChild(span)
    rangesContainer.appendChild(rangeContainer)

    input.addEventListener('input', (e) => {
      span.textContent = e.target.value
      updateStyles()
    })
  })

  // Create gossip form
  const formCard = createGossipCard('', true)
  body.appendChild(formCard)

  // Create gossip cards
  gossips.forEach(gossip => {
    const card = createGossipCard(gossip)
    body.appendChild(card)
  })

  function createGossipCard(content, isForm = false) {
    const card = document.createElement('div')
    card.className = 'gossip'

    if (isForm) {
      const textarea = document.createElement('textarea')
      textarea.placeholder = 'Got a gossip to share?'
      card.appendChild(textarea)

      const button = document.createElement('button')
      button.textContent = 'Share gossip!'
      button.addEventListener('click', () => {
        if (textarea.value.trim() !== '') {
          const newCard = createGossipCard(textarea.value)
          body.insertBefore(newCard, formCard.nextSibling)
          textarea.value = ''
          updateStyles() // Apply styles to the new card
        }
      })
      card.appendChild(button)
    } else {
      card.textContent = content
    }

    return card
  }

  function updateStyles() {
    const width = document.getElementById('width').value
    const fontSize = document.getElementById('fontSize').value
    const background = document.getElementById('background').value

    document.querySelectorAll('.gossip').forEach(card => {
      card.style.width = `${width}px`
      card.style.fontSize = `${fontSize}px`
      card.style.background = `hsl(280, 50%, ${background}%)`
    })
  }

  // Initial styles update
  updateStyles()
}