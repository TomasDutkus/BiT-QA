let mix = require("laravel-mix");

mix.js("src/form.js", "public").copy("src/form.html", "public");