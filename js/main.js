const section =  document.querySelectorAll('.section');

section.forEach(section => {
    ScrollTrigger.create({
        trigger:section,
        start:'top top',
        pin:true,
        pinSpacing:false,
    });
});
