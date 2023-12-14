document.addEventListener("DOMContentLoaded", function () {
    const title = 'FAQs';
    document.getElementById('dynamicTitle').innerText = title;

    const faqItemsData = [
      {
        question: 'Por que você fez esse projeto?',
        answer: 'Fiz esse projeto para mostrar um pouco do que eu sei, e para treinar minhas habilidades, assim melhorando e aprimorando meus conhecimentos.'
      },
      {
        question: 'Como eu entro em contato com você?',
        answer: 'Para entrar em contato comigo é bem simples, basta mandar uma mensagem no meu linkedin <a href="https://www.linkedin.com/in/marcos-dias-879a88221/">Marcos Dias</a>.'
      },
      {
        question: 'Você tem um portfólio?',
        answer: 'Sei que um portfólio é de extrema importância, mas no momento estou desenvolvendo o meu. Por enquanto, você pode conferir alguns dos meus trabalhos pelo <a href="https://github.com/Vinnixz">Github</a>.'
      }
    ];

    const faqList = document.getElementById('faq-list');

    faqItemsData.forEach(item => {
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');

      const titleAnswer = document.createElement('div');
      titleAnswer.classList.add('title-answer');

      const questionHeader = document.createElement('h2');
      questionHeader.innerText = item.question;

      const toggleIcon = document.createElement('div');
      toggleIcon.classList.add('toggle-icon');
      toggleIcon.onclick = function () {
        toggleAnswer(faqItem);
      };

      const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgIcon.setAttribute('width', '30');
      svgIcon.setAttribute('height', '31');
      svgIcon.setAttribute('fill', 'none');
      svgIcon.setAttribute('viewBox', '0 0 30 31');

      const pathIcon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathIcon.setAttribute('fill', '#AD28EB');
      pathIcon.setAttribute('d', 'M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z');

      const faqAnswer = document.createElement('p');
      faqAnswer.classList.add('faq-answer');
      faqAnswer.innerHTML = item.answer;

      svgIcon.appendChild(pathIcon);
      toggleIcon.appendChild(svgIcon);
      titleAnswer.appendChild(questionHeader);
      titleAnswer.appendChild(toggleIcon);
      faqItem.appendChild(titleAnswer);
      faqItem.appendChild(faqAnswer);
      faqList.appendChild(faqItem);
    });

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((faqItem) => {
      const toggleIcon = faqItem.querySelector('.toggle-icon');
      const answer = faqItem.querySelector('.faq-answer');

      faqItem.addEventListener('click', function () {
        this.classList.toggle('active');
        answer.classList.toggle('active');
        toggleIcon.classList.toggle('active');
      });
    });
  });