const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "Shadow XMD=ce0wiQjR#OPbk3Ewdo-2AbxWOm3jai4joFYi3v91v1xREMbLbScQ",
  MONGODB: process.env.MONGODB || "mongodb://mongo:PuXQPOOttwxEypeYhNwzlnSMfJgVJSLM@switchyard.proxy.rlwy.net:11662",
  OWNER_NUM: process.env.OWNER_NUM || "94764040298",
};
