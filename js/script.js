const footerContainer = document.querySelector('footer');

const shareButton = footerContainer.querySelector('.share-button');
const popup = footerContainer.querySelector('.popup');

shareButton.addEventListener('click', (event) => {
    event.preventDefault();
    popup.classList.toggle('hide');
});