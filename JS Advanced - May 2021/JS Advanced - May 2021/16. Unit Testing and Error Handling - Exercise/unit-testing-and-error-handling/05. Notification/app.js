function notify(message) {
  let notificationField = document.querySelector('#notification');
  notificationField.textContent = message;
  notificationField.style.display = 'block';

  notificationField.addEventListener('click', () => {
    notificationField.style.display = 'none';
  });
}