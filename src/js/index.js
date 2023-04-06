/*? no js js needed from me */
const result = document.getElementById('result')
const hobbyList = []

function saveHobbyInput() {
  const input = document.getElementById('hobbyInput')
  const hobby = input.value
  hobbyList.push(hobby)
  result.textContent = hobbyList
}

function switcher() {
  const from = document.getElementById('from')
  const to = document.getElementById('to')
  const fromIndex = from.value - 1
  const toIndex = to.value - 1

    ;[hobbyList[fromIndex], hobbyList[toIndex]] = [hobbyList[toIndex], hobbyList[fromIndex]]

  result.textContent = hobbyList
}