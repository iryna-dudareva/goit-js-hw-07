const ulElems = document.querySelectorAll('.js-item');

console.log(`Number of categories: ${ulElems.length}`);

ulElems.forEach((elem) => { 
    const category = elem.querySelector('h2').textContent;
    const categoriesCount = elem.querySelector('ul').children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${categoriesCount}`);
})