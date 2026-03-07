const quizSelectionContainer = document.getElementById('quiz-selection-container');
const quizMainContainer = document.getElementById('quiz-main-container');
const quizSelect = document.getElementById('quiz-select');
const startQuizButton = document.getElementById('start-quiz-button');
const quizTitleElement = document.getElementById('quiz-title');

const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const feedbackTextElement = document.getElementById('feedback-text');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let currentQuizSheetName = "";

// Define quiz metadata
const quizDefinitions = [
    { value: "시트1", text: "3D 프린터 운용기능사 필기 퀴즈1" },
    { value: "시트2", text: "3D 프린터 운용기능사 필기 퀴즈2" },
    { value: "시트3", text: "3D 프린터 운용기능사 필기 퀴즈3" },
    { value: "시트4", text: "3D 프린터 운용기능사 필기 퀴즈4" }
];

const GAS_BASE_URL = 'https://script.google.com/macros/s/AKfycbykAadiM-muPxMtwwbF0ZHIZvsjjG6VHYJvL5SjGEw1g2MxrqtTUaSvnPi9iVqqoqQ-/exec';


// --- Helper Functions ---

// Function to reset the state for a new question or quiz
function resetState() {
    answered = false;
    nextButton.style.display = 'none';
    feedbackTextElement.textContent = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(selectedButton, selectedOption, selectedOptionIndex, correctOptionIndex, allOptions) {
    if (answered) return; // Prevent multiple selections
    answered = true;

    const actualCorrectAnswerString = allOptions[correctOptionIndex];
    const isCorrect = (selectedOptionIndex === correctOptionIndex); // Compare indices for correctness

    let feedbackMessage = `${selectedOptionIndex + 1}번을 선택하셨습니다.`;
    if (isCorrect) {
        feedbackMessage += ' 정답입니다!';
        feedbackTextElement.classList.add('correct');
        feedbackTextElement.classList.remove('wrong');
        score++;
    } else {
        feedbackMessage += ` 오답입니다. 정답은 ${correctOptionIndex + 1}번 ("${actualCorrectAnswerString}") 입니다.`;
        feedbackTextElement.classList.add('wrong');
        feedbackTextElement.classList.remove('correct');
    }
    feedbackTextElement.textContent = feedbackMessage;
    scoreElement.textContent = score;

    // Apply styling to all buttons
    Array.from(answerButtonsElement.children).forEach((button, index) => {
        button.disabled = true; // Disable all buttons

        if (index === correctOptionIndex) {
            button.classList.add('highlight-correct'); // Highlight the correct answer
        } else if (index === selectedOptionIndex && !isCorrect) {
            button.classList.add('selected-wrong'); // Mark user's incorrect choice
        } else {
            button.classList.add('disabled-gray'); // Gray out other unselected options
        }
    });
    nextButton.style.display = 'block';
}


// --- Core Quiz Flow Functions ---

// Function to display a question
function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    if (!question) {
        console.error('Error: Question object is undefined at index', currentQuestionIndex);
        questionTextElement.textContent = `오류: 문제 데이터를 불러올 수 없습니다 (인덱스 ${currentQuestionIndex}).`;
        return;
    }
    questionTextElement.textContent = `${currentQuestionIndex + 1}. ${question.question}`;

    answerButtonsElement.innerHTML = ''; // Ensure old buttons are cleared
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');

        let optionContent = `<span class="option-text">${option}</span>`;
        // Check for Google Drive direct image URL
        const googleDriveImageRegex = /^https:\/\/drive\.google\.com\/uc\?id=[a-zA-Z0-9_-]+$/;
        // Check for standard image URLs ending in extensions (http/https or relative paths)
        const imageFileRegex = /^(https?:\/\/[^\s$.?#].[^\s]*\.(jpe?g|png|gif|webp|svg)|[a-zA-Z0-9_./-]+\.(jpe?g|png|gif|webp|svg))$/i;

        if (googleDriveImageRegex.test(option) || imageFileRegex.test(option)) {
            optionContent = `<img src="${option}" alt="Option Image" class="option-image">`;
        }

        button.innerHTML = `<span class="option-number">${index + 1}</span> ${optionContent}`;
        // Pass the selected option string, its 0-based index, the correct answer's 0-based index, and all options
        button.addEventListener('click', (event) => {
            // Ensure event.target is the button, not a child span or image
            const clickedButton = event.currentTarget; 
            selectAnswer(clickedButton, option, index, question.answer - 1, question.options);
        });
        answerButtonsElement.appendChild(button);
    });
}

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    nextButton.textContent = '다음 문제';
    nextButton.style.display = 'none';
    showQuestion();
}

