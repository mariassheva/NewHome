const questions = [
    {
        question: "Вы интересуетесь покупкой недвижимости для того чтобы",
        answers: [
            {a: "Будем жить самостоятельно"},
            {b: "Хочу купить и сдавать в аренду"},
            {c: "Будем и жить, и сдавать в аренду"},
            {d: "Хочу заработать на будущей перепродаже"},
            {e: "Пока не определился"},
        ]
    },
    {
        question: "Какой тип квартиры вы желаете? ",
        answers: [
            {a: "Студия"},
            {b: "Студия + 1 спальня"},
            {c: "Студия + 2 спальни"},
            {d: "Студия + 3 спальни"}
        ]
    },
    {
        question: "На какую стоимость вы рассчитываете? ",
        answers: [
            {a: "до 50000€ "},
            {b: "от 50000€ до 70 000€"},
            {c: "от 70000€ до 100000€"},
            {d: "свыше 100000€"}
        ]
    },
    {
        question: "Когда планируете приехать на просмотр? ",
        answers: [
            {a: "Уже готов приехать"},
            {b: "В течении месяца"},
            {c: "Через 2-3 месяца"},
            {d: "Определюсь после связи с вами"}
        ]
    }
]

// отображение первого блока с вопросом
document.getElementsByClassName('quiz')[0].style.display = "block";

// функции для кнопок
function next(id) {
    document.getElementsByClassName('quiz')[id-1].style.display = "none";
    document.getElementsByClassName('quiz')[id].style.display = "block";
}
function back(id) {
    document.getElementsByClassName('quiz')[id].style.display = "none";
    document.getElementsByClassName('quiz')[id-1].style.display = "block";
}

function skip(id) {
    document.getElementsByClassName('quiz')[id-1].style.display = "none";
    document.getElementsByClassName('quiz')[id].style.display = "block";
}



