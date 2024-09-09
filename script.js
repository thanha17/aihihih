changeColor = () => {
  let heart_icon = document. querySelector('.heart path')
  let heart_count = document.querySelector('.heart-count span')
  if(heart_icon.style.fill==='red'){
    heart_icon.style.fill='black';
    let count = parseInt(heart_count.textContent) - 1;
    heart_count.textContent= count.toString();}
  else{
    heart_icon.style.fill='red';
    let count = parseInt(heart_count.textContent) + 1;
    heart_count.textContent= count.toString();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.heart-icon svg path').addEventListener('click', changeColor);
});