const env = require('./babel-config')

module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["transform-define", env]
  ]
} 