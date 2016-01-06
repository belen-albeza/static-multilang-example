# Static multi-language site

This is an example of a multi-language static site built with [Metalsmith](http://metalsmith.io)

You can read the companion blog posts explaining how it works ([part 1](http://www.belenalbeza.com/building-a-static-multi-language-site-with-metalsmith-part-i/) and [part 2](http://www.belenalbeza.com/building-a-static-multi-language-site-with-metalsmith-part-ii/))

## How to build it

Install dependencies with npm and execute `index.js`:

```
npm install
node index.js
```

It will build the site in a `dist` folder. In order for internal links to work, you need to run it from a web server:

```
npm install -g http-server
http-server dist
```

Enjoy!
