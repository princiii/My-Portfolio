window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

document.querySelectorAll('.Project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.querySelector('.project-details').style.opacity = '1';
    });

    project.addEventListener('mouseout', () => {
        project.querySelector('.project-details').style.opacity = '0';
    });
});
