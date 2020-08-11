const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll(".nav-links li");
    // Toggle nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle')
        console.log(burger)
            navLinks.forEach((link, index) => {
              if (link.style.animation) {
                link.style.animation = ``;
              } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                  index / 7 + 0.5
                }s`;
              }
            });
            // Burger Animation
    })

    // Amimate Links

}

navSlide();
