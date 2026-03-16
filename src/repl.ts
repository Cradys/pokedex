import { createInterface } from "node:readline"
import { stdin, stdout } from "node:process"

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
    const words = cleanInput(input)
    if (!words) {
      repl.prompt()
    }
    console.log(`Your command was: ${words[0]}`)
    repl.prompt()
  })

}