// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "postcss-salad": {
      "browsers": ["ie > 8", "last 2 versions"],
      "features": {
        "bem": {
          "shortcuts": {
            "component": "b",
            "modifier": "m",
            "descendent": "e"
          },
          "separators": {
            "descendent": "__",
            "modifier": "--"
          }
        }
      }
    }
  }
}
