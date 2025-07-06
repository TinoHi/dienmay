// Banner Swiper
const bannerSwiper = new Swiper(".mySwiper-banner", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination.banner", clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
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

// Product Swiper
const productSwiper = new Swiper(".mySwiper-product", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: { el: ".swiper-pagination.product", clickable: true },
    breakpoints: {
        320: { slidesPerView: 1.5, spaceBetween: 10 },
        480: { slidesPerView: 1.5, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 5, spaceBetween: 10 },
    }
});

// Khuyến mãi Swiper
const khuyenmaiSwiper = new Swiper(".mySwiper-khuyenmai", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination.khuyenmai", clickable: true },
    autoplay: { delay: 5000, disableOnInteraction: false },
    on: {
        slideChange: function () {
            const realIndex = this.realIndex;
            document.querySelectorAll('.caption-item').forEach(el => el.classList.remove('active'));
            document.querySelector(`.caption-item[data-index="${realIndex}"]`)?.classList.add('active');
        },
    },
});

// Go top button
const goTopBtn = document.getElementById("gotop");
window.addEventListener("scroll", () => {
    goTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
});
goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('new_header-menu-mobi');
    const menuMobi = document.getElementById('new_main_menu-mobi');
    const menuDesktop = document.getElementById('new_main_menu');

    toggleBtn.addEventListener('click', () => menuMobi.classList.toggle('active'));

    toggleBtn.addEventListener('pointerdown', () => {
        const isVisible = menuDesktop.style.display === 'block';
        menuDesktop.style.display = isVisible ? 'none' : 'block';
        document.documentElement.classList.toggle('no-scroll', !isVisible);
        document.body.classList.toggle('no-scroll', !isVisible);
    });

    const firstItem = document.querySelector('.menu-item');
    if (firstItem) firstItem.classList.add('active');

    document.querySelectorAll('.menu-item a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
            link.closest('.menu-item').classList.add('active');
        });
    });
});

// Fixed header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header-main');
    header.classList.toggle('fixed', window.scrollY > 50);
});

// Gallery change
function changeImage(el) {
    const main = document.getElementById('mainDisplay');
    main.src = el.src;
    document.querySelectorAll('.thumb').forEach(img => img.classList.remove('active'));
    el.classList.add('active');
}

// Popup
function openPopup() { document.getElementById("popup").style.display = "block"; }
function closePopup() { document.getElementById("popup").style.display = "none"; }
function handleOverlayClick(event) {
    if (event.target.classList.contains("popup-overlay")) closePopup();
}

// Singer Product Swiper
new Swiper(".mySwiper-singerprd", {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    keyboard: true,
});

// Table of content toggle
document.addEventListener('DOMContentLoaded', () => {
    // Toggle TOC
    const tocTitle = document.getElementById("toc_title");
    const tocContent = document.getElementById("toc_content");
    const tocMin = document.getElementById("toc_min");
    const tocShow = document.getElementById("toc_show");

    if (tocShow && tocTitle && tocContent && tocMin) {
        tocShow.style.display = "none";

        tocTitle.addEventListener("click", () => {
            const isVisible = tocContent.style.display === "block";
            tocContent.style.display = isVisible ? "none" : "block";
            tocShow.style.display = isVisible ? "none" : "inline";
            tocMin.style.display = isVisible ? "inline" : "none";
        });
    }

    // Reason choose toggle
    const items = document.querySelectorAll('.reason-choose-item');
    if (items.length > 0) {
        items.forEach((item, index) => {
            const toggleBtn = item.querySelector('em');
            const showIcon = item.querySelector('.show');
            const minIcon = item.querySelector('.min');
            const content = item.querySelector('.reason-content');

            if (toggleBtn && showIcon && minIcon && content) {
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

                toggleBtn.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');

                    if (isActive) {
                        item.classList.remove('active');
                        content.style.display = 'none';
                        showIcon.style.display = 'none';
                        minIcon.style.display = 'block';
                        return;
                    }

                    items.forEach(i => {
                        i.classList.remove('active');
                        i.querySelector('.reason-content').style.display = 'none';
                        i.querySelector('.show').style.display = 'none';
                        i.querySelector('.min').style.display = 'block';
                    });

                    item.classList.add('active');
                    content.style.display = 'block';
                    showIcon.style.display = 'block';
                    minIcon.style.display = 'none';
                });
            }
        });
    }
});


