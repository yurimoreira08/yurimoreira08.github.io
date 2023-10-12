// Função para alternar a visibilidade de um elemento
function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  }

  // Adiciona um evento de clique ao botão
  const toggleButton = document.getElementById('toggle-button');
  toggleButton.addEventListener('click', function () {
    toggleElementVisibility('element-to-toggle');
  });

  const toggleButton2 = document.getElementById('toggle-button2');
  toggleButton2.addEventListener('click', function () {
    toggleElementVisibility('element-to-toggle2');
  });

  const toggleButton3 = document.getElementById('toggle-button3');
  toggleButton3.addEventListener('click', function () {
    toggleElementVisibility('element-to-toggle3');
  });

  const toggleButton4 = document.getElementById('toggle-button4');
  toggleButton4.addEventListener('click', function () {
    toggleElementVisibility('element-to-toggle4');
  });

  const toggleButton5 = document.getElementById('toggle-button5');
  toggleButton5.addEventListener('click', function () {
    toggleElementVisibility('element-to-toggle5');
  });
