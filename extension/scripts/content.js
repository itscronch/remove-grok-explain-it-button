function handleGrokButton(buttons) {
    buttons.forEach(button => {
        button.parentNode.removeChild(button)
    })
}

const observer = new MutationObserver(function (mutations, mutationInstance) {
    let buttons = document.querySelectorAll('[aria-label="Grok actions"]');
    if (buttons.length > 0) {
        handleGrokButton(buttons);
    }
});

observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true
});