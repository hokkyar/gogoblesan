const cardTarget = document.getElementById('targetObject1')
const textTarget = document.getElementById('targetObject2')

function update() {
  const inputValue = document.getElementById('inputValue').value
  const selection = document.getElementById('selection').value
  switch (selection) {
    case 'Warna Latar':
      cardTarget.style.backgroundColor = inputValue
      break
    case 'Warna Text':
      textTarget.style.color = inputValue
      break
    case 'Ukuran Text':
      textTarget.style.fontSize = inputValue + 'px'
      break
    case 'Jenis Font':
      textTarget.style.fontFamily = inputValue
      break
    case 'Lebar Konten':
      cardTarget.style.width = inputValue + 'px'
      break
    case 'Tinggi Konten':
      cardTarget.style.height = inputValue + 'px'
      break
  }
}
