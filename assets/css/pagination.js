document.addEventListener("DOMContentLoaded", function () {
  const rowsPerPage = 6;
  let currentPage = 1;

  const blogList = document.getElementById("blogList");
  const pagination = document.getElementById("blogPagination");

  const blogItems = Array.from(blogList.querySelectorAll(".blog-item"));
  const totalPages = Math.ceil(blogItems.length / rowsPerPage);

  function showPage(page) {
    // Ẩn tất cả
    blogItems.forEach((item, index) => {
      item.style.display = "none";
    });

    // Hiện các item theo trang
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    blogItems.slice(start, end).forEach((item) => {
      item.style.display = "block";
    });

    // Cập nhật phân trang
    renderPagination(page);
  }

  function renderPagination(current) {
    pagination.innerHTML = "";

    const createPageItem = (
      page,
      label = null,
      active = false,
      disabled = false
    ) => {
      const li = document.createElement("li");
      li.className =
        "page-item" + (active ? " active" : "") + (disabled ? " disabled" : "");

      const a = document.createElement("a");
      a.className = "page-link";
      a.href = "#";
      a.innerHTML = label || page;

      if (!disabled) {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          currentPage = page;
          showPage(currentPage);
        });
      }

      li.appendChild(a);
      return li;
    };

    // Prev
    pagination.appendChild(
      createPageItem(
        current - 1,
        '<i class="bi bi-chevron-left"></i>',
        false,
        current === 1
      )
    );

    // Pages
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= current - 1 && i <= current + 1)
      ) {
        pagination.appendChild(createPageItem(i, i, current === i));
      } else if (i === current - 2 || i === current + 2) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="page-dots">...</span>`;
        li.className = "page-item disabled";
        pagination.appendChild(li);
      }
    }

    // Next
    pagination.appendChild(
      createPageItem(
        current + 1,
        '<i class="bi bi-chevron-right"></i>',
        false,
        current === totalPages
      )
    );
  }

  // Khởi tạo trang đầu tiên
  showPage(currentPage);
});
