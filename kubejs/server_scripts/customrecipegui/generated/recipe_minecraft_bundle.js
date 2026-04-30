// [customrecipe] type=Shaped 3x3 | out=minecraft:bundle | in=minecraft:string,minecraft:leather
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:bundle', 1),
    [
      ' A ',
      ' B ',
      '   '
    ],
    {
      A: 'minecraft:string',
      B: 'minecraft:leather'
    }
  )
})