// Read more
document.addEventListener("DOMContentLoaded", () => {
    const article = document.querySelector(".area_article");
    const readMoreBtn = document.getElementById("readMoreBtn");

    readMoreBtn.addEventListener("click", () => {
        article.classList.toggle("expanded");
        readMoreBtn.textContent = article.classList.contains("expanded") ? "Thu gọn" : "Đọc thêm";
    });
});

// TOC collapse
document.addEventListener("DOMContentLoaded", () => {
    const tocHeader = document.querySelector('.post-detail-toc .toc-header');
    const tocBox = document.querySelector('.post-detail-toc');
    tocHeader.addEventListener('click', () => tocBox.classList.toggle('collapsed'));
});

// Shipping option and form validation
document.addEventListener("DOMContentLoaded", () => {
    const shippingOptions = document.querySelectorAll('.shipping-option');
    const homeForm = document.getElementById('home-form');
    const storeForm = document.getElementById('store-form');
    const btnOrder = document.querySelector('.complete-order');

    const nameInput = document.querySelector('.customer-name');
    const phoneInput = document.querySelector('.customer-phone');

    function validateForm() {
        const nameValid = nameInput.value.trim() !== '';
        const phoneValid = phoneInput.value.trim() !== '';
        const methodValid = document.querySelector('.shipping-option.active') !== null;

        if (nameValid && phoneValid && methodValid) {
            btnOrder.removeAttribute('disabled');
        } else {
            btnOrder.setAttribute('disabled', 'disabled');
        }
    }

    shippingOptions.forEach(option => {
        option.addEventListener('click', () => {
            shippingOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            if (option.dataset.method === 'home') {
                homeForm.classList.remove('d-none');
                storeForm.classList.add('d-none');
            } else {
                storeForm.classList.remove('d-none');
                homeForm.classList.add('d-none');
            }

            validateForm();
        });
    });

    nameInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);

    btnOrder.addEventListener('click', () => document.querySelector('.order-popup').classList.remove('d-none'));
    document.querySelector('.close-popup').addEventListener('click', () => document.querySelector('.order-popup').classList.add('d-none'));
});

// Province and district load
const locations = {
    "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng", "Đống Đa", "Thanh Xuân", "Cầu Giấy", "Long Biên"],
    "TP. Hồ Chí Minh": ["Quận 1", "Quận 3", "Quận 5", "Quận 10", "Quận 12", "Gò Vấp", "Tân Bình", "Bình Thạnh"],
    "Đà Nẵng": ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu", "Cẩm Lệ"],
    "Hải Phòng": ["Hồng Bàng", "Ngô Quyền", "Lê Chân", "Kiến An", "Hải An", "Đồ Sơn"],
    "Cần Thơ": ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn", "Thốt Nốt"],
    "Bình Dương": ["Thủ Dầu Một", "Dĩ An", "Thuận An", "Bến Cát", "Tân Uyên"],
    "Đồng Nai": ["Biên Hòa", "Long Khánh", "Trảng Bom", "Nhơn Trạch", "Long Thành"],
    "Bà Rịa - Vũng Tàu": ["Vũng Tàu", "Bà Rịa", "Long Điền", "Đất Đỏ", "Xuyên Mộc"]
};

