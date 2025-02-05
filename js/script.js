const footerContainer = document.querySelector('footer');

const shareButton = document.querySelector('.share-button');
const popup = document.querySelector('.popup');

shareButton.addEventListener('click', (event) => {
    event.preventDefault();

    let screenWidth = Number(window.innerWidth);

    // openPopUp(screenWidth);
    popup.classList.toggle('hide');


    console.log('clicked');
    console.log('w: ' + window.innerWidth);
});

function openPopUp(screenWidth) {
    if(screenWidth < 880) {
        popup.classList.add('hide');


    } else {
        popup.classList.toggle('hide');
    }
}