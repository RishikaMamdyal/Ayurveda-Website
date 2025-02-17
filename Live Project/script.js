var icon = document.querySelector('.header i')
var links = document.querySelector('.header .links')

icon.addEventListener('click',()=>{
    if(icon.classList.contains('fa-bars')){
        links.classList.remove('links')
        links.classList.add('links-res')
        icon.classList.remove("fa-bars")
        icon.style.transform = 'rotate(180deg)'
        icon.classList.add("fa-xmark")
    }
    else{
        links.classList.remove('links-res')
        links.classList.add('links')
        icon.classList.remove("fa-xmark")
        icon.style.transform = 'rotate(0deg)'
        icon.classList.add("fa-bars")
    } 
})

var anchors = document.querySelectorAll('.header a')
anchors.forEach((item) =>{
    item.addEventListener('click',()=>{
        links.classList.remove('links-res')
        links.classList.add('links')
        icon.classList.remove("fa-xmark")
        icon.style.transform = 'rotate(0deg)'
        icon.classList.add("fa-bars")
    })
})

gsap.from('h2',{
    opacity:0,
    x:-100,
    stagger:0.2,
    duration:1
})

gsap.from('a',{
    opacity:0,
    x:-100,
    stagger:0.2,
    duration:1.6
})

gsap.from('input,button',{
    opacity:0,
    x:60,
    stagger:0.2,
    duration:1
})

gsap.from('.home .home-bg-part-1',{
    y:-830,
    delay:0.5,
    duration:1
})
gsap.from('.home .home-bg-part-2',{
    y:830,
    delay:0.5,
    duration:1
})

var h1Element = document.querySelector('.home .title h1')
var h1Text = h1Element.textContent
console.log(h1Text)

var splitedText = h1Text.split('')
console.log(splitedText) //Array

var updatedText=''
splitedText.forEach((ch,index)=>{
    updatedText += `<span><font>${ch}</font></span>`
})
h1Element.innerHTML=updatedText

gsap.from('.home .title h1 span',{
    y:100,
    opacity:0,
    delay:1.4,
    duration:0.3,
    stagger:0.1
})

gsap.from('.about h1',{
    y:100,
    // duration:0.3,
    opacity:0.2,
    scrollTrigger:{
        trigger:'.about h1',
        scroller:'body',
        start:'top 50%',
        end:'top 40%',
        scrub:5,
        // markers:true
    } 
})

gsap.from('.about .about-container .about-section-1',{
    x:-700,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.about .about-container .about-section-1',
        scroller:'body',
        start:'top 90%',
        end:'top 80%',
        scrub:5,
        // markers:true
    } 
})

gsap.from('.about .about-container .about-section-2',{
    x:700,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.about .about-container .about-section-2',
        scroller:'body',
        start:'top 90%',
        end:'top 80%',
        scrub:5,
        // markers:true
    } 
})

gsap.from('#task',{
    opacity:0,
    x:200,
    delay:0.8,
    duration:1
})
var h1Element=document.querySelector('h1')
var h1Text=h1Element.textContent

var splittedText=h1Text.split('')
var half=splittedText.length/2

var updatedText=''
splittedText.forEach((ch,index)=>{
    if(index<half){
        updatedText+=`<span class='first'>${ch}</span>`
    }else{
        updatedText+=`<span class='second'>${ch}</span>`
    }
    
})
h1Element.innerHTML=updatedText

gsap.from('h1 .first',{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:0.1
})
gsap.from('h1 .second',{
    y:100,
    opacity:0,
    duration:0.3,
    stagger:-0.1
})