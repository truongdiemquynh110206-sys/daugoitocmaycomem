```javascript
/* =========================================================
   CỎ MỀM - DẦU GỘI THẢO DƯỢC TÓC MÂY
   File: script.js

   Chức năng:
   - Dữ liệu sản phẩm
   - Hiển thị sản phẩm
   - Lọc sản phẩm
   - Chi tiết sản phẩm
   - Bộ sưu tập hình ảnh
   - Giỏ hàng
   - Tăng / giảm số lượng
   - Đặt hàng
   - Unicode tiếng Việt chuẩn NFC
========================================================= */

"use strict";

/* =========================================================
   CHUẨN HÓA TIẾNG VIỆT
   Giúp chữ và dấu tiếng Việt không bị tách rời
========================================================= */

function vnText(text) {
    if (typeof text !== "string") return text;

    try {
        return text.normalize("NFC");
    } catch (error) {
        return text;
    }
}

/* =========================================================
   DỮ LIỆU SẢN PHẨM
========================================================= */

const products = [
    {
        id: "toc-may",

        name: vnText("Dầu gội thảo dược Tóc Mây"),

        brand: vnText("Cỏ Mềm"),

        category: "all",

        price: 189000,

        oldPrice: 219000,

        unit: vnText("300 gram"),

        image:
            "https://media.comem.vn/uploads/2024/07/srm_tram_tra_(8)_sp2x.webp",

        images: [
            "https://media.comem.vn/uploads/2024/07/srm_tram_tra_(8)_sp2x.webp",

            "https://media.comem.vn/uploads/2025/04/z4926524379232_8e45f40105a24f00c01caf6f75d4ed0e_sp2x.webp",

            "https://media.comem.vn/uploads/2025/04/z5343266897612_cece4021b549ac2ca8a101dcdfea6e89_sp2x.webp"
        ],

        detailImage:
            "https://static.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-1.jpg",

        shortDescription: vnText(
            "Dầu gội thảo dược Tóc Mây với chiết xuất Bồ kết và các thảo dược truyền thống, giúp làm sạch tóc và da đầu, hỗ trợ cải thiện gàu, gãy rụng và chẻ ngọn."
        ),

        description: vnText(
            "Với chiết xuất từ Bồ kết và thảo dược truyền thống cùng các hoạt chất thiên nhiên, Dầu gội thảo dược Tóc Mây giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn. Sản phẩm có thể dùng cho cả những người có da đầu nhạy cảm."
        ),

        imageCaption: vnText(
            "Dầu gội thảo dược Tóc Mây Cỏ Mềm"
        ),

        specifications: {
            "Tên sản phẩm": vnText("Dầu gội thảo dược Tóc Mây"),
            "Khối lượng": vnText("300 gram"),
            "Vấn đề của tóc": vnText("Tóc xơ, gàu, gãy rụng nhiều"),
            "Công dụng": vnText(
                "Làm sạch tóc, da đầu, ngăn ngừa cải thiện tình trạng gàu, gãy rụng, chẻ ngọn cho mái tóc mềm mượt, chắc khoẻ"
            ),
            "Mùi hương": vnText(
                "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên"
            ),
            "Hạn sử dụng": vnText("24 tháng")
        },

        legal: {
            "Số công bố với Sở Y Tế": "18429/23/CBMP-HN",

            "Chịu trách nhiệm về sản phẩm":
                vnText("Công ty mỹ phẩm thiên nhiên Cỏ Mềm"),

            "Địa chỉ":
                vnText("Số 225, phố Trần Đăng Ninh, phường Cầu Giấy, TP Hà Nội"),

            "Xuất xứ":
                vnText("Việt Nam")
        },

        advantages: [
            vnText(
                "Bồ kết, Bồ hòn, Cỏ ngũ sắc: Chứa saponin giúp tạo bọt tự nhiên, làm sạch gàu."
            ),

            vnText(
                "Hương nhu và Cỏ mần trầu: Sạch gàu, ngăn ngừa rụng tóc."
            ),

            vnText(
                "Tinh dầu vỏ Bưởi: góp phần ngăn ngừa rụng tóc."
            ),

            vnText(
                "Tang bạch bì: Ngăn ngừa rụng tóc."
            ),

            vnText(
                "Tinh dầu Sả chanh: mang hương thơm nhẹ nhàng, giúp đem lại cảm giác thư giãn khi gội đầu."
            ),

            vnText(
                "Dầu quả Bơ chứa nhiều vitamin A, C, D, E là một nguồn bổ sung tuyệt vời cho tóc khô, phục hồi tóc hư tổn, dưỡng tóc mềm mượt, chắc khỏe."
            ),

            vnText(
                "Protein từ đậu Hà Lan (Cetearamidoethyldiethonium Succinoyl Hydrolyzed Pea Protein) có khả năng thay thế silicone giúp làm mượt tóc, phục hồi tóc hư tổn mà không gây bít tắc nang tóc."
            )
        ],

        advantageIntro: vnText(
            "Dầu gội Thảo dược “Không silicon, Không sulfate”, phù hợp người có da đầu nhạy cảm. Công thức kết hợp các thảo mộc truyền thống và hoạt chất thiên nhiên hiện đại giúp phát huy tác dụng:"
        ),

        benefits: vnText(
            "Dầu gội đầu giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn, cho mái tóc mềm mượt, chắc khoẻ. Góp phần thúc đẩy sự phát triển của nang tóc."
        ),

        ingredientsIntro: vnText(
            "Dầu gội thảo dược Tóc Mây không chứa silicone, không sulfate, lành tính, dùng được cho cả những làn da nhạy cảm nhất với sự kết hợp của:"
        ),

        ingredients: [
            vnText("Nước tinh khiết (Purified water)"),

            vnText(
                "Cao dược liệu: quả Bồ kết, rễ và lá Dâu Tằm, cỏ Mần Trầu, cỏ Ngũ Sắc, lá Tre, quả Mắc Kham, quả Bồ Hòn"
            ),

            "Propanediol",

            "Glycerin",

            vnText(
                "Tinh dầu vỏ Bưởi (Citrus maxima peel essential oil)"
            ),

            vnText(
                "Tinh dầu Hương nhu (Ocimum gratissimum essential oil)"
            ),

            vnText(
                "Tinh dầu Sả chanh (Cymbopogon citratus essential oil)"
            ),

            vnText(
                "Dầu quả Bơ (Persea gratissima fruit oil)"
            ),

            "Vitamin E (Tocopherol)",

            "Phenoxyethanol."
        ],

        finalMessage: vnText(
            "Dầu gội thảo dược Tóc Mây là lựa chọn chân ái dành cho mái tóc của bạn. Nếu bạn đang tìm giải pháp cải thiện mái tóc mềm mượt, chắc khỏe, đừng bỏ qua dầu gội thảo dược Tóc Mây nhà Cỏ bạn nhé!"
        ),

        howToUse: [
            vnText(
                "Làm ướt tóc và thoa đều dầu gội lên trên tóc"
            ),

            vnText(
                "Thực hiện massage tóc và da đầu"
            ),

            vnText(
                "Xả sạch lại tóc với nước."
            )
        ],

        notes: [
            vnText(
                "Bạn có thể gội 2 lần nếu muốn. Bên cạnh đó, đừng quên sử dụng kết hợp với Kem Xả ủ và Serum Tóc Mây để dưỡng tóc, giúp tóc luôn óng mượt, chắc khỏe."
            ),

            vnText(
                "Chiết xuất bồ kết đậm đặc, vì thế sẽ gây cay nhẹ nếu rơi vào mắt. Trong trường hợp này bạn nên rửa sạch lại bằng nước sạch."
            )
        ]
    }
];

/* =========================================================
   GIỎ HÀNG
========================================================= */

let cart = JSON.parse(
    localStorage.getItem("tocMayCart") || "[]"
);

/* =========================================================
   FORMAT GIÁ
========================================================= */

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(price);
}

/* =========================================================
   LƯU GIỎ HÀNG
========================================================= */

function saveCart() {
    localStorage.setItem(
        "tocMayCart",
        JSON.stringify(cart)
    );

    updateCart();

    window.cart = cart;
}

/* =========================================================
   TÌM SẢN PHẨM
========================================================= */

function findProduct(productId) {
    return products.find(
        product => product.id === productId
    );
}

/* =========================================================
   THÊM VÀO GIỎ
========================================================= */

function addToCart(productId) {

    const product = findProduct(productId);

    if (!product) return;

    const existingProduct = cart.find(
        item => item.id === productId
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();

    showToast(
        vnText("Đã thêm sản phẩm vào giỏ hàng")
    );
}

/* =========================================================
   XÓA SẢN PHẨM KHỎI GIỎ
========================================================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();
}

/* =========================================================
   THAY ĐỔI SỐ LƯỢNG
========================================================= */

function changeQuantity(productId, change) {

    const item = cart.find(
        product => product.id === productId
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }

    saveCart();
}

/* =========================================================
   CẬP NHẬT GIỎ HÀNG
========================================================= */

function updateCart() {

    const cartCountElements =
        document.querySelectorAll(
            "#cart-count, .cart-count, [data-cart-count]"
        );

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCountElements.forEach(element => {
        element.textContent = totalQuantity;
    });

    const cartItems =
        document.querySelector("#cart-items");

    const cartTotal =
        document.querySelector("#cart-total");

    if (!cartItems) return;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>${vnText("Giỏ hàng đang trống")}</p>
            </div>
        `;

        if (cartTotal) {
            cartTotal.textContent = formatPrice(0);
        }

        return;
    }

    cartItems.innerHTML = cart.map(item => {

        const total =
            item.price * item.quantity;

        return `
            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image"
                >

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <div class="cart-item-price">
                        ${formatPrice(item.price)}
                    </div>

                    <div class="cart-quantity">

                        <button
                            type="button"
                            onclick="changeQuantity('${item.id}', -1)"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="changeQuantity('${item.id}', 1)"
                        >
                            +
                        </button>

                    </div>

                    <div class="cart-item-total">
                        ${formatPrice(total)}
                    </div>

                    <button
                        type="button"
                        class="remove-cart-item"
                        onclick="removeFromCart('${item.id}')"
                    >
                        ${vnText("Xóa")}
                    </button>

                </div>

            </div>
        `;

    }).join("");

    const totalPrice = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    if (cartTotal) {
        cartTotal.textContent =
            formatPrice(totalPrice);
    }
}

/* =========================================================
   THÔNG BÁO
========================================================= */

function showToast(message) {

    let toast =
        document.querySelector("#toast-message");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast-message";

        document.body.appendChild(toast);
    }

    toast.textContent = vnText(message);

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);
}

/* =========================================================
   HIỂN THỊ DANH SÁCH SẢN PHẨM
========================================================= */

function renderProducts(list = products) {

    const productList =
        document.querySelector("#product-list");

    if (!productList) return;

    if (!list.length) {

        productList.innerHTML = `
            <div class="no-products">
                ${vnText("Không tìm thấy sản phẩm")}
            </div>
        `;

        return;
    }

    productList.innerHTML = list.map(product => {

        return `
            <article
                class="product-card"
                data-product-id="${product.id}"
            >

                <button
                    type="button"
                    class="product-image-button"
                    onclick="openProductDetail('${product.id}')"
                    aria-label="Xem ${product.name}"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                        loading="lazy"
                    >

                </button>

                <div class="product-card-content">

                    <div class="product-brand">
                        ${product.brand}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <div class="product-price-row">

                        <span class="product-price">
                            ${formatPrice(product.price)}
                        </span>

                        ${
                            product.oldPrice
                                ? `
                                    <span class="product-old-price">
                                        ${formatPrice(product.oldPrice)}
                                    </span>
                                `
                                : ""
                        }

                    </div>

                    <div class="product-actions">

                        <button
                            type="button"
                            class="view-product-btn"
                            onclick="openProductDetail('${product.id}')"
                        >
                            ${vnText("Xem chi tiết")}
                        </button>

                        <button
                            type="button"
                            class="add-cart-btn"
                            onclick="addToCart('${product.id}')"
                        >
                            ${vnText("Thêm vào giỏ")}
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");
}

/* =========================================================
   LỌC SẢN PHẨM

   Chỉ có một sản phẩm / một nhóm "Tất cả".
   Không chia danh mục sản phẩm.
========================================================= */

function filterProducts(keyword = "") {

    const searchText =
        vnText(keyword)
            .trim()
            .toLowerCase();

    if (!searchText) {

        renderProducts(products);

        return;
    }

    const filteredProducts =
        products.filter(product => {

            const searchableText = [
                product.name,
                product.brand,
                product.shortDescription,
                product.specifications?.["Vấn đề của tóc"],
                product.specifications?.["Công dụng"]
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return searchableText.includes(
                searchText
            );
        });

    renderProducts(filteredProducts);
}

/* =========================================================
   TÌM KIẾM
========================================================= */

function setupSearch() {

    const searchInput =
        document.querySelector(
            "#product-search, #search-input, [data-product-search]"
        );

    if (!searchInput) return;

    searchInput.addEventListener(
        "input",
        function () {

            filterProducts(
                this.value
            );

        }
    );
}

/* =========================================================
   CHI TIẾT SẢN PHẨM
========================================================= */

function openProductDetail(productId) {

    const product =
        findProduct(productId);

    if (!product) return;

    let modal =
        document.querySelector("#product-detail-modal");

    if (!modal) {

        modal =
            document.createElement("div");

        modal.id =
            "product-detail-modal";

        modal.className =
            "product-detail-modal";

        document.body.appendChild(modal);
    }

    const specificationRows =
        Object.entries(
            product.specifications
        )
            .map(([key, value]) => {

                return `
                    <tr>
                        <th>${key}</th>
                        <td>${value}</td>
                    </tr>
                `;

            })
            .join("");

    const legalRows =
        Object.entries(
            product.legal
        )
            .map(([key, value]) => {

                return `
                    <div class="legal-row">
                        <strong>${key}</strong>
                        <span>${value}</span>
                    </div>
                `;

            })
            .join("");

    const advantageList =
        product.advantages
            .map(item => `<li>${item}</li>`)
            .join("");

    const ingredientList =
        product.ingredients
            .map(item => `<li>${item}</li>`)
            .join("");

    const howToUseList =
        product.howToUse
            .map((item, index) => {

                return `
                    <li>
                        <strong>
                            ${vnText(`Bước ${index + 1}:`)}
                        </strong>
                        ${item}
                    </li>
                `;

            })
            .join("");

    const noteList =
        product.notes
            .map(item => `<li>${item}</li>`)
            .join("");

    modal.innerHTML = `

        <div
            class="product-modal-overlay"
            onclick="closeProductDetail(event)"
        ></div>

        <div
            class="product-detail-container"
            role="dialog"
            aria-modal="true"
            aria-label="${product.name}"
        >

            <button
                type="button"
                class="product-detail-close"
                onclick="closeProductDetail()"
                aria-label="${vnText("Đóng")}"
            >
                ×
            </button>

            <div class="product-detail-grid">

                <!-- HÌNH ẢNH -->

                <div class="product-detail-gallery">

                    <div class="product-main-image-wrap">

                        <img
                            id="product-main-image"
                            src="${product.images[0]}"
                            alt="${product.name}"
                        >

                    </div>

                    <div class="product-thumbnails">

                        ${product.images.map((image, index) => {

                            return `
                                <button
                                    type="button"
                                    class="product-thumbnail ${
                                        index === 0
                                            ? "active"
                                            : ""
                                    }"
                                    onclick="changeProductImage(
                                        '${image}',
                                        this
                                    )"
                                >

                                    <img
                                        src="${image}"
                                        alt="${product.name} - hình ${index + 1}"
                                    >

                                </button>
                            `;

                        }).join("")}

                    </div>

                </div>

                <!-- THÔNG TIN -->

                <div class="product-detail-info">

                    <div class="product-detail-brand">
                        ${product.brand}
                    </div>

                    <h2>
                        ${product.name}
                    </h2>

                    <div class="detail-price">
                        ${formatPrice(product.price)}

                        ${
                            product.oldPrice
                                ? `
                                    <span>
                                        ${formatPrice(product.oldPrice)}
                                    </span>
                                `
                                : ""
                        }
                    </div>

                    <p class="detail-description">
                        ${product.shortDescription}
                    </p>

                    <button
                        type="button"
                        class="detail-add-cart"
                        onclick="addToCart('${product.id}')"
                    >
                        ${vnText("Thêm vào giỏ hàng")}
                    </button>

                    <div class="legal-information">

                        <h3>
                            ${vnText("Thông tin sản phẩm")}
                        </h3>

                        ${legalRows}

                    </div>

                </div>

            </div>

            <!-- NỘI DUNG CHI TIẾT -->

            <div class="product-long-content">

                <section class="detail-section">

                    <h3>
                        ${vnText("Giới thiệu sản phẩm")}
                    </h3>

                    <p>
                        ${product.description}
                    </p>

                    <figure class="detail-feature-image">

                        <img
                            src="${product.detailImage}"
                            alt="${product.imageCaption}"
                            loading="lazy"
                        >

                        <figcaption>
                            ${product.imageCaption}
                        </figcaption>

                    </figure>

                </section>


                <section class="detail-section">

                    <h3>
                        ${vnText("Thông số sản phẩm")}
                    </h3>

                    <div class="specification-table-wrap">

                        <table class="specification-table">

                            <thead>

                                <tr>
                                    <th>${vnText("Thông số")}</th>
                                    <th>${vnText("Nội dung")}</th>
                                </tr>

                            </thead>

                            <tbody>
                                ${specificationRows}
                            </tbody>

                        </table>

                    </div>

                </section>


                <section class="detail-section">

                    <h3>
                        ${vnText("Ưu điểm nổi bật dầu gội thảo dược Tóc Mây")}
                    </h3>

                    <p>
                        ${product.advantageIntro}
                    </p>

                    <ul class="detail-list">
                        ${advantageList}
                    </ul>

                </section>


                <section class="detail-section">

                    <h3>
                        ${vnText("Công dụng dầu gội thảo dược Tóc Mây")}
                    </h3>

                    <p>
                        ${product.benefits}
                    </p>

                </section>


                <section class="detail-section">

                    <h3>
                        ${vnText("Thành phần của sản phẩm")}
                    </h3>

                    <p>
                        ${product.ingredientsIntro}
                    </p>

                    <ul class="detail-list">
                        ${ingredientList}
                    </ul>

                </section>


                <section class="detail-section final-message">

                    <p>
                        <strong>
                            ${product.finalMessage}
                        </strong>
                    </p>

                </section>


                <section class="detail-section">

                    <h3>
                        ${vnText("Hướng dẫn sử dụng")}
                    </h3>

                    <p>
                        ${vnText(
                            "Các bước gội đầu với dầu gội thảo dược Tóc Mây đơn giản như sau:"
                        )}
                    </p>

                    <ol class="detail-list">
                        ${howToUseList}
                    </ol>

                </section>


                <section class="detail-section warning-section">

                    <h3>
                        ${vnText("Lưu ý quan trọng")}
                    </h3>

                    <ul class="detail-list">
                        ${noteList}
                    </ul>

                </section>

            </div>

        </div>
    `;

    modal.classList.add("active");

    document.body.classList.add(
        "product-detail-open"
    );

    setupProductDetailStyles();
}


/* =========================================================
   ĐỔI HÌNH ẢNH CHÍNH
========================================================= */

function changeProductImage(imageUrl, button) {

    const mainImage =
        document.querySelector(
            "#product-main-image"
        );

    if (!mainImage) return;

    mainImage.src = imageUrl;

    document
        .querySelectorAll(
            ".product-thumbnail"
        )
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });

    if (button) {

        button.classList.add(
            "active"
        );
    }
}

/* =========================================================
   ĐÓNG CHI TIẾT
========================================================= */

function closeProductDetail(event) {

    if (
        event &&
        event.target &&
        !event.target.classList.contains(
            "product-modal-overlay"
        )
    ) {
        return;
    }

    const modal =
        document.querySelector(
            "#product-detail-modal"
        );

    if (!modal) return;

    modal.classList.remove("active");

    document.body.classList.remove(
        "product-detail-open"
    );
}

/* =========================================================
   CSS CHO SẢN PHẨM VÀ CHI TIẾT
========================================================= */

function setupProductDetailStyles() {

    if (
        document.querySelector(
            "#toc-may-script-styles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "toc-may-script-styles";

    style.textContent = `

        /* =========================================
           PRODUCT GRID
        ========================================= */

        #product-list {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding: 30px;
            display: grid;
            grid-template-columns:
                repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            box-sizing: border-box;
        }

        .product-card {
            width: 100%;
            min-width: 0;
            overflow: hidden;
            background: #f8f2e6;
            border-radius: 20px;
            border: 1px solid rgba(80, 100, 75, .12);
            box-shadow:
                0 10px 30px rgba(50, 70, 45, .08);
            transition:
                transform .25s ease,
                box-shadow .25s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow:
                0 18px 40px rgba(50, 70, 45, .14);
        }

        .product-image-button {
            display: block;
            width: 100%;
            padding: 0;
            margin: 0;
            border: 0;
            background: transparent;
            cursor: pointer;
        }

        .product-image {
            display: block;
            width: 100%;
            height: 430px;
            object-fit: cover;
            object-position: center;
        }

        .product-card-content {
            padding: 22px;
        }

        .product-brand {
            margin-bottom: 6px;
            font-size: 13px;
            color: #70836b;
            font-weight: 700;
        }

        .product-name {
            margin: 0 0 12px;
            font-size: 22px;
            line-height: 1.35;
            color: #30452f;
        }

        .product-price-row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 18px;
        }

        .product-price {
            font-size: 21px;
            font-weight: 800;
            color: #496347;
        }

        .product-old-price {
            color: #999;
            text-decoration: line-through;
            font-size: 15px;
        }

        .product-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .product-actions button,
        .detail-add-cart {
            min-height: 46px;
            padding: 11px 15px;
            border: 0;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 700;
            transition: .2s ease;
        }

        .view-product-btn {
            background: #e3eadc;
            color: #385136;
        }

        .add-cart-btn,
        .detail-add-cart {
            background: #526b4d;
            color: white;
        }

        .product-actions button:hover,
        .detail-add-cart:hover {
            transform: translateY(-2px);
            opacity: .92;
        }

        .no-products {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: #66755f;
            font-size: 18px;
        }


        /* =========================================
           MODAL
        ========================================= */

        body.product-detail-open {
            overflow: hidden;
        }

        .product-detail-modal {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: none;
        }

        .product-detail-modal.active {
            display: block;
        }

        .product-modal-overlay {
            position: absolute;
            inset: 0;
            background:
                rgba(27, 40, 25, .62);
            backdrop-filter: blur(4px);
        }

        .product-detail-container {
            position: relative;
            width: min(1100px, calc(100% - 30px));
            max-height: calc(100vh - 30px);
            overflow-y: auto;
            margin: 15px auto;
            background: #fbf6ea;
            border-radius: 24px;
            box-shadow:
                0 25px 80px rgba(0, 0, 0, .25);
        }

        .product-detail-close {
            position: absolute;
            top: 18px;
            right: 18px;
            z-index: 5;
            width: 44px;
            height: 44px;
            border: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, .92);
            color: #34482f;
            font-size: 30px;
            line-height: 1;
            cursor: pointer;
            box-shadow:
                0 5px 18px rgba(0, 0, 0, .1);
        }

        .product-detail-grid {
            display: grid;
            grid-template-columns:
                minmax(0, 1.05fr)
                minmax(0, .95fr);
            gap: 40px;
            padding: 40px;
        }


        /* =========================================
           GALLERY
        ========================================= */

        .product-detail-gallery {
            min-width: 0;
        }

        .product-main-image-wrap {
            width: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            border-radius: 20px;
            background: #eee7d8;
        }

        .product-main-image-wrap img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .product-thumbnails {
            display: grid;
            grid-template-columns:
                repeat(3, 1fr);
            gap: 12px;
            margin-top: 12px;
        }

        .product-thumbnail {
            padding: 0;
            border: 2px solid transparent;
            border-radius: 12px;
            overflow: hidden;
            background: #eee7d8;
            cursor: pointer;
            aspect-ratio: 1 / 1;
        }

        .product-thumbnail.active {
            border-color: #5c7655;
        }

        .product-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }


        /* =========================================
           DETAIL INFO
        ========================================= */

        .product-detail-brand {
            margin-bottom: 8px;
            color: #6c8065;
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: .08em;
        }

        .product-detail-info h2 {
            margin: 0 0 18px;
            color: #30452f;
            font-size: clamp(28px, 4vw, 42px);
            line-height: 1.15;
        }

        .detail-price {
            margin-bottom: 20px;
            color: #4f6949;
            font-size: 28px;
            font-weight: 900;
        }

        .detail-price span {
            margin-left: 8px;
            color: #999;
            font-size: 16px;
            font-weight: 500;
            text-decoration: line-through;
        }

        .detail-description {
            color: #5e695b;
            font-size: 16px;
            line-height: 1.8;
        }

        .detail-add-cart {
            width: 100%;
            margin: 15px 0 28px;
            font-size: 16px;
        }

        .legal-information {
            padding-top: 22px;
            border-top: 1px solid rgba(70, 90, 65, .14);
        }

        .legal-information h3 {
            margin: 0 0 15px;
            color: #385136;
            font-size: 19px;
        }

        .legal-row {
            display: grid;
            grid-template-columns:
                minmax(150px, .7fr)
                1fr;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(70, 90, 65, .08);
            font-size: 14px;
            line-height: 1.6;
        }

        .legal-row strong {
            color: #40533c;
        }

        .legal-row span {
            color: #626b5f;
        }


        /* =========================================
           LONG CONTENT
        ========================================= */

        .product-long-content {
            padding: 0 40px 50px;
        }

        .detail-section {
            padding: 32px 0;
            border-top: 1px solid rgba(70, 90, 65, .12);
        }

        .detail-section h3 {
            margin: 0 0 18px;
            color: #354c32;
            font-size: clamp(22px, 3vw, 30px);
            line-height: 1.3;
        }

        .detail-section p {
            margin: 0 0 16px;
            color: #5d665a;
            line-height: 1.9;
            font-size: 16px;
        }

        .detail-list {
            margin: 15px 0 0;
            padding-left: 25px;
        }

        .detail-list li {
            margin-bottom: 12px;
            color: #5d665a;
            line-height: 1.8;
        }

        .detail-feature-image {
            margin: 25px 0 0;
            text-align: center;
        }

        .detail-feature-image img {
            display: block;
            width: 100%;
            max-width: 800px;
            max-height: 700px;
            object-fit: cover;
            margin: 0 auto;
            border-radius: 18px;
        }

        .detail-feature-image figcaption {
            margin-top: 10px;
            color: #75806f;
            font-size: 14px;
            font-style: italic;
        }

        .specification-table-wrap {
            width: 100%;
            overflow-x: auto;
        }

        .specification-table {
            width: 100%;
            border-collapse: collapse;
            background: #fffdf8;
            border-radius: 14px;
            overflow: hidden;
        }

        .specification-table th,
        .specification-table td {
            padding: 15px;
            border: 1px solid #e5e1d7;
            text-align: left;
            vertical-align: top;
            line-height: 1.6;
        }

        .specification-table th {
            width: 28%;
            background: #e5ecdf;
            color: #3d5539;
        }

        .specification-table td {
            color: #5e665b;
        }

        .final-message {
            padding: 28px;
            border-radius: 18px;
            background: #e4ecde;
        }

        .final-message p {
            margin: 0;
            color: #40583c;
        }

        .warning-section {
            padding: 28px;
            border-radius: 18px;
            background: #f1eadb;
        }


        /* =========================================
           GIỎ HÀNG
        ========================================= */

        .cart-item {
            display: flex;
            gap: 15px;
            padding: 15px 0;
            border-bottom: 1px solid #e3e0d8;
        }

        .cart-item-image {
            width: 80px;
            height: 80px;
            flex: 0 0 80px;
            object-fit: cover;
            border-radius: 10px;
        }

        .cart-item-info {
            flex: 1;
            min-width: 0;
        }

        .cart-item-info h4 {
            margin: 0 0 7px;
            color: #354b32;
        }

        .cart-item-price {
            color: #5b7055;
            font-size: 14px;
        }

        .cart-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }

        .cart-quantity button {
            width: 30px;
            height: 30px;
            border: 0;
            border-radius: 8px;
            background: #e1e9dc;
            color: #40563c;
            cursor: pointer;
            font-size: 18px;
        }

        .cart-item-total {
            margin-top: 7px;
            font-weight: 800;
            color: #4f6949;
        }

        .remove-cart-item {
            margin-top: 7px;
            padding: 0;
            border: 0;
            background: transparent;
            color: #9b6a60;
            cursor: pointer;
        }

        .empty-cart {
            padding: 50px 20px;
            text-align: center;
            color: #6e786a;
        }

        .empty-cart-icon {
            margin-bottom: 10px;
            font-size: 40px;
        }


        /* =========================================
           TOAST
        ========================================= */

        #toast-message {
            position: fixed;
            left: 50%;
            bottom: 25px;
            z-index: 100000;
            transform:
                translate(-50%, 20px);
            opacity: 0;
            pointer-events: none;
            padding: 13px 20px;
            border-radius: 12px;
            background: #405a3c;
            color: white;
            font-size: 14px;
            box-shadow:
                0 10px 30px rgba(0, 0, 0, .18);
            transition:
                opacity .25s ease,
                transform .25s ease;
        }

        #toast-message.show {
            opacity: 1;
            transform:
                translate(-50%, 0);
        }


        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 800px) {

            #product-list {
                grid-template-columns:
                    repeat(2, minmax(0, 1fr));
                padding: 18px;
                gap: 18px;
            }

            .product-image {
                height: 300px;
            }

            .product-card-content {
                padding: 16px;
            }

            .product-name {
                font-size: 18px;
            }

            .product-actions {
                grid-template-columns: 1fr;
            }

            .product-detail-container {
                width: calc(100% - 16px);
                max-height: calc(100vh - 16px);
                margin: 8px auto;
                border-radius: 18px;
            }

            .product-detail-grid {
                grid-template-columns: 1fr;
                padding: 25px 20px;
                gap: 25px;
            }

            .product-long-content {
                padding: 0 20px 35px;
            }

            .legal-row {
                grid-template-columns: 1fr;
                gap: 3px;
            }

            .detail-section {
                padding: 25px 0;
            }
        }

        @media (max-width: 520px) {

            #product-list {
                grid-template-columns: 1fr;
                padding: 12px;
            }

            .product-image {
                height: 360px;
            }

            .product-detail-grid {
                padding: 20px 15px;
            }

            .product-long-content {
                padding: 0 15px 30px;
            }

            .product-detail-close {
                top: 10px;
                right: 10px;
                width: 38px;
                height: 38px;
                font-size: 25px;
            }

            .product-main-image-wrap {
                border-radius: 14px;
            }

            .specification-table th,
            .specification-table td {
                padding: 11px;
                font-size: 14px;
            }
        }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   ĐẶT HÀNG
========================================================= */

function submitOrder() {

    if (!cart.length) {

        showToast(
            vnText("Giỏ hàng đang trống")
        );

        return;
    }

    const order = {
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),

        total: cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        ),

        createdAt:
            new Date().toISOString()
    };

    console.log(
        "Đơn hàng:",
        order
    );

    cart = [];

    saveCart();

    showToast(
        vnText("Đặt hàng thành công!")
    );
}


/* =========================================================
   TƯ VẤN
========================================================= */

function submitConsult() {

    showToast(
        vnText(
            "Cảm ơn bạn! Cỏ Mềm sẽ liên hệ tư vấn."
        )
    );
}


/* =========================================================
   KHỞI TẠO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* Chuẩn hóa toàn bộ dữ liệu sản phẩm */
        products.forEach(product => {

            Object.keys(product).forEach(key => {

                if (
                    typeof product[key] === "string"
                ) {
                    product[key] =
                        vnText(product[key]);
                }

            });

        });

        renderProducts();

        updateCart();

        setupSearch();

        setupProductDetailStyles();

        window.cart = cart;

    }
);


/* =========================================================
   PHÍM ESC ĐỂ ĐÓNG POPUP
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProductDetail();

        }

    }
);


/* =========================================================
   EXPORT RA WINDOW
   Cho phép HTML gọi trực tiếp các hàm
========================================================= */

window.products = products;

window.vnText = vnText;

window.renderProducts = renderProducts;

window.filterProducts = filterProducts;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.changeProductImage =
    changeProductImage;

window.addToCart =
    addToCart;

window.removeFromCart =
    removeFromCart;

window.changeQuantity =
    changeQuantity;

window.updateCart =
    updateCart;

window.submitOrder =
    submitOrder;

window.submitConsult =
    submitConsult;

window.showToast =
    showToast;

window.formatPrice =
    formatPrice;
```
