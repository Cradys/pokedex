import { createInterface } from "node:readline"
import { stdin, stdout } from "node:process"
import { getCommands } from "./commands.js"

export function cleanInput(input: string): string[] {
  return input
  .toLowerCase()
  .trim()
  .split(" ")
  .filter((word) => word !== "")
}

export function startREPL(): void {
  const repl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex >"
  })


  repl.prompt()


  repl.on("line", (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      repl.prompt();
      return;
    }

    const commandName = words[0];

    const commands = getCommands();
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      repl.prompt();
      return;
    }

    try {
      cmd.callback(commands);
    } catch (e) {
      console.log(e);
    }

    repl.prompt();
  })
}


