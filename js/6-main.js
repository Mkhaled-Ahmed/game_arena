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

// Small message box and concept notice. The site has no backend, so buttons that have no feature say so.
function showDemoToast(text) {
    let toast = document.getElementById("demo-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "demo-toast";
        toast.setAttribute("role", "status");
        document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add("show");
    clearTimeout(showDemoToast.timer);
    showDemoToast.timer = setTimeout(() => toast.classList.remove("show"), 3500);
}

document.addEventListener("click", (e) => {
    const dead = e.target.closest('a[href="#"], .navbar .btn, .navbar i.icon, #home .btn, .btn-view');
    if (dead) {
        e.preventDefault();
        showDemoToast("Demo only: this button is not connected to a feature.");
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const pill = document.createElement("div");
    pill.id = "concept-pill";
    pill.innerHTML = '<span>Concept demo: sample content, not a real business.</span><button type="button" aria-label="Dismiss notice">&times;</button>';
    pill.querySelector("button").addEventListener("click", () => pill.remove());
    document.body.appendChild(pill);
});

// The contact form is not connected to a service, so do not reload the page or pretend it was sent
window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact-us form");
    if (!form) return;
    const note = document.createElement("p");
    note.className = "form-demo-note";
    note.setAttribute("role", "status");
    form.appendChild(note);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        note.textContent = "This is a demo page, so messages are not sent.";
    });
});
