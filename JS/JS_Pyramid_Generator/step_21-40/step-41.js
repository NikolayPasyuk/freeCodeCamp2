const count = 8;
const character = "#";
const rows = []

for (let i = 0; i < count; i = i + 1) {
  rows.push(character)
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result)