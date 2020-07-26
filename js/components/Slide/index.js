const states = [true, false, false]

function showItems(stateItems) {
    const item = (pos) => Item`
    .item {
        list-style: none;    
        height: 50px;
        width: 50px;
        background-color: #EAB543;
        transition: transform 100ms linear;
        cursor: pointer;
    }

    ${`pos-${pos}`}
`
    
    const itemActive = (pos) => Item`
    .item.active {
        transform: scale(1.2)
    }

    ${`active pos-${pos}`}
`
    
    const items = stateItems.map((state, index) => {
        if (state) {
            return itemActive(index + 1)
        }
        return item(index + 1)
    })
    
    return items.join('')
}

function clearAction(action) {
    action.classList.remove('second')
    action.classList.remove('third')
}



function handleClick(event) {
    const { target } = event
    const allItems = document.querySelectorAll('.item')
    const action = document.querySelector('.action')
    
    allItems.forEach(item => item.classList.remove('active'))
    target.classList.add('active')

    clearAction(action)

    if (target.classList.contains('pos-1')) {
        action.classList.add('first')
        document.getElementById("bird").style.visibility = "hidden";
        document.getElementById("bird3").style.visibility = "hidden";
    }
    
    if (target.classList.contains('pos-2')) {
        action.classList.add('second')
        document.getElementById("bird").style.visibility = "visible";
        document.getElementById("bird3").style.visibility = "hidden";
    }

    if (target.classList.contains('pos-3')) {
        action.classList.add('third')
        document.getElementById("bird3").style.visibility = "visible";
    }

}

function createStyles(css) {
    const head = document.querySelector("head")
    const style = `
        <style>${css}</style>
    `

    head.insertAdjacentHTML('beforeend', style)
}

const Action = (css) => {
    createStyles(css)
    
    return (`<li class="action"></li>`)
}

const Item = (css, className) => {
    createStyles(css)
    
    return (`<li class="item ${className}" onclick="handleClick(event)"></li>`)
}

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const item = Item`
    list-style: none;
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--happy-color);
`

const action = Action`
    .action.first {
        list-style: none;
        height: 40px;
        width: 40px;
        background-color: #f8efba;
        position: absolute;
        left: 5px;
        transition: transform 300ms linear;
    }

    .action.second {
        transform: translateX(194px) rotate(360deg);
    }

    .action.third {
        transform: translateX(388px) rotate(720deg);
    }
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