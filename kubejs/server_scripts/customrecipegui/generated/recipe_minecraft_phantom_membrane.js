// [customrecipe] type=Shaped 3x3 | out=minecraft:phantom_membrane | in=minecraft:stick,minecraft:paper
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:phantom_membrane', 1),
    [
      'AB ',
      'BA ',
      '   '
    ],
    {
      A: 'minecraft:stick',
      B: 'minecraft:paper'
    }
  )
})
