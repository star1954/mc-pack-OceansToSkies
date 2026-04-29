// [customrecipe] type=Shapeless 3x3 | out=minecraft:sugar_cane x3 | in=minecraft:bamboo,hexcasting:amethyst_dust
ServerEvents.recipes(event => {
  event.shapeless('3x minecraft:sugar_cane', [
    'minecraft:bamboo',
    'minecraft:bamboo',
    'minecraft:bamboo',
    'hexcasting:amethyst_dust'
  ])
})
