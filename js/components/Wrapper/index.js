const pathGueio = 'images/gueio.png'

const gueio = Character(
            'width: 15%;',
            pathGueio
)

const WrapperCharacters = (css, children) => (`
        <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${gueio}
`

