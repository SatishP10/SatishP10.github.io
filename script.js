document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Add the fade-out class to the body
            document.body.classList.add("fade-out");

            // Wait for the fade-out transition to complete, then navigate
            setTimeout(() => {
                window.location.href = this.href;
            }, 750); // Match the duration of the CSS transition
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const accordionItem = header.parentElement;

            // Toggle the active class
            accordionItem.classList.toggle("active");

            // Close other accordion items if you want only one open at a time
            const otherItems = document.querySelectorAll(".accordion-item");
            otherItems.forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove("active");
                }
            });
        });
    });
});
