let textEl = document.getElementById("text-el")
textEl.addEventListener("input", () => {
    let count = (textEl.value).length
    document.getElementById("result-el").textContent = `Total Character: ${count}`
})