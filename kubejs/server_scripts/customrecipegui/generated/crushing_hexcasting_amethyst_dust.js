// [customrecipe] type=Crushing | out=4x hexcasting:amethyst_dust;2x hexcasting:amethyst_dust@50% | in=minecraft:amethyst_shard | time=200
ServerEvents.recipes(event => {
  event.recipes.create.crushing(
    [
      Item.of('hexcasting:amethyst_dust', 4),
      CreateItem.of(Item.of('hexcasting:amethyst_dust', 2), 0.50)
    ],
    'minecraft:amethyst_shard'
  ).processingTime(200)
})
