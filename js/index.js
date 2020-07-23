const root = document.querySelector("#root")
const textTitle = 'Difficulty'


const title = Title`
        color: red;
        font-size: 2.5rem;
        letter-spacing: 1px;
        margin-bottom: 4rem;  
        ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
