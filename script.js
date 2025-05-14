document.getElementById('generateBtn').addEventListener('click', () => {
    const userInput = document.getElementById('textInput').value;
    const qrCodeImage = document.getElementById('qrCodeImage');

    if (userInput) {
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(userInput)}`;
        qrCodeImage.src = qrApiUrl;
    } else {
        alert('Please enter text or a URL!');
    }
});
