const fs = require("fs");

const cert = fs.readFileSync("./localhost.cert");
const key = fs.readFileSync("./localhost.key");

module.exports = {
	devOptions: {
		secure: { cert, key }
	}
};