// Function to handle next button click
function handleNextButton() {
    if (nextButton.textContent === '다음 문제') {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz(); // All questions done, now end the quiz
        }
    } else if (nextButton.textContent === '다른 퀴즈 선택') {
        // User wants to go back to selection screen
        quizMainContainer.style.display = 'none';
        quizSelectionContainer.style.display = 'block';
        resetQuizState(); // Reset for new quiz selection
    }
}

// Function to reset quiz state (for returning to selection screen)
function resetQuizState() {
    questions = [];
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    currentQuizSheetName = "";

    scoreElement.textContent = '0';
    totalQuestionsElement.textContent = '0';
    feedbackTextElement.textContent = '';
    nextButton.textContent = '다음 문제'; // Reset button text
    nextButton.style.display = 'none';
    answerButtonsElement.innerHTML = '';
    questionTextElement.textContent = '';

    // The handleNextButton listener is permanently attached. No need to re-attach.
}

// Function to end the quiz
function endQuiz() {
    quizTitleElement.textContent = quizDefinitions.find(q => q.value === currentQuizSheetName).text; // Restore title

    questionTextElement.textContent = `퀴즈가 종료되었습니다! 총 ${questions.length} 문제 중 ${score} 문제 정답!`;
    answerButtonsElement.innerHTML = '';
    feedbackTextElement.textContent = '';
    nextButton.style.display = 'block'; // Show restart button
    nextButton.textContent = '다른 퀴즈 선택'; // Change text to go back to selection

    // The single handleNextButton listener will now handle going back to selection screen
}


// Function to fetch quiz data
async function fetchQuizData(sheetName) {
    currentQuizSheetName = sheetName; // Store selected sheet name
    quizTitleElement.textContent = quizDefinitions.find(q => q.value === sheetName).text; // Set dynamic title

    quizMainContainer.style.display = 'block';
    quizSelectionContainer.style.display = 'none';

    questionTextElement.textContent = '퀴즈 데이터를 불러오는 중...';
    answerButtonsElement.innerHTML = '';
    nextButton.style.display = 'none';
    feedbackTextElement.textContent = '';
    
    try {
        const response = await fetch(`${GAS_BASE_URL}?sheetName=${sheetName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.error) {
            questionTextElement.textContent = `오류: ${data.error}`;
            return;
        }
        
        questions = data;
        totalQuestionsElement.textContent = questions.length;
        startQuiz();
    } catch (error) {
        console.error('Failed to fetch quiz data:', error);
        questionTextElement.textContent = '퀴즈 데이터를 불러오는데 실패했습니다. 나중에 다시 시도해주세요.';
    }
}


// --- Event Listeners and Initial Setup ---

document.addEventListener('DOMContentLoaded', () => {
    const mainPageLink = document.getElementById('main-page-link'); // Changed to link

    // Event listener for start quiz button
    startQuizButton.addEventListener('click', () => {
        const selectedSheet = quizSelect.value;
        fetchQuizData(selectedSheet);
    });

    // Event listener for main page link
    mainPageLink.addEventListener('click', (event) => { // Added event parameter
        event.preventDefault(); // Prevent default link behavior
        quizMainContainer.style.display = 'none';
        quizSelectionContainer.style.display = 'block';
        resetQuizState();
    });

    // Event listener for the next button (permanently attached once inside DOMContentLoaded)
    nextButton.addEventListener('click', handleNextButton);
});


