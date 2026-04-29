// [customrecipe] type=Shapeless 3x3 | out=minecraft:dirt x4 | in=minecraft:rotten_flesh,minecraft:sand,minecraft:bone_meal
ServerEvents.recipes(event => {
  event.shapeless('4x minecraft:dirt', [
    'minecraft:rotten_flesh',
    'minecraft:sand',
    'minecraft:sand',
    'minecraft:bone_meal'
  ])
})
