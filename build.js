let pkg = require( './package.json' );

let html = `
<html>
    <head>
        <title>${ pkg.name }</title>
    </head>
    <body>
        <p>${ pkg.name }</p>
        <p>${ pkg.version }</p>
    </body>
</html>
`

console.log( html );
