window.addEventListener("load", () => {
    console.log("✅ Scroller script loaded");
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const inner = scroller.querySelector(".scroller__inner");
        const items = Array.from(inner.children);
        items.forEach((el) => {
            const clone = el.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            inner.appendChild(clone);
        });
    });
});
