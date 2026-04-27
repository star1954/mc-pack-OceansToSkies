// [customrecipe] type=Crushing | out=2x minecraft:amethyst_shard;minecraft:amethyst_shard@50% | in=hexcasting:charged_amethyst | time=200
ServerEvents.recipes(event => {
  event.recipes.create.crushing(
    [
      Item.of('minecraft:amethyst_shard', 2),
      CreateItem.of('minecraft:amethyst_shard', 0.50)
    ],
    'hexcasting:charged_amethyst'
  ).processingTime(200)
})
