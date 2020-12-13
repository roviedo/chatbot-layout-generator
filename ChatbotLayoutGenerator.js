class ChatbotLayoutGenerator {
    constructor(props) {
        console.log(props);
    }
}

var updateInput = function (e) {
    console.log('e value', e.target.value);
    console.log('e dataset', e.target.dataset);
}

document.addEventListener('change', updateInput);


var chatbotLayoutGeneratorProps = {
    header: {
        image: 'base64string/url',
        backgroundColor: 'blue'
    },
    openOnDefault: true,
    openCloseColor: 'black',
    openCloseIcons: {
        open: 'base64string/url',
        close: 'base64string/url'
    },
    openCloseShape: 'square'
}