const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Shadow XMD=5PkFTSKZ#JN9xap1t0Oaoz_D_iCnCqQyeqh4nXh3aBosowY1KurM",
  MONGODB: process.env.MONGODB || "mongodb://mongo:PuXQPOOttwxEypeYhNwzlnSMfJgVJSLM@switchyard.proxy.rlwy.net:11662",
  OWNER_NUM: process.env.OWNER_NUM || "94770051298",
};
