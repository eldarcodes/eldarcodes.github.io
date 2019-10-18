function getChar(event) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which);
}

let counterLetters = 0;
let levelText = "каждый любовь сердце солнце чье девушка хочешь абсолютный праздник бабушка дедушка отец Кузьма цех столько больница профессия месяцев специфический князя князю мужик книгу двумя внизу звуки умный связи всюду кухню нужды чужих увидя нужны снизу каждый любовь сердце солнце девушка улыбающиеся чувствовать чье хочешь абсолютный праздник бабушка дедушка отец Кузьма цех столько больница профессия месяцев специфический князя князю мужик книгу двумя внизу звуки умный связи всюду кухню нужды чужих увидя нужны снизу каждый любовь сердце солнце девушка улыбающиеся чувствовать чье хочешь абсолютный";
text.innerHTML = levelText;
let mistakesCounter = 0;

mistakes.innerHTML = ("Кол-во ошибок: " + mistakesCounter);
function checkKeyEvent() {
    let keyName = getChar(event);
    if (levelText[counterLetters] == keyName) {
        console.log("Введен символ");
        levelText = levelText.substring(1);
        text.innerHTML = levelText;

    } else if (keyName == null) {
        console.log("Нажата спец. клавиша");
        alertText.innerHTML = ("Нажата спец. клавиша");

    } else {
        console.log("Введен неверный символ");
        mistakesCounter++;
        mistakes.innerHTML = ("Кол-во ошибок: " + mistakesCounter);
        if (mistakesCounter == 101) {
            alert('Много ошибок, дружок!');
            location.reload();
        }
    }

}
document.addEventListener("keypress", checkKeyEvent);