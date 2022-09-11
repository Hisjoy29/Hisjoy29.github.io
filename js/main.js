const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting)
    {
      entry.target.classList.add('fadeOut')
    }
    else
    {
      entry.target.classList.remove('fadeOut')
    }
  })
})

const fadeInDivs = document.querySelectorAll(".fadeIn")

fadeInDivs.forEach(fade => observer.observe(fade))