
import mainImg from './restaurant.jpg';

export function loadHome(){
    const content=document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('home-container');

    const headLine=document.createElement('h1');
    headLine.textContent="Welcome to FANTASY KITCHEN";

    const cover=document.createElement('div');
    cover.classList.add('mainImg');
    cover.style.backgroundImage=`url(${mainImg})`;

    const description=document.createElement('h2');
    description.classList.add('description')
    description.textContent="Best imaginary restaurant in town!"
   
    cover.appendChild(description);
    container.append(headLine, cover);
    content.appendChild(container);
}

