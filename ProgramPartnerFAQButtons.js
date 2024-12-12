(function() {
  function createButtons() {
    const buttonContainer = document.getElementById('faqTopicButtons');
    buttonContainer.style.backgroundColor = "transparent"; // Ensure container background is transparent
    
    const faqTopics = document.querySelectorAll('.ControlZone H3');
    
    if (faqTopics.length === 0) {
      console.log('No FAQ topics found. Retrying...');
      return false;
    }
    
    buttonContainer.innerHTML = '';
    
    faqTopics.forEach((topicElement, index) => {
      const title = topicElement.textContent.trim();
      const button = document.createElement('button');
      button.textContent = title;
      button.style.cssText = `
        margin: 4px;
        padding: 10px 16px;
        background-color: #2556a1;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      `;
      button.onmouseover = function() {
        this.style.backgroundColor = '#46b6f7';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      };
      button.onmouseout = function() {
        this.style.backgroundColor = '#2556a1';
        this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      };
      button.onclick = function() {
        topicElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      buttonContainer.appendChild(button);
    });
    
    return true;
  }

  function initializeTopicNavigation() {
    if (!createButtons()) {
      setTimeout(initializeTopicNavigation, 1000);
    } else {
      setInterval(createButtons, 5000);
    }
  }

  if (document.readyState === 'complete') {
    initializeTopicNavigation();
  } else {
    window.addEventListener('load', initializeTopicNavigation);
  }
})();