// [customrecipe] type=Milling | out=4x hexcasting:amethyst_dust | in=minecraft:amethyst_shard
ServerEvents.recipes(event => {
  event.recipes.create.milling(
    [
      Item.of('hexcasting:amethyst_dust', 4)
    ],
    'minecraft:amethyst_shard'
  )
})
