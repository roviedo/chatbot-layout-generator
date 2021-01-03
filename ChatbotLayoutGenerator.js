class ChatbotLayoutGenerator {
    constructor(props) {
        this.header = {
            image: props.header.image,
            backgroundColor: props.header.backgroundColor
        };
        this.openOnDefault = props.openOnDefault;
        this.openCloseColor = props.openCloseColor;
        this.openCloseIcons = {
            open: props.openCloseIcons.open,
            close: props.openCloseIcons.close
        };
        this.openCloseShape = props.openCloseShape;
        this.frameSrc = props.frameSrc;
    }

    setHeaderImage (headerImage) {
        this.header.image = headerImage;
    }

    setHeaderBackgroundColor (headerBackgroundColor) {
        this.header.backgroundColor = headerBackgroundColor;
    }

    setOpenCloseColor (openCloseColor) {
        this.openCloseColor = openCloseColor;
    }

    isOpenOnDefault (openOnDefault) {
        this.openOnDefault = openOnDefault;
    }

    setOpenIcon (openIcon) {
        this.openCloseIcons.open = openIcon;
    }

    setCloseIcon (closeIcon) {
        this.openCloseIcons.close = closeIcon;
    }

    setOpenCloseIconShape (openCloseShape) {
        this.openCloseShape = openCloseShape;
    }

    setFrameSrc (frameSrc) {
        this.frameSrc = frameSrc
    }

    initCss() {
        const style = document.createElement('style');
        const header = '.header-logo {' + this.header.backgroundColor + '}';
        const headerLogo = document.querySelector('.header-logo .logo').src = this.header.image;
        if (!this.openOnDefault) {
            document.querySelector('.chatbot-layout').classList.add('chatbot-layout-closed');
            document.querySelector('#receiver').classList.add('close');
        }

        document.querySelector('.header-logo').style.background = this.header.backgroundColor;
        document.querySelector('.chatbot-layout-header').style.background = this.openCloseColor;
        
        let styleBorderRadius = '50%';
        if (this.openCloseShape === 'square') {
            styleBorderRadius = '0';
        } else if (this.openCloseShape === 'square-round-edges') {
            styleBorderRadius = '10%';
        }
        document.querySelector('.chatbot-layout-header').style.borderRadius = styleBorderRadius;
        document.querySelector('#receiver').src = this.frameSrc;
    }
}

var updateInput = function (e) {
    const value = e.target.value;
    const datasetType = e.target.dataset.type;
    if (e.target.dataset.type === 'open-on-default') {
        chatbotLayoutGenerator.setOpenCloseColor(value);
    } else if (e.target.dataset.type === 'header-image') {
        chatbotLayoutGenerator.setHeaderImage(value);
    } else if (e.target.dataset.type === 'header-background-color') {
        chatbotLayoutGenerator.setHeaderBackgroundColor(value);
    } else if (e.target.dataset.type === 'open-close-color') {
        chatbotLayoutGenerator.setOpenCloseColor(value);
    } else if (e.target.dataset.type === 'open-icon') {
        chatbotLayoutGenerator.setOpenIcon(value);
    } else if (e.target.dataset.type === 'close-icon') {
        chatbotLayoutGenerator.setCloseIcon(value);
    } else if (e.target.dataset.type === 'open-close-icon-shape') {
        chatbotLayoutGenerator.setOpenCloseIconShape(value);
    } else if (e.target.dataset.type === 'frame-src') {
        chatbotLayoutGenerator.setFrameSrc(value);
    }
}

var submitFunc = function (e) {
    if (e.target.value === 'Submit') {
        document.querySelector('.generated-layout-props pre').textContent = JSON.stringify(chatbotLayoutGenerator, undefined, 2);
    }

    if (typeof chatbotLayoutGenerator !== 'undefined') {
        chatbotLayoutGenerator.initCss();
    }
}

function openChatbotLayout (receiverElem, imgElemOpen, imgElemClose) {
    document.getElementById('receiver').classList.add("open");
    document.getElementById('receiver').classList.remove("close");
    document.getElementsByClassName('chatbot-layout')[0].classList.add("chatbot-layout-open");
    document.getElementsByClassName('chatbot-layout')[0].classList.remove("chatbot-layout-closed");
    document.getElementsByClassName('chatbot-layout-header-mobile')[0].classList.remove('close');
    imgElemClose.style.opacity = 1;
    imgElemOpen.style.opacity = 0;
    localStorage.setItem('chatbotLayoutOpen', true);
}

function closeChatbotLayout (receiverElem, imgElemOpen, imgElemClose) {
    document.getElementById('receiver').classList.add("close");
    document.getElementById('receiver').classList.remove("open");
    document.getElementsByClassName('chatbot-layout')[0].classList.add("chatbot-layout-closed");
    document.getElementsByClassName('chatbot-layout')[0].classList.remove("chatbot-layout-open");
    document.getElementsByClassName('chatbot-layout-header-mobile')[0].classList.add('close');
    imgElemOpen.style.opacity = 1;
    imgElemClose.style.opacity = 0;
    localStorage.setItem('chatbotLayoutOpen', false);
}

function toggleChatbotLayout () {
    var chatbotLayoutHeaderImgElemOpen = document.getElementsByClassName('chatbot-layout-header-img open')[0];
    var chatbotLayoutHeaderImgElemClose = document.getElementsByClassName('chatbot-layout-header-img close')[0];
    var receiverElem = document.getElementById('receiver');
    if (receiverElem.classList.contains('close')) {
      openChatbotLayout(receiverElem, chatbotLayoutHeaderImgElemOpen, chatbotLayoutHeaderImgElemClose);
    } else {
      closeChatbotLayout(receiverElem, chatbotLayoutHeaderImgElemOpen, chatbotLayoutHeaderImgElemClose);
    }
}

window.onload = function () {
    document.addEventListener('change', updateInput);
    document.addEventListener('click', submitFunc);
    var chatbotLayoutHeaderElem = document.getElementsByClassName('chatbot-layout-header')[0];
    chatbotLayoutHeaderElem.addEventListener('click', toggleChatbotLayout);
    var chatbotLayoutHeaderElemMobile = document.getElementsByClassName('chatbot-layout-header-mobile')[0];
    chatbotLayoutHeaderElemMobile.addEventListener('click', toggleChatbotLayout);
}


var chatbotLayoutGeneratorProps = {
    header: {
        image: './logo.png',
        backgroundColor: 'blue'
    },
    openOnDefault: true,
    openCloseColor: 'black',
    openCloseIcons: {
        open: './close.png',
        close: './open.png'
    },
    openCloseShape: 'square'
}