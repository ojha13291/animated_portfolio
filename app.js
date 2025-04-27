const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const hoverSign = document.querySelector('.hover-sign');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icons');
const close = document.querySelector('.close-icon');

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
    video.addEventListener('mouseover', function () {
        video.play();
        hoverSign.classList.add('active')
    })
    video.addEventListener('mouseout', function () {
        video.pause();
        video.currentTime = 0;
        hoverSign.classList.remove('active')
    })
})

menu.addEventListener('click', function () {
    sideBar.classList.remove('close-sidebar')
    sideBar.classList.add('open-sidebar')
})

close.addEventListener('click', function () {
    sideBar.classList.remove('open-sidebar')
    sideBar.classList.add('close-sidebar')
})


const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
    scrollDown.addEventListener('click', function () {
        const viewportHeight = window.innerHeight;
        window.scrollTo({
            top: viewportHeight,
            behavior: 'smooth'
        });
    });
}


const navLinks = document.querySelectorAll('header ul li a, .sidebar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);


        if (targetId === 'home') {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (targetId === 'about') {

            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } else if (targetId === 'skills') {

            const skillsSection = document.querySelector('.skills-section');
            if (skillsSection) {
                const offsetTop = skillsSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } else if (targetId === 'projects') {

            const projectsSection = document.querySelector('.projects-section');
            if (projectsSection) {
                const offsetTop = projectsSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }


        if (sideBar.classList.contains('open-sidebar')) {
            sideBar.classList.remove('open-sidebar');
            sideBar.classList.add('close-sidebar');
        }
    });
});