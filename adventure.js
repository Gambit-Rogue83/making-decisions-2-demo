let name = 'Link'
let leftHand = null
let rightHand = null
let backpack = []

backpack.push('Stick')
backpack.push('Pot Lid')
backpack.push('Bow')
backpack.push('food')

console.log(backpack)

let weapon = backpack.shift() //removes from beginning of array
let shield = backpack.shift()

leftHand = shield
rightHand = weapon

console.log(`${name}, is off to save Hyrule with ${leftHand} and ${rightHand}
with nothing but ${backpack.length} items in his bag`)

rightHand = null
backpack.unshift('Sword') // adds to the beginning of the array
rightHand = 'Spear'

backpack.splice(2, 1, "crumbs") //adding/removing element at index in array
console.log(backpack)

backpack.splice(0, 1, 'Master Sword')
console.log(backpack)

leftHand = 'Shield of Hyrule'

for (i = 0; i < 3; i++) {
    backpack.push('food')
}
console.log(backpack)

rightHand = backpack.shift()
console.log(rightHand)
console.log(backpack)

for (i = 0; i < backpack.length; i++) {
    if(backpack[i] === 'food') {
        console.log(`${name} ate ${backpack[i]}`)
        backpack.splice(i, 1, "crumbs")
    }
   else {
    console.log(`${name} you can't eat ${backpack[i]}`)
}
}
console.log(backpack)

for (i = 0; i < backpack.length; i++) {
    if(backpack[i] === 'crumbs') {
        console.log(`${name} dumped the crumbs`)
        backpack.splice(i, 1, 'roses')
    }
}

console.log(backpack)

let gift = backpack.pop()
console.log(`${name} presents Zelda with ${gift}`)
