
import springRollsImg from './spring_rolls.jpg';
import misoSoupImg from './miso_soup.jpg';
import ramenImg from './fantasy_ramen.jpg';
import duckImg from './imperial_duck.jpg';
import mochiImg from './mochi_mix.jpg';
import matchaImg from './matcha_cake.jpg';

export function loadMenu(){
    const content=document.getElementById('content');

    const container=document.createElement('div');
    container.classList.add('menu-container');

    const title=document.createElement('h1');
    title.textContent = "Our Menu";
    container.appendChild(title);

    const grid=document.createElement('div');
    grid.classList.add('menu-grid');

    const sectionStarters=document.createElement('h2');
    sectionStarters.classList.add('section');
    sectionStarters.textContent="Starters";

    const sectionMain=document.createElement('h2');
    sectionMain.classList.add('section');
    sectionMain.textContent="Main";

    const sectionDessert=document.createElement('h2');
    sectionDessert.classList.add('section');
    sectionDessert.textContent="Desserts";

    const createMenuItem = (name, price ,image)=>{
        const item=document.createElement('div');
        item.classList.add('menu-item');
        
        const itemImg=document.createElement('img');
        itemImg.src=image;
        itemImg.alt=name;
        itemImg.classList.add('menu-item-image');

        const itemName=document.createElement('h3');
        itemName.textContent= name;

        const itemPrice=document.createElement('p')
        itemPrice.textContent=price;

        item.append(itemImg, itemName, itemPrice);

        return item;
    };

    //starters
    grid.appendChild(sectionStarters);
    grid.appendChild(createMenuItem("Spring Rolls", "6$", springRollsImg));
    grid.appendChild(createMenuItem("Miso Soup", "5$", misoSoupImg));

    //main dish
    grid.appendChild(sectionMain);
    grid.appendChild(createMenuItem("Fantasy Ramen", "14$", ramenImg));
    grid.appendChild(createMenuItem("Imperial Duck", "18$", duckImg));

    //dessert
    grid.appendChild(sectionDessert);
    grid.appendChild(createMenuItem("Mochi Mix", "7$", mochiImg));
    grid.appendChild(createMenuItem("Matcha Cake", "8$", matchaImg));

    container.appendChild(grid);
    content.appendChild(container);
}