const states = [true, false, false]

function showItems(stateItems) {
    const items = stateItems.map(state =>{
        if (state) {
            return itemActive
        }
        return item
    })
    return items.join('')
}

function handleClick() {
    console.log('click')
}

const Action = (css) => (
    `<li style="${css}"></li>`
)

const Item = (css) => (
    `<li style="${css}" onclick="handleClick()"></li>`
)

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const action = Action`
    list-style: none;
    height: 40px;
    width: 40px;
    background-color: #f8efba;
    position: absolute;
    left: 5px
`

const item = Item`
    list-style: none;    
    height: 50px;
    width: 50px;
    background-color: #EAB543;
`

const itemActive = Item`
    list-style: none;    
    height: 50px;
    width: 50px;
    background-color: #EAB543;
`

const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    height: 10px;
    background-color: #EAB543;
    margin-top: auto;
    ${showItems(states) + action}
`


