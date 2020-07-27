function Character(css, path){
    
    return`
        <img id="bird" style="${css + "visibility: hidden"}" src="${path}" />
        <img id="bird2" style="${css}" src="${path}" />
        <img id="bird3" style="${css + "visibility: hidden"}" src="${path}" />
    `
    
}
