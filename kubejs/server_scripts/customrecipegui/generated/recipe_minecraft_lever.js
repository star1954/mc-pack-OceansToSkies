// [customrecipe] type=Shaped 3x3 | out=minecraft:lever | in=minecraft:stick,minecraft:cobbled_deepslate
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:lever', 1),
    [
      'A  ',
      'B  ',
      '   '
    ],
    {
      A: 'minecraft:stick',
      B: 'minecraft:cobbled_deepslate'
    }
  )
})
