const root = document.querySelector("#root")

//function newElement(tag, content){
//    const title = `<${tag}>${content}</${tag}>`
//    root.insertAdjacentHTML("beforeend", title)

//}


//newElement("h1", "Difficulty")
const textTitle = 'Difficulty'

const title = Title`
    color: red;
    font-size: 30px;
    ${textTitle}
`

root.insertAdjacentHTML('beforeend', title)