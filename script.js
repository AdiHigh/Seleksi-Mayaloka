const search = document.querySelector('.search')
const btn =  document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})

// Smooth scrolling for nav links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});