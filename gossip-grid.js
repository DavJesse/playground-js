import { gossips } from './gossip-grid.data.js';

export function grid() {
  const body = document.querySelector('body');

  const rangesDiv = document.createElement('div');
  rangesDiv.classList.add('ranges');
  
  const createRangeInput = (id, labelText, min, max, value) => {
    const rangeWrapper = document.createElement('div');
    rangeWrapper.classList.add('range');
    
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;
    
    const input = document.createElement('input');
    input.type = 'range';
    input.id = id;
    input.min = min;
    input.max = max;
    input.value = value;
    
    const span = document.createElement('span');
    span.textContent = value;

    input.addEventListener('input', () => {
      span.textContent = input.value;
      updateCardStyles();
    });
    
    rangeWrapper.append(label, input, span);
    return rangeWrapper;
  };

  rangesDiv.append(
    createRangeInput('width', 'Width', 200, 800, 250),
    createRangeInput('fontSize', 'Font Size', 20, 40, 20),
    createRangeInput('background', 'Background', 20, 75, 50)
  );

  body.appendChild(rangesDiv);

  const createGossipCard = (gossipText) => {
    const gossipDiv = document.createElement('div');
    gossipDiv.classList.add('gossip');
    
    const textarea = document.createElement('textarea');
    textarea.readOnly = true;
    textarea.textContent = gossipText;
    
    gossipDiv.appendChild(textarea);
    return gossipDiv;
  };

  const createFormCard = () => {
    const formDiv = document.createElement('div');
    formDiv.classList.add('gossip');
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = "Share your gossip...";
    
    const button = document.createElement('button');
    button.textContent = 'Share gossip!';
    
    button.addEventListener('click', () => {
      const newGossip = textarea.value.trim();
      if (newGossip) {
        addNewGossip(newGossip);
        textarea.value = '';
      }
    });
    
    formDiv.append(textarea, button);
    return formDiv;
  };

  body.appendChild(createFormCard());

  gossips.forEach(gossip => {
    body.appendChild(createGossipCard(gossip));
  });

  const addNewGossip = (newGossip) => {
    body.appendChild(createGossipCard(newGossip));
  };

  const updateCardStyles = () => {
    const widthValue = document.getElementById('width').value;
    const fontSizeValue = document.getElementById('fontSize').value;
    const backgroundValue = document.getElementById('background').value;
    
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.width = `${widthValue}px`;
      card.style.fontSize = `${fontSizeValue}px`;
      card.style.background = `hsl(280, 50%, ${backgroundValue}%)`;
    });
  };

  updateCardStyles();
}
