$(function () {
  let interval;

  function startTicker(ticker) {
    stopTicker();
    interval = setInterval(function () {
      const first = ticker.children(".blog-item").first();
      const height = first.outerHeight(true);
      ticker.animate({ marginTop: -height }, 1000, function () {
        ticker.append(first);
        ticker.css("margin-top", 0);
      });
    }, 2000);
  }

  function stopTicker() {
    clearInterval(interval);
  }

  $('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    const target = $(e.target).data("bs-target"); // vd: #register
    const ticker = $(target).find(".widget-blog-scroll");
    if (ticker.length) {
      startTicker(ticker);

      ticker.off("mouseenter mouseleave");
      ticker.on("mouseenter", stopTicker);
      ticker.on("mouseleave", () => startTicker(ticker));
    }
  });

  const firstTicker = $(".tab-pane.show.active .widget-blog-scroll");
  if (firstTicker.length) {
    startTicker(firstTicker);
    firstTicker.on("mouseenter", stopTicker);
    firstTicker.on("mouseleave", () => startTicker(firstTicker));
  }
});
