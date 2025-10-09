$(function () {
  const ticker = $(".widget-blog-scroll");
  const delay = 2000;
  const duration = 1000;
  let interval;

  function tick() {
    const first = ticker.children(".blog-item").first();
    const height = first.outerHeight(true);
    ticker.animate({ marginTop: -height }, duration, function () {
      ticker.append(first);
      ticker.css("margin-top", 0);
    });
  }

  function startTicker() {
    stopTicker();
    interval = setInterval(tick, delay);
  }

  function stopTicker() {
    clearInterval(interval);
  }

  ticker.on("mouseenter", stopTicker);
  ticker.on("mouseleave", startTicker);

  startTicker();
});

$(function () {
  const ticker = $("#ticker");
  const itemHeight = $("#ticker li").outerHeight(true);
  const speed = 1000;
  const delay = 2000;
  let paused = false;
  let top = 0;

  ticker.append(ticker.html());

  function tick() {
    if (paused) return;

    top -= itemHeight;
    ticker.animate({ marginTop: top }, speed, "swing", function () {
      if (Math.abs(top) >= (ticker.children().length / 2) * itemHeight) {
        top = 0;
        ticker.css({ marginTop: 0 });
      }
    });
  }

  let interval = setInterval(tick, delay);

  $(".scroll-posts").hover(
    function () {
      paused = true;
      ticker.stop(true, false);
    },
    function () {
      paused = false;
    }
  );
});
