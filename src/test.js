let obj = {
    meat: 1,
    cheese: 2,
    salad: 1,
    bacon: 3
}

const tranfor = Object.keys(obj).map(inKey => {
    return [...Array(obj[inKey])].map((_, i) => {
        return `<li> ${inKey}</li>`
    })
})

// console.log(tranfor);