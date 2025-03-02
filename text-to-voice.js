const speakButton = document.getElementById('speak');
const outputTextArea = document.getElementById('output-text');

speakButton.addEventListener('click', () => {
    const text = outputTextArea.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
});
