import Vue from 'vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const breakpointNames = ["sm", "md", "lg", "xl"]
const screens = breakpointNames.reduce((acc, cv) => {

  acc[cv] = parseInt(fullConfig.theme.screens[cv].slice(0, -2))
  return acc
}, {})
console.log({ screens })

const sm = val => val >= screens.sm && val <= screens.md
const md = val => val >= screens.md && val <= screens.lg
const lg = val => val >= screens.lg && val <= screens.xl
const xl = val => val >= screens.xl

const getBreakpoint = w => {
  if (sm(w)) return 'sm'
  else if (md(w)) return 'md'
  else if (lg(w)) return 'lg'
  else if (xl(w)) return 'xl'
  else return 'all'
}
const getBreakpointUp = w => {
  let rtn = breakpointNames.reduce((acc, cv) => {
    acc[cv] = w >= screens[cv]
    return acc
  }, {})
  console.log("rtn", rtn)
  return rtn
}
const debounce = function (func, wait) {
  var timeout
  return () => {
    const later = function () {
      timeout = null
    }
    const callNow = !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func()
  }
}
let breakpoints = {
  w: screens.sm,
  h: screens.sm,
  is: getBreakpoint(screens.sm),
  up: getBreakpointUp(screens.sm)
}
if (process.client) {
  breakpoints = Vue.observable({
    w: window.innerWidth,
    h: window.innerHeight,
    is: getBreakpoint(window.innerWidth),
    up: getBreakpointUp(window.innerWidth)
  })

  window.addEventListener(
    'resize',
    debounce(() => {
      breakpoints.w = window.innerWidth
      breakpoints.h = window.innerHeight
      breakpoints.is = getBreakpoint(window.innerWidth)
      breakpoints.up = getBreakpointUp(window.innerWidth)
    }, 1),
    false
  )
}


export default breakpoints