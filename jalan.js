const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start"
  });
}

document.querySelector("#btn-discover")?.addEventListener("click", (event) => {
  event.preventDefault();
  scrollTo(".card");
});

document.querySelector(".click-learn")?.addEventListener("click", (event) => {
  event.preventDefault();
  scrollTo(".scroll-learn");
});

const storyVideo = document.querySelector(".bg-video__content");
const desktopMotion = window.matchMedia("(min-width: 601px) and (prefers-reduced-motion: no-preference)").matches;

if (storyVideo && desktopMotion && "IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;

    storyVideo.querySelectorAll("source[data-src]").forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute("data-src");
    });
    storyVideo.load();
    storyVideo.play().catch(() => {});
    observer.disconnect();
  }, { rootMargin: "200px" });

  videoObserver.observe(storyVideo);
}
