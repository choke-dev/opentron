import { Message } from "discord.js";
import { CommandTypes, PrefixCommandModule } from "../../handler";

export = {
    name: "pong",
    aliases: ["poong"],
    disabled: true,
    type: CommandTypes.PrefixCommand,
    async execute(message: Message): Promise<void> {
        await message.reply("Ping!");
    }
} as PrefixCommandModule;