document.addEventListener('DOMContentLoaded', () => {
    const provinceSelect = document.querySelector('.province');
    const districtSelect = document.querySelector('.district');

    for (let province in locations) {
        let option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    }

    provinceSelect.addEventListener('change', function () {
        districtSelect.innerHTML = '<option value="">Quận Huyện</option>';
        if (this.value !== '') {
            locations[this.value].forEach(district => {
                let option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        } else {
            districtSelect.disabled = true;
        }
    });
});

// Cart option select and total update
document.addEventListener('DOMContentLoaded', () => {
    function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN') + ' ₫';
    }

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.product-item').forEach(product => {
            const activeOption = product.querySelector('.option-btn.active');
            if (activeOption) total += parseInt(activeOption.dataset.price);
        });
        document.querySelector('.total-price').textContent = formatCurrency(total);
    }

    document.querySelectorAll('.product-options').forEach(optionGroup => {
        optionGroup.addEventListener('click', e => {
            if (e.target.classList.contains('option-btn')) {
                optionGroup.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                const productItem = optionGroup.closest('.product-item');
                const selectedText = e.target.innerText.split('\n')[0].trim();
                productItem.querySelector('.selected-option span').textContent = selectedText;

                updateTotal();
            }
        });
    });

    document.querySelectorAll('.delete-product').forEach(deleteBtn => {
        deleteBtn.addEventListener('click', function () {
            this.closest('.product-item').remove();
            updateTotal();
        });
    });

    updateTotal();
});
    const modelData = {
        iphone: [
            "iPhone 16 Series", "iPhone 15 Series", "iPhone 14 Series", "iPhone 13 Series",
            "iPhone 11 Pro Max", "iPhone 12 Series", "iPhone 11 Pro", "iPhone 11",
            "iPhone XR Cũ", "iPhone XS Max Cũ", "iPhone X Cũ", "iPhone XS Cũ",
            "iPhone 7 | 7 Plus", "iPhone 8 | 8 Plus", "iPhone SE 2022", "iPhone Trôi Bảo Hành",
            "iPhone SE 4 2025"
        ],
        samsung: [
            "Galaxy S24 Series", "Galaxy S23 Series", "Galaxy S22 Series",
            "Galaxy Z Fold5", "Galaxy Z Flip5", "Galaxy A Series", "Galaxy M Series"
        ],
        xiaomi: [
            "Xiaomi 14 Series", "Xiaomi 13 Series", "Xiaomi 12 Series",
            "Redmi Note 13 Series", "Redmi Note 12 Series", "Redmi Note 11 Series",
            "POCO Series"
        ],
        oppo: [
            "Oppo Find X Series", "Oppo Reno Series", "Oppo A Series"
        ],
        vivo: [
            "Vivo V Series", "Vivo Y Series", "Vivo X Series"
        ],
        realme: [
            "Realme GT Series", "Realme C Series", "Realme Narzo Series"
        ],
        nokia: [
            "Nokia C Series", "Nokia G Series", "Nokia X Series"
        ],
        oneplus: [
            "OnePlus 12 Series", "OnePlus 11 Series", "OnePlus Nord Series"
        ],
        google: [
            "Google Pixel 8 Series", "Google Pixel 7 Series", "Google Pixel 6 Series"
        ],
        huawei: [
            "Huawei P Series", "Huawei Mate Series", "Huawei Nova Series"
        ],
        tecno: [
            "Tecno Phantom Series", "Tecno Camon Series", "Tecno Spark Series"
        ],
        honor: [
            "Honor Magic Series", "Honor X Series", "Honor Play Series"
        ],
        gaming: [
            "Asus ROG Phone", "Lenovo Legion Phone", "RedMagic Gaming Phone"
        ],
        nothing: [
            "Nothing Phone (1)", "Nothing Phone (2)"
        ]
    };
document.querySelectorAll('.manunew a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const brand = this.getAttribute('data-brand');
        const models = modelData[brand];

        if (models) {
            document.querySelector('.brand-title').innerText = this.title;
            const modelList = document.querySelector('.model-list');
            modelList.innerHTML = '';

            models.forEach(model => {
                const modelItem = document.createElement('a');
                modelItem.innerText = model;
                modelItem.href = '#'; // Nếu có link thì gán vào đây
                modelItem.classList.add('model-item');
                modelList.appendChild(modelItem);
            });

            document.querySelector('.model-layout').style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tocTitle = document.getElementById("toc_title");
    const tocContent = document.getElementById("toc_content");
    const tocMin = document.getElementById("toc_min");
    const tocShow = document.getElementById("toc_show");

    tocContent.style.display = "none";
    tocMin.style.display = "inline";
    tocShow.style.display = "none";

    function toggleTOC() {
        if (tocContent.style.display === "none") {
            tocContent.style.display = "block";
            tocMin.style.display = "none";
            tocShow.style.display = "inline";
        } else {
            tocContent.style.display = "none";
            tocMin.style.display = "inline";
            tocShow.style.display = "none";
        }
    }

    // Bắt sự kiện riêng cho phần chữ
    tocTitle.addEventListener("click", toggleTOC);
    // Bắt sự kiện riêng cho từng icon
    tocMin.addEventListener("click", toggleTOC);
    tocShow.addEventListener("click", toggleTOC);

    // Toggle xem thêm
    const desc = document.querySelector('.category_description');
    const toggleBtn = document.querySelector('.toggle-description');

    if (desc && toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            desc.classList.toggle('active');
            if (desc.classList.contains('active')) {
                toggleBtn.innerText = 'Thu gọn';
            } else {
                toggleBtn.innerText = 'Xem thêm';
                window.scrollTo({
                    top: desc.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
});
