
    const bannerSwiper = new Swiper(".mySwiper-banner", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination.banner",
            clickable: true,
        },

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                const realIndex = this.realIndex;
                document.querySelectorAll('.caption-item').forEach(el => el.classList.remove('active'));
                document.querySelector(`.caption-item[data-index="${realIndex}"]`)?.classList.add('active');
            },
        },
    });

    document.querySelectorAll('.caption-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            bannerSwiper.slideToLoop(index);
        });
    });

    const productSwiper = new Swiper(".mySwiper-product", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination.product",
            clickable: true,
        },
            breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
         }
    });

    const khuyenmaiSwiper = new Swiper(".mySwiper-khuyenmai", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination.khuyenmai",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                const realIndex = this.realIndex;
                document.querySelectorAll('.caption-item').forEach(el => el.classList.remove('active'));
                document.querySelector(`.caption-item[data-index="${realIndex}"]`)?.classList.add('active');
            },
        },
    });

    document.querySelectorAll('.caption-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.getAttribute('data-index'));
            bannerSwiper.slideToLoop(index);
        });
    });

  const goTopBtn = document.getElementById("gotop");

  // Hiện/ẩn nút khi cuộn
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });

  // Cuộn lên đầu trang khi click
  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('new_header-menu-mobi');
    const menu = document.getElementById('new_main_menu-mobi');

    button.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('new_header-menu-mobi');
  const menu = document.getElementById('new_main_menu');

  function toggleMenu(e) {
    const isVisible = menu.style.display === 'block';

    if (isVisible) {
      menu.style.display = 'none';
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    } else {
      menu.style.display = 'block';
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    }
  }

  // Dùng pointerdown để tránh sự kiện click/touch bị trùng
  toggleBtn.addEventListener('pointerdown', toggleMenu);

  // Mặc định thêm active cho thẻ li đầu tiên
  const firstItem = document.querySelector('.menu-item');
  if (firstItem) {
    firstItem.classList.add('active');
  }

  // Bắt sự kiện click để chuyển active
  document.querySelectorAll('.menu-item a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      document.querySelectorAll('.menu-item').forEach(function(item) {
        item.classList.remove('active');
      });

      this.closest('.menu-item').classList.add('active');
    });
  });
});

  window.addEventListener('scroll', function () {
    var header = document.getElementById('header-main');
    if (window.scrollY > 50) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
function changeImage(el) {
  const main = document.getElementById('mainDisplay');
  main.src = el.src;

  document.querySelectorAll('.thumb').forEach(img => img.classList.remove('active'));
  el.classList.add('active');
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function handleOverlayClick(event) {
  // Kiểm tra nếu người dùng click vào phần overlay chứ không phải nội dung bên trong
  if (event.target.classList.contains("popup-overlay")) {
    closePopup();
  }
}
    var swiper = new Swiper(".mySwiper-singerprd", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: true,
    });

document.addEventListener("DOMContentLoaded", function () {
    const tocTitle = document.getElementById("toc_title");
    const tocContent = document.getElementById("toc_content");
    const tocMin = document.getElementById("toc_min");
    const tocShow = document.getElementById("toc_show");

    // Ẩn icon "show" lúc đầu
    tocShow.style.display = "none";

    tocTitle.addEventListener("click", function () {
        const isVisible = tocContent.style.display === "block";

        if (isVisible) {
            tocContent.style.display = "none";
            tocShow.style.display = "none";
            tocMin.style.display = "inline";
        } else {
            tocContent.style.display = "block";
            tocShow.style.display = "inline";
            tocMin.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.reason-choose-item');

    items.forEach((item, index) => {
        const toggleBtn = item.querySelector('em');
        const showIcon = item.querySelector('.show');
        const minIcon = item.querySelector('.min');
        const content = item.querySelector('.reason-content');

        // Khởi tạo trạng thái: chỉ thẻ li đầu tiên hiển thị
        if (index === 0) {
            item.classList.add('active');
            content.style.display = 'block';
            showIcon.style.display = 'block';
            minIcon.style.display = 'none';
        } else {
            content.style.display = 'none';
            showIcon.style.display = 'none';
            minIcon.style.display = 'block';
        }

        // Sự kiện click
        toggleBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Nếu đang active, ẩn đi
            if (isActive) {
                item.classList.remove('active');
                content.style.display = 'none';
                showIcon.style.display = 'none';
                minIcon.style.display = 'block';
                return;
            }

            // Đóng tất cả thẻ
            items.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.reason-content').style.display = 'none';
                i.querySelector('.show').style.display = 'none';
                i.querySelector('.min').style.display = 'block';
            });

            // Mở thẻ được click
            item.classList.add('active');
            content.style.display = 'block';
            showIcon.style.display = 'block';
            minIcon.style.display = 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const article = document.querySelector(".area_article");
    const readMoreBtn = document.getElementById("readMoreBtn");

    readMoreBtn.addEventListener("click", function () {
        article.classList.toggle("expanded");
        if (article.classList.contains("expanded")) {
            readMoreBtn.textContent = "Thu gọn";
        } else {
            readMoreBtn.textContent = "Đọc thêm";
        }
    });
});

