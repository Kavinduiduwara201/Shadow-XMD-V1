const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ShadowXMD=lLNxHQqC#9kEOe93r8yh0Qgw7_XlD3nRiZpiVxNouXjJf9agXsXg",
  MONGODB: process.env.MONGODB || "mongodb://mongo:PuXQPOOttwxEypeYhNwzlnSMfJgVJSLM@switchyard.proxy.rlwy.net:11662",
  OWNER_NUM: process.env.OWNER_NUM || "94770051298",
};
