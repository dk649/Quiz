

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    const quizData = [

        {
            questions: 'How old is Richard Gere',
            a: '69',
            b: '76',
            c: '71',
            d: '70',
            correct: 'c'
        },

        {
            questions: 'What year was the first James Bond Movie made',
            a: '1970',
            b: '1962',
            c: '1969',
            d: '1960',
            correct: 'b'
        },

        {

            questions: 'Which actor played the first James Bond',

            a: 'Roger Moore',
            b: 'Timothy Dalton',
            c: 'David Niven',
            d: 'Sean Connery',
            correct: 'd'
        },

        {

            questions: 'What year did World War 1 start',

            a: '1913',
            b: '1924',
            c: '1914',
            d: '1912',
            correct: 'c'
        },

        {
            questions: 'What year was star wars released',

            a: '1980',
            b: '1978',
            c: '1975',
            d: '1984',
            correct: 'b'
        }
    ];

    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');

    let currentQuiz = 0;
    // let answer = undefined;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
            deselectAnswer();
            const currentQuizData = quizData[currentQuiz];
            questionEl.innerText = currentQuizData.questions; 

            a_text.innerText = currentQuizData.a;
            b_text.innerText = currentQuizData.b;
            c_text.innerText = currentQuizData.c;
            d_text.innerText = currentQuizData.d;


        

    }

    // submitBtn.disabled = true;

    function getSelected() {

        let answer = undefined;
        

        

        answerEls.forEach((answerEl) => {

            

            if(answerEl.checked){
                answer = answerEl.id;
                

            }
        });

        return answer;
    }

    function deselectAnswer() {

        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }

    submitBtn.addEventListener('click', () => {

        const answer = getSelected();

        // console.log(answer);
        // console.log(score);

        if(answer){

            if(answer === quizData[currentQuiz].correct){

                score++;
            }
                currentQuiz++;
                if(currentQuiz < quizData.length){

                    loadQuiz();
       
                } else {
                    // TODO Show correct answers
                   alert("End of Quiz " + "your score is "+ score + " out of 5");
                }
        }



        
    });

});