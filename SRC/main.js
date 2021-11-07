misRedes = [
    {name : 'Twitter', url: 'https://twitter.com/frangardev'},
    {name : 'Instagram', url: 'https://instagram.com/frangardev'},
    {name : 'GitHub', url: 'https://github.com/frangardev'},
    {name : 'Linkedin', url: 'https://www.linkedin.com/in/frangardev/'},
]

redesConteiner = document.getElementById('redes')

nodes = []
misRedes.forEach(({name, url}) => {
    const element = `<li class="redes__li"><a href="${url}" target="_blank" class="button"><span class="icon"></span>${name}</a></li>`

    nodes.push(element)
})

redesConteiner.innerHTML = nodes