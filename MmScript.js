let btn = document.getElementById('btn'); 
let output = document.getElementById('output'); 
let joke = [ 
    'I went to the aquarium this weekend, but I didn’t stay long. There’s something fishy about that place' , 
'What do you call a sheep who can sing and dance? Lady Ba Ba.' , 'Why can`t dinosaurs clap their hands? Because they`re extinct.' , 
'I was going to try an all almond diet, but that`s just nuts.' , 'How many storm troopers does it take to change a lightbulb? None, because they are all on the dark side.', 
'Why can`t you trust an atom? Because they make up everything.' , 'Stop looking for the perfect match…use a lighter.' , 
'Want to hear a joke about construction? I`m still working on it.' , 'RIP boiled water—you will be mist.' , 
' I`m so good at sleeping, I can do it with my eyes closed.'
]; 

btn.addEventListener('click' , function() { 
    const randomJoke= joke[Math.floor(Math.random() * joke.length)] 
    output.innerHTML = randomJoke;
})