const startRecognitionButton = document.getElementById('start-recognition');
const inputTextArea = document.getElementById('input-text');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

startRecognitionButton.addEventListener('click', () => {
    recognition.start();
});

recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    inputTextArea.value = transcript;
});

recognition.addEventListener('error', (event) => {
    console.error('Speech recognition error:', event.error);
});
