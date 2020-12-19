class ChatbotLayoutGenerator {
    constructor(props) {
        console.log(props);
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
    }
}

var submitFunc = function (e) {
    if (e.target.value === 'Submit') {
        document.querySelector('.generated-layout-props pre').textContent = JSON.stringify(chatbotLayoutGenerator, undefined, 2);
    }
}

document.addEventListener('change', updateInput);
document.addEventListener('click', submitFunc);


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