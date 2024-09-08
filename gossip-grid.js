import { gossips } from './gossip-grid.data.js';

// Function to create a gossip card
const createGossipCard = (gossipText) => {
  const gossipCard = document.createElement('div');
  gossipCard.classList.add('gossip');

  const textArea = document.createElement('textarea');
  textArea.value = gossipText;
  gossipCard.appendChild(textArea);

  return gossipCard;
};

// Function to create the form card
const createFormCard = () => {
  const formCard = document.createElement('div');
  formCard.classList.add('gossip');

  const textArea = document.createElement('textarea');
  textArea.placeholder = 'Share your gossip...';

  const button = document.createElement('button');
  button.textContent = 'Share gossip!';

  button.addEventListener('click', () => {
    const newGossip = textArea.value;
    if (newGossip.trim()) {
      addNewGossip(newGossip);
      textArea.value = ''; // Clear the textarea after submitting
    }
  });

  formCard.appendChild(textArea);
  formCard.appendChild(button);

  return formCard;
};

// Function to add new gossip to the list after the form
const addNewGossip = (newGossip) => {
  const newGossipCard = createGossipCard(newGossip);

  // Insert the new gossip card after the form (which is the first gossip element)
  const formCard = document.querySelector('.gossip');
  formCard.insertAdjacentElement('afterend', newGossipCard);
};

// Function to render the grid
export const grid = () => {
  const body = document.body;

  // Create and add the form card as the first gossip card
  const formCard = createFormCard();
  body.appendChild(formCard);

  // Create and add all the gossips from the list
  gossips.forEach(gossipText => {
    const gossipCard = createGossipCard(gossipText);
    body.appendChild(gossipCard);
  });

  // Create range inputs
  const rangesContainer = document.createElement('div');
  rangesContainer.classList.add('ranges');

  // Create individual range input elements
  const widthRange = createRangeInput('width', 'Width', 200, 800, (value) => {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.width = `${value}px`;
    });
  });

  const fontSizeRange = createRangeInput('fontSize', 'Font Size', 20, 40, (value) => {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.fontSize = `${value}px`;
    });
  });

  const backgroundRange = createRangeInput('background', 'Background', 20, 75, (value) => {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.backgroundColor = `hsl(280, 50%, ${value}%)`;
    });
  });

  // Append the ranges to the container
  rangesContainer.appendChild(widthRange);
  rangesContainer.appendChild(fontSizeRange);
  rangesContainer.appendChild(backgroundRange);

  // Append the ranges container to the body
  body.appendChild(rangesContainer);
};

// Helper function to create a range input
const createRangeInput = (id, label, min, max, callback) => {
  const rangeDiv = document.createElement('div');
  rangeDiv.classList.add('range');

  const labelElem = document.createElement('label');
  labelElem.setAttribute('for', id);
  labelElem.textContent = label;

  const rangeInput = document.createElement('input');
  rangeInput.type = 'range';
  rangeInput.id = id;
  rangeInput.min = min;
  rangeInput.max = max;

  const valueSpan = document.createElement('span');
  valueSpan.textContent = min;

  // Update the span and apply changes when range input is used
  rangeInput.addEventListener('input', () => {
    valueSpan.textContent = rangeInput.value;
    callback(rangeInput.value);
  });

  rangeDiv.appendChild(labelElem);
  rangeDiv.appendChild(rangeInput);
  rangeDiv.appendChild(valueSpan);

  return rangeDiv;
};
