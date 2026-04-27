// [customrecipe] type=Shaped 3x3 | out=minecraft:elytra | in=minecraft:phantom_membrane,minecraft:string,minecraft:stick
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:elytra', 1),
    [
      'ABA',
      'ACA',
      'A A'
    ],
    {
      A: 'minecraft:phantom_membrane',
      B: 'minecraft:string',
      C: 'minecraft:stick'
    }
  )
})
