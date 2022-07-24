const args = process.argv.slice(2);
if(args.length!==1) {
    console.error("Incorrect number of arguments");
    process.exit(1);
}

const fs = require("fs");
const pkg = require("./package.json");
pkg.version=args[0];

fs.writeFileSync("./package.json", JSON.stringify(pkg));
