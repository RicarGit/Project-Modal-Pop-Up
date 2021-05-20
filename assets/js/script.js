const popupWrapper = document.querySelector('.popup-wrapper')
const button = document.querySelector('button')
const popupClose = document.querySelector('.popup-close')

const showPopup = () => popupWrapper.style.display = 'block'
const closePopup = () => popupWrapper.style.display = 'none'

const closePopupBasedOnTargetClasses = event => {
  const targetFirstClassElement = event.target.classList[0]
  const classesToClose = ['popup-close', 'popup-wrapper', 'popup-link']
  const classIncluded = classesToClose.includes(targetFirstClassElement)

  if (classIncluded) {
    closePopup()
  }
}

button.addEventListener('click', showPopup)
popupWrapper.addEventListener('click', closePopupBasedOnTargetClasses)