const footerContainer = document.querySelector('footer');
const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    footerContainer.classList.toggle('clicked');
});