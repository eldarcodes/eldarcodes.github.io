let key = document.getElementById('key')

const cipher = document.getElementById('in')
const decipher = document.getElementById('out2')

key.addEventListener('input', () => {
  if (key.value.length > 0) {
    cipherFunc()
    decipherFunc()
  }
})

cipher.addEventListener('input', () => {
  cipherFunc()
})

decipher.addEventListener('input', () => {
  decipherFunc()
})

const cipherFunc = () => {
  let offset
  if (key.value.length !== 0) {
    if (key.value.length >= 15) {
      offset = 4
    } else {
      offset = key.value.length
    }

    let str = cipher.value
    let out = ''

    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i)
      code += offset
      out += String.fromCharCode(code)
    }

    document.getElementById('out').innerHTML = 'Результат: ' + out
  } else {
    alert('Ошибка, введите ключ шифрования!')
    cipher.value = ''
  }
}

const decipherFunc = () => {
  let offset

  if (key.value.length !== 0) {
    if (key.value.length >= 15) {
      offset = 4
    } else {
      offset = key.value.length
    }

    let str = decipher.value
    let out = ''

    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i)
      code -= offset
      out += String.fromCharCode(code)
    }

    document.getElementById('out3').innerHTML = 'Результат: ' + out
  } else {
    alert('Ошибка, введите ключ шифрования!')
    decipher.value = ''
  }
}
