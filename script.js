const questions = [
    {
        'q': 'What does HTML stands for',
        'a': 'Hyper Text Preprocessor',
        'b': 'Hyper Text Markup Language',
        'c': 'Hyper Text Multiple Language',
        'd': 'Huyper Tool Multi Language',
        correct: 'b'
    },
    {
        'q': 'An array can be sorted in a reverse manner through the method',
        'a': 'reverse()',
        'b': 'sort()',
        'c': 'rev.lenght()',
        'd': 'sort.lenght()',
        correct: 'a'
    },
    {
        'q': 'Inside which HTML element do we pt the Javascript',
        'a': '<javascript>',
        'b': '<scripting>',
        'c': '<script>',
        'd': '<js>',
        correct: 'c'
    },
    {
        'q': 'What does CSS stands for',
        'a': 'Central Style Sheets',
        'b': 'Cascading Style Sheets',
        'c': 'Cascading Simple Sheets',
        'd': 'Cars Style Sheets',
        correct: 'b'
    },
    {
        'q': 'How do we declare a javascript variable',
        'a': 'variable carName',
        'b': 'v carName',
        'c': 'var carName',
        'd': 'none of these',
        correct: 'c'
    },
]


let index = 0;
const label = document.querySelectorAll('#label')
const input = document.querySelectorAll("input[type='radio']")
const question = document.getElementById('question')
const input_div = document.querySelectorAll('.input_div')
const btn = document.querySelector('button')
let right = 0, wrong = 0;

const showQuestion = () => {

    if (index === questions.length) {
        input_div.forEach((value, i) => {
            value.style.display = 'none'
            btn.style.display = 'none'
            question.style = `padding:10rem 0; text-align:center;`
            question.innerText = `You Answered ${right} question from ${questions.length}`
        })
        return;
    }

    question.innerText = `Q_${index + 1} : ` + questions[index].q

    label[0].innerText = questions[index].a;
    label[1].innerText = questions[index].b;
    label[2].innerText = questions[index].c;
    label[3].innerText = questions[index].d;

    selectQuestion()
}

let value;

const selectQuestion = () => {
    input.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            value = elem.value;
        })
    })
}

btn.addEventListener('click', () => {
    if (index === questions.length) {
        return
    }
    if (value === questions[index].correct) {
        right++;
        index++;
        // console.log("right" + right);
        // console.log(index);
    } else {
        wrong++;
        index++;
        // console.log( "wrong " + wrong);
        // console.log(index);
    }
    showQuestion()
    reset()
})

showQuestion()

function reset() {
    input.forEach((element, i) => {
        element.checked = false;
    });
}

function ifUnselec() {
    input.forEach((value) => {
        if (value.checked) {
            btn.setAttribute('disabled', 'true')
        } else {
            btn.setAttribute('disabled', 'false')
        }
    })
}