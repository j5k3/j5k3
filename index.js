import { Client } from "revolt.js";

const client = new Client();

client.on("ready", () => {
  console.log(`Bot is online as ${client.user.username}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

client.loginBot("mL5Ntiy3QqhVCxAbtUKzOC_0yqSVzVB8YDYTTMEuLQTsmGzizg-ihV2cRjVoCChB");