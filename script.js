const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#background",
        start: "top top",
        scrub: 1
    }
});

const elem = gsap.utils.toArray('.parallax').forEach(elem => {
    const depth = elem.dataset.depth;
    const shifting = -(depth * (elem.offsetHeight*1.2));
    tl.to(elem, {
        y: shifting,
        ease: "none"
    }, 0)
    .to('#overlay',{
        opacity: 0,
        ease: "none"
    }, 0)
    
});

const t12 = gsap.timeline({
    scrollTrigger: {
        trigger: "#below-part",
        start: "top center",
        toggleActions: 'play pause resume reverse'
    }
});
t12.from('.blocks',{
    stagger: .5,
    opacity: 0,
    delay: .5,
    duration: 1,
    ease: 'Expo.easeInOut'
})
.from('.block .img',{
    stagger: .1,
    opacity: 0,
    duration: 1.5,
    ease: 'Expo.easeInOut'
})
.from('#below-part-para p',{
    y: 10,
    opacity: 0,
    duration: 1,
    ease: 'Expo.easeInOut'
})