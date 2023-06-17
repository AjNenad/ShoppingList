const form = document.getElementById("form")
const input = document.getElementById("input")
const itemsUL = document.getElementById("shoppingList")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  addItem()

})

function addItem(item) {
  let itemText = input.value

  if (item) {
    itemText = item.text
  }

  if (itemText) {
    const itemEl = document.createElement('li')
    if (item && item.completed) {
      itemEl.classList.add("completed")
    }

    itemEl.innerText = itemText

    itemEl.addEventListener("click", () => itemEl.classList.toggle("completed"))
    itemEl.addEventListener("touchstart", () => itemEl.classList.toggle("completed"))

    itemEl.addEventListener("contextmenu", (e) => {
      e.preventDefault()

      itemEl.remove()
    })

    itemsUL.appendChild(itemEl)

    input.value = ""
  }
}