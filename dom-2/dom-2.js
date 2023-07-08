
const text = document.querySelector('.text')

const btn = document.querySelector('.btn')

text.style.color = 'red'
text.style.padding = '50px 0'
text.style.textAlign = 'center'

btn.addEventListener('click',()=>{
    btn.style.color ="black"
    text.style.rotate = "360deg"
    text.style.transition = ".40000000s"
    console.log('HELLO DOM')
})
text.addEventListener('mouseleave',()=>{
    text.style.color ='black'
    text.style.rotate = '0deg'
    text.style.transition ='.4s'
})
text.addEventListener('mouseup',()=>{
    text.style.color = 'red'
})



