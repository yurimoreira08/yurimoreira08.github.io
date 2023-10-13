// Função para alternar a visibilidade de um elemento
function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  // Adiciona um evento de clique ao botão
  const toggleButton = document.getElementById('toggle-button');
  toggleButton.addEventListener('click', function () {
    toggleElementVisibility('element-to-toggle');
  });