// Open/Close Modal
const buyBtns = document.querySelectorAll('.js-by-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
for(const buyBtn of buyBtns)
{
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)


function showBuyTickets()
{
    modal.style.display = 'flex'
    // modal.classList.add('open')
}

function hideBuyTickets()
{
    modal.style.display = 'none'
    // modal.classList.remove('open')
}