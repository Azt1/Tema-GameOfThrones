let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.casas');
list.forEach(elements =>{
    elements.addEventListener('mouseenter', function
    (event){
        let color = event.target.getAttribute
        ('data-color');
        bg.style.backgroundColor = color;
    })  
})

VanillaTilt.init(document.querySelectorAll
    (".sci li a"),{
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 0,
    });