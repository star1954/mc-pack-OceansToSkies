// [customrecipe] type=Shapeless 3x3 | out=apotheosis:gem_dust x24 | in=relics:roller_skate
ServerEvents.recipes(event => {
  event.shapeless('24x apotheosis:gem_dust', [
    '#relics:relic'
  ])
})
