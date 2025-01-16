function handleGrokButton(button) {
    button.parentNode.removeChild(button)
    console.log("HIDIVE Cookie Remover:\tRemoved successfully!")
}

const observer = new MutationObserver(function (mutations, mutationInstance) {
    let button = document.querySelector('[aria-label="Grok actions"]');
    if (button) {
        console.log("Button Found!")
        handleGrokButton(button);
        mutationInstance.disconnect();
    }
});

observer.observe(document, {
    childList: true,
    subtree: true
});