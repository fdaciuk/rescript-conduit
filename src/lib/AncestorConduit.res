module Config = Ancestor.Make({
  type breakpoints<'a> = [
    | #xxs('a)
    | #xs('a)
    | #sm('a)
    | #md('a)
    | #lg('a)
    | #xl('a)
  ]

  let spacing = 8.0

  let radius = 8.0

  let sizeByBreakpoints = values =>
    switch values {
    | #xxs(_) => 0
    | #xs(_) => 360
    | #sm(_) => 475
    | #md(_) => 840
    | #lg(_) => 1280
    | #xl(_) => 1440
    }

  let unboxBreakpointValue = values =>
    switch values {
    | #xxs(v) => v
    | #xs(v) => v
    | #sm(v) => v
    | #md(v) => v
    | #lg(v) => v
    | #xl(v) => v
    }

  let css = Ancestor_Emotion.css
})

module Base = Config.Base
module Box = Config.Box
module Text = Config.Typography
module Grid = Config.Grid

let xxs = v => #xxs(v)
let xs = v => #xs(v)
let sm = v => #sm(v)
let md = v => #md(v)
let lg = v => #lg(v)
let xl = v => #xl(v)
