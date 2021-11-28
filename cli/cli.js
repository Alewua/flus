#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const res = path.resolve;
const exist = fs.existsSync;

if (exist(res("flus.css")))
return console.log(
  chalk.red(`${symbols.error} Please delete the "flus.css" file`)
);

  fs.readFile(
    path.join(__dirname, "..", "css", "flus.css"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("flus.css"), data, (err) =>
        console.log(err)
      );
      console.log(`ur css is ready`);
    }
  );
