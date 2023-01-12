import Swal from 'sweetalert2';

export const alertPopup = (title = '', icon = 'success', position = 'center', showConfirmButton = false, timer = 1750) => {
  Swal.fire({
    position,
    icon,
    title,
    showConfirmButton,
    timer
  })
}