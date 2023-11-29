const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
const h1 = document.querySelector('h1');

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        h1.textContent = '';
        h1.classList.remove('border');

        setTimeout(()=>{
            e.target.value = '';
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect(){
    const times = 100;
    
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHightlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
            h1.textContent = `${randomTag.textContent} has been selected!`;
            h1.classList.add('border');
        }, 100)
    }, times * 100)
    
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight');
}

function unHightlightTag(tag){
    tag.classList.remove('highlight');
}