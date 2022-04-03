// you will need to toggle the visibility off and on with DOM selectors


/* getting elements */

const modalTrigger = document.querySelector(".modal-trigger");

const modalCloser = document.querySelector(".close-modal");

/* end getting elements */



/* event listeners */

function triggerModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = 'none';
}

/* end event listeners */




/* hooking up event listeners */

modalTrigger.addEventListener('click',triggerModal);

modalCloser.addEventListener('click',closeModal);

/* end hooking up event listeners */
