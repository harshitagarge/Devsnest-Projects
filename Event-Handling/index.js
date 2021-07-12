
var inputValue = document.querySelector('.input');
window.onload = () => {
setTimeout(() => {
    document.querySelector('body').style.backgroundColor = "#F5ABC9";
}, 1500);
}

document.querySelector('.btn').addEventListener('click', ()=> {
    document.querySelector('.text1').innerHTML = `Your text '${inputValue.value}' has been Approved!`;
    document.querySelector('.div1').style.backgroundColor = "#C9E4C5";
    inputValue.value="";
});

document.querySelector('.text2').addEventListener('mouseover', ()=> {
    document.querySelector('.div2').style.backgroundColor = "#FFEEDB";
    document.querySelector('.text2').innerHTML = "Good Job! Color has been changed.";
})

document.querySelector('.text3').addEventListener('mouseover', ()=> {
    document.querySelector('.div3').style.backgroundColor = "#9FE6A0";
    document.querySelector('.text3').innerHTML = "Good Job! Color has been changed.";
})

document.addEventListener('scroll', ()=> {
    document.querySelector('.text4').innerHTML = "I have been scrolled!";
    document.querySelector('.div4').style.backgroundColor = "yellow";

})

document.querySelector('.dbtn').addEventListener('dblclick', ()=> {
    document.querySelector('.text5').innerHTML = "I have been double Clicked!";
    document.querySelector('.div5').style.backgroundColor = "#A2DBFA";
})
