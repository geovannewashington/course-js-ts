const container = document.querySelector(".container");
const div = document.createElement("div");

const elements = [
    {tag: 'p', text: 'phrase 1'},
    {tag: 'div', text: 'phrase 2'},
    {tag: 'footer', text: 'phrase 3'},
    {tag: 'section', text: 'phrase 4'},
    {tag: 'h1', text: 'phrase 5'}
];

for (let i = 0; i < elements.length; i++) {
    const { tag, text } = elements[i];
    const tagCreated = document.createElement(tag);
    //tagCreated.textContent = `${text}`;
    const textCreated = document.createTextNode(text);

    tagCreated.appendChild(textCreated);
    div.appendChild(tagCreated); 
}

container.appendChild(div);
