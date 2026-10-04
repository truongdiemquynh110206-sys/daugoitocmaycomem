```javascript
/* =========================================================
   CỎ MỀM - DẦU GỘI THẢO DƯỢC TÓC MÂY
   File: script.js

   Chức năng:
   - Dữ liệu sản phẩm
   - Hiển thị sản phẩm
   - Lọc sản phẩm
   - Chi tiết sản phẩm
   - Giỏ hàng
   - Thêm / xóa / tăng giảm số lượng
   - Đặt hàng
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [
    {
        id: "toc-may",

        name: "Dầu gội thảo dược Tóc Mây",

        price: 189000,
        oldPrice: 219000,

        image:
            "https://media.comem.vn/uploads/2024/07/srm_tram_tra_(8)_sp2x.webp",

        detailImage:
            "https://static.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-1.jpg",

        category: "Tất cả sản phẩm",

        brand: "Cỏ Mềm",

        weight: "300 gram",

        origin: "Việt Nam",

        scent:
            "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên",

        expiry: "24 tháng",

        hairProblems:
            "Tóc xơ, gàu, gãy rụng nhiều",

        publicationNumber:
            "18429/23/CBMP-HN",

        responsibleCompany:
            "Công ty mỹ phẩm thiên nhiên Cỏ Mềm",

        address:
            "Số 225, phố Trần Đăng Ninh, phường Cầu Giấy, TP Hà Nội",

        description:
            "Với chiết xuất từ Bồ kết và thảo dược truyền thống cùng các hoạt chất thiên nhiên, Dầu gội thảo dược Tóc Mây giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn. Sản phẩm có thể dùng cho cả những người có da đầu nhạy cảm.",

        usage:
            "Dầu gội đầu giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn, cho mái tóc mềm mượt, chắc khoẻ. Góp phần thúc đẩy sự phát triển của nang tóc.",

        advantages:
            [
                "Không silicon",
                "Không sulfate",
                "Phù hợp với người có da đầu nhạy cảm",
                "Kết hợp thảo mộc truyền thống và hoạt chất thiên nhiên hiện đại",
                "Làm sạch tóc và da đầu dịu nhẹ",
                "Hỗ trợ giảm gàu và tình trạng tóc gãy rụng"
            ],

        ingredients: [
            "Nước tinh khiết (Purified water)",
            "Cao dược liệu: quả Bồ kết, rễ và lá Dâu Tằm, cỏ Mần Trầu, cỏ Ngũ Sắc, lá Tre, quả Mắc Kham, quả Bồ Hòn",
            "Propanediol",
            "Glycerin",
            "Tinh dầu vỏ Bưởi (Citrus maxima peel essential oil)",
            "Tinh dầu Hương nhu (Ocimum gratissimum essential oil)",
            "Tinh dầu Sả chanh (Cymbopogon citratus essential oil)",
            "Dầu quả Bơ (Persea gratissima fruit oil)",
            "Vitamin E (Tocopherol)",
            "Phenoxyethanol"
        ],

        ingredientBenefits: [
            {
                name: "Bồ kết, Bồ hòn, Cỏ ngũ sắc",
                description:
                    "Chứa saponin giúp tạo bọt tự nhiên và làm sạch gàu."
            },
            {
                name: "Hương nhu và Cỏ mần trầu",
                description:
                    "Giúp làm sạch gàu và hỗ trợ ngăn ngừa rụng tóc."
            },
            {
                name: "Tinh dầu vỏ Bưởi",
                description:
                    "Góp phần ngăn ngừa tình trạng rụng tóc."
            },
            {
                name: "Tang bạch bì",
                description:
                    "Hỗ trợ ngăn ngừa rụng tóc."
            },
            {
                name: "Tinh dầu Sả chanh",
                description:
                    "Mang hương thơm nhẹ nhàng, tạo cảm giác thư giãn khi gội đầu."
            },
            {
                name: "Dầu quả Bơ",
                description:
                    "Chứa nhiều vitamin A, C, D, E, hỗ trợ tóc khô, phục hồi tóc hư tổn, giúp tóc mềm mượt và chắc khỏe."
            },
            {
                name: "Protein từ đậu Hà Lan",
                description:
                    "Cetearamidoethyldiethonium Succinoyl Hydrolyzed Pea Protein có khả năng thay thế silicone, giúp làm mượt và phục hồi tóc hư tổn mà không gây bít tắc nang tóc."
            }
        ],

        finalMessage:
            "Dầu gội thảo dược Tóc Mây là lựa chọn chân ái dành cho mái tóc của bạn. Nếu bạn đang tìm giải pháp cải thiện mái tóc mềm mượt, chắc khỏe, đừng bỏ qua dầu gội thảo dược Tóc Mây nhà Cỏ bạn nhé!"
    }
];


/* =========================================================
   2. GIỎ HÀNG
   ========================================================= */

let cart = JSON.parse(
    localStorage.getItem("tocMayCart")
) || [];


/* =========================================================
   3. ĐỊNH DẠNG GIÁ
   ========================================================= */

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(price);
}


/* =========================================================
   4. LƯU GIỎ HÀNG
   ========================================================= */

function saveCart() {
    localStorage.setItem(
        "tocMayCart",
        JSON.stringify(cart)
    );
}


/* =========================================================
   5. CẬP NHẬT GIỎ HÀNG
   ========================================================= */

function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    /* Tổng số sản phẩm */

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    if (cartCount) {
        cartCount.textContent = totalQuantity;
    }


    /* Nếu chưa có sản phẩm */

    if (cartItems) {

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    <p>Giỏ hàng đang trống.</p>
                    <p>Hãy chọn sản phẩm bạn yêu thích nhé!</p>
                </div>
            `;

        } else {

            cartItems.innerHTML = cart.map(item => {

                return `
                    <div class="cart-item">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            class="cart-item-image"
                        >

                        <div class="cart-item-info">

                            <h4>${item.name}</h4>

                            <p class="cart-item-price">
                                ${formatPrice(item.price)}
                            </p>

                            <div class="cart-quantity">

                                <button
                                    onclick="changeQuantity('${item.id}', -1)"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    onclick="changeQuantity('${item.id}', 1)"
                                >
                                    +
                                </button>

                            </div>

                            <button
                                class="remove-cart-item"
                                onclick="removeFromCart('${item.id}')"
                            >
                                Xóa
                            </button>

                        </div>

                    </div>
                `;

            }).join("");
        }
    }


    /* Tổng tiền */

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
   6. THÊM SẢN PHẨM VÀO GIỎ
   ========================================================= */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }


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

    updateCart();

    showToast(
        "Đã thêm sản phẩm vào giỏ hàng!"
    );
}


/* =========================================================
   7. XÓA SẢN PHẨM KHỎI GIỎ
   ========================================================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    updateCart();
}


/* =========================================================
   8. TĂNG / GIẢM SỐ LƯỢNG
   ========================================================= */

function changeQuantity(productId, change) {

    const item = cart.find(
        product => product.id === productId
    );

    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }


    saveCart();

    updateCart();
}


/* =========================================================
   9. THÔNG BÁO
   ========================================================= */

function showToast(message) {

    let toast =
        document.getElementById("toast-message");


    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast-message";

        toast.innerHTML = `
            <span></span>
        `;

        document.body.appendChild(toast);


        const style =
            document.createElement("style");

        style.textContent = `

            #toast-message {
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                background: #5f735c;
                color: white;
                padding: 13px 22px;
                border-radius: 30px;
                font-size: 15px;
                z-index: 99999;
                box-shadow: 0 8px 25px rgba(0,0,0,0.18);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;
            }

            #toast-message.show {
                opacity: 1;
                bottom: 45px;
            }

        `;

        document.head.appendChild(style);
    }


    toast.querySelector("span").textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================================================
   10. HIỂN THỊ CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return;
    }


    let modal =
        document.getElementById(
            "product-detail-modal"
        );


    /* Nếu modal chưa tồn tại thì tạo */

    if (!modal) {

        modal = document.createElement("div");

        modal.id = "product-detail-modal";

        document.body.appendChild(modal);
    }


    modal.innerHTML = `

        <div
            class="product-detail-overlay"
            onclick="closeProductDetail(event)"
        >

            <div
                class="product-detail-box"
                onclick="event.stopPropagation()"
            >

                <button
                    class="product-detail-close"
                    onclick="closeProductDetail()"
                    aria-label="Đóng"
                >
                    ×
                </button>


                <!-- HÌNH ẢNH -->

                <div class="product-detail-image">

                    <img
                        src="${product.detailImage}"
                        alt="${product.name}"
                    >

                </div>


                <!-- THÔNG TIN -->

                <div class="product-detail-content">

                    <p class="product-brand">
                        CỎ MỀM
                    </p>

                    <h2>
                        ${product.name}
                    </h2>


                    <div class="product-detail-price">

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                        <del>
                            ${formatPrice(product.oldPrice)}
                        </del>

                    </div>


                    <!-- MÔ TẢ -->

                    <section class="detail-section">

                        <h3>
                            Giới thiệu sản phẩm
                        </h3>

                        <p>
                            ${product.description}
                        </p>

                    </section>


                    <!-- THÔNG SỐ -->

                    <section class="detail-section">

                        <h3>
                            Thông số sản phẩm
                        </h3>

                        <div class="product-spec-table">

                            <div class="spec-row">

                                <div class="spec-title">
                                    Tên sản phẩm
                                </div>

                                <div>
                                    ${product.name}
                                </div>

                            </div>


                            <div class="spec-row">

                                <div class="spec-title">
                                    Khối lượng
                                </div>

                                <div>
                                    ${product.weight}
                                </div>

                            </div>


                            <div class="spec-row">

                                <div class="spec-title">
                                    Vấn đề của tóc
                                </div>

                                <div>
                                    ${product.hairProblems}
                                </div>

                            </div>


                            <div class="spec-row">

                                <div class="spec-title">
                                    Công dụng
                                </div>

                                <div>
                                    Làm sạch tóc, da đầu,
                                    ngăn ngừa cải thiện tình
                                    trạng gàu, gãy rụng,
                                    chẻ ngọn cho mái tóc
                                    mềm mượt, chắc khoẻ
                                </div>

                            </div>


                            <div class="spec-row">

                                <div class="spec-title">
                                    Mùi hương
                                </div>

                                <div>
                                    ${product.scent}
                                </div>

                            </div>


                            <div class="spec-row">

                                <div class="spec-title">
                                    Hạn sử dụng
                                </div>

                                <div>
                                    ${product.expiry}
                                </div>

                            </div>

                        </div>

                    </section>


                    <!-- THÔNG TIN PHÁP LÝ -->

                    <section class="detail-section">

                        <h3>
                            Thông tin sản phẩm
                        </h3>


                        <div class="legal-info">

                            <p>
                                <strong>
                                    Số công bố với Sở Y Tế:
                                </strong>

                                ${product.publicationNumber}
                            </p>


                            <p>
                                <strong>
                                    Chịu trách nhiệm về sản phẩm:
                                </strong>

                                ${product.responsibleCompany}
                            </p>


                            <p>
                                <strong>
                                    Địa chỉ:
                                </strong>

                                ${product.address}
                            </p>


                            <p>
                                <strong>
                                    Xuất xứ:
                                </strong>

                                ${product.origin}
                            </p>

                        </div>

                    </section>


                    <!-- ƯU ĐIỂM -->

                    <section class="detail-section">

                        <h3>
                            Ưu điểm
                        </h3>

                        <p>
                            Dầu gội Thảo dược
                            <strong>
                                “Không silicon, Không sulfate”
                            </strong>,
                            phù hợp người có da đầu nhạy cảm.
                            Công thức kết hợp các thảo mộc
                            truyền thống và hoạt chất thiên nhiên
                            hiện đại giúp phát huy tác dụng.
                        </p>


                        <ul class="benefit-list">

                            ${product.ingredientBenefits
                                .map(item => `
                                    <li>
                                        <strong>
                                            ${item.name}:
                                        </strong>

                                        ${item.description}
                                    </li>
                                `)
                                .join("")}

                        </ul>

                    </section>


                    <!-- CÔNG DỤNG -->

                    <section class="detail-section">

                        <h3>
                            Công dụng
                        </h3>

                        <p>
                            ${product.usage}
                        </p>

                    </section>


                    <!-- THÀNH PHẦN -->

                    <section class="detail-section">

                        <h3>
                            Thành phần
                        </h3>

                        <ul class="ingredient-list">

                            ${product.ingredients
                                .map(item => `
                                    <li>
                                        ${item}
                                    </li>
                                `)
                                .join("")}

                        </ul>

                    </section>


                    <!-- HÌNH ẢNH SẢN PHẨM -->

                    <section class="detail-section">

                        <div class="detail-extra-image">

                            <img
                                src="${product.detailImage}"
                                alt="${product.name}"
                            >

                            <p>
                                ${product.name} Cỏ Mềm
                            </p>

                        </div>

                    </section>


                    <!-- LỜI KẾT -->

                    <section class="detail-final-message">

                        <p>
                            ${product.finalMessage}
                        </p>

                    </section>


                    <!-- NÚT MUA -->

                    <div class="detail-actions">

                        <button
                            class="btn-add-to-cart-detail"
                            onclick="addToCart('${product.id}')"
                        >
                            Thêm vào giỏ hàng
                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;


    modal.classList.add("active");

    document.body.classList.add(
        "product-detail-open"
    );
}


/* =========================================================
   11. ĐÓNG CHI TIẾT SẢN PHẨM
   ========================================================= */

function closeProductDetail(event) {

    if (
        event &&
        event.target &&
        !event.target.classList.contains(
            "product-detail-overlay"
        )
    ) {
        return;
    }


    const modal =
        document.getElementById(
            "product-detail-modal"
        );


    if (modal) {

        modal.classList.remove("active");

    }


    document.body.classList.remove(
        "product-detail-open"
    );
}


/* =========================================================
   12. CSS CHO CHI TIẾT SẢN PHẨM
   ========================================================= */

function setupProductDetailStyles() {

    if (
        document.getElementById(
            "product-detail-styles"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "product-detail-styles";


    style.textContent = `

        body.product-detail-open {
            overflow: hidden;
        }


        #product-detail-modal {
            position: fixed;
            inset: 0;
            z-index: 99990;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease;
        }


        #product-detail-modal.active {
            visibility: visible;
            opacity: 1;
        }


        .product-detail-overlay {
            position: absolute;
            inset: 0;
            background: rgba(28, 39, 28, 0.72);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px;
        }


        .product-detail-box {
            width: min(1100px, 100%);
            max-height: 92vh;
            overflow-y: auto;
            background: #fdfaf2;
            border-radius: 20px;
            position: relative;
            box-shadow:
                0 25px 80px rgba(0,0,0,0.25);
        }


        .product-detail-close {
            position: absolute;
            top: 18px;
            right: 18px;
            width: 42px;
            height: 42px;
            border: none;
            border-radius: 50%;
            background: white;
            color: #3e503d;
            font-size: 28px;
            cursor: pointer;
            z-index: 10;
            box-shadow:
                0 3px 15px rgba(0,0,0,0.12);
        }


        .product-detail-image {
            width: 100%;
            background: #f2eee3;
            text-align: center;
        }


        .product-detail-image img {
            display: block;
            width: 100%;
            max-height: 500px;
            object-fit: contain;
        }


        .product-detail-content {
            padding: 40px;
        }


        .product-brand {
            color: #6b7f64;
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 8px;
        }


        .product-detail-content h2 {
            color: #344532;
            font-size: 32px;
            margin: 0 0 15px;
        }


        .product-detail-price {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 30px;
        }


        .product-detail-price strong {
            color: #6b7f64;
            font-size: 26px;
        }


        .product-detail-price del {
            color: #999;
        }


        .detail-section {
            margin-top: 32px;
        }


        .detail-section h3 {
            color: #43553f;
            font-size: 21px;
            margin-bottom: 14px;
            padding-bottom: 8px;
            border-bottom: 1px solid #d9ddcf;
        }


        .detail-section p {
            color: #4f554e;
            line-height: 1.8;
            font-size: 15px;
        }


        .product-spec-table {
            border: 1px solid #d9ddcf;
            border-radius: 10px;
            overflow: hidden;
        }


        .spec-row {
            display: grid;
            grid-template-columns: 200px 1fr;
            border-bottom: 1px solid #d9ddcf;
        }


        .spec-row:last-child {
            border-bottom: none;
        }


        .spec-row > div {
            padding: 14px 16px;
            line-height: 1.6;
        }


        .spec-title {
            background: #edf0e6;
            color: #3f503b;
            font-weight: 700;
        }


        .legal-info {
            background: #f1f3eb;
            padding: 20px;
            border-radius: 12px;
        }


        .legal-info p {
            margin: 8px 0;
        }


        .benefit-list,
        .ingredient-list {
            padding-left: 22px;
        }


        .benefit-list li,
        .ingredient-list li {
            color: #4f554e;
            line-height: 1.8;
            margin-bottom: 10px;
        }


        .detail-extra-image {
            text-align: center;
        }


        .detail-extra-image img {
            max-width: 100%;
            width: 600px;
            border-radius: 12px;
        }


        .detail-extra-image p {
            text-align: center;
            color: #777;
            font-size: 14px;
        }


        .detail-final-message {
            margin-top: 35px;
            padding: 25px;
            background: #e9eee2;
            border-radius: 15px;
        }


        .detail-final-message p {
            margin: 0;
            color: #3d4d39;
            font-weight: 500;
        }


        .detail-actions {
            margin-top: 30px;
            display: flex;
            justify-content: center;
        }


        .btn-add-to-cart-detail {
            border: none;
            background: #65785f;
            color: white;
            padding: 15px 35px;
            border-radius: 30px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: 0.25s;
        }


        .btn-add-to-cart-detail:hover {
            background: #4f634a;
            transform: translateY(-2px);
        }


        @media (max-width: 700px) {

            .product-detail-overlay {
                padding: 10px;
            }


            .product-detail-box {
                max-height: 95vh;
                border-radius: 15px;
            }


            .product-detail-content {
                padding: 22px;
            }


            .product-detail-content h2 {
                font-size: 25px;
            }


            .spec-row {
                grid-template-columns: 1fr;
            }


            .spec-title {
                border-bottom: 1px solid #d9ddcf;
            }


            .product-detail-image img {
                max-height: 350px;
            }

        }

    `;


    document.head.appendChild(style);
}


/* =========================================================
   13. LỌC SẢN PHẨM
   ========================================================= */

function filterProducts(keyword = "") {

    const keywordLower =
        keyword.trim().toLowerCase();


    return products.filter(product => {

        return (
            product.name
                .toLowerCase()
                .includes(keywordLower)
            ||
            product.hairProblems
                .toLowerCase()
                .includes(keywordLower)
            ||
            product.description
                .toLowerCase()
                .includes(keywordLower)
        );

    });
}


/* =========================================================
   14. HIỂN THỊ DANH SÁCH SẢN PHẨM
   ========================================================= */

function renderProducts(list = products) {

    const container =
        document.querySelector(
            "#product-list"
        );


    if (!container) {
        return;
    }


    container.innerHTML = list.map(product => {

        return `

            <article
                class="product-card"
                data-product-id="${product.id}"
            >

                <div
                    class="product-image-wrapper"
                    onclick="openProductDetail('${product.id}')"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                    >

                </div>


                <div class="product-info">

                    <h3
                        onclick="openProductDetail('${product.id}')"
                        style="cursor:pointer;"
                    >
                        ${product.name}
                    </h3>


                    <div class="product-price">

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                        <del>
                            ${formatPrice(product.oldPrice)}
                        </del>

                    </div>


                    <button
                        class="btn-view-detail"
                        onclick="openProductDetail('${product.id}')"
                    >
                        Xem chi tiết
                    </button>


                    <button
                        class="btn-add-to-cart"
                        onclick="addToCart('${product.id}')"
                    >
                        Thêm vào giỏ hàng
                    </button>

                </div>

            </article>

        `;

    }).join("");
}


/* =========================================================
   15. TÌM KIẾM SẢN PHẨM
   ========================================================= */

function setupSearch() {

    const searchInput =
        document.querySelector(
            "#product-search"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        function () {

            const result =
                filterProducts(
                    this.value
                );


            renderProducts(result);

        }
    );
}


/* =========================================================
   16. ĐẶT HÀNG
   ========================================================= */

function submitOrder(event) {

    if (event) {
        event.preventDefault();
    }


    if (cart.length === 0) {

        showToast(
            "Giỏ hàng đang trống!"
        );

        return false;
    }


    const form =
        event
            ? event.target
            : null;


    let customerName = "";
    let customerPhone = "";
    let customerAddress = "";


    if (form) {

        const nameInput =
            form.querySelector(
                "[name='name'], #customer-name"
            );

        const phoneInput =
            form.querySelector(
                "[name='phone'], #customer-phone"
            );

        const addressInput =
            form.querySelector(
                "[name='address'], #customer-address"
            );


        if (nameInput) {
            customerName =
                nameInput.value.trim();
        }


        if (phoneInput) {
            customerPhone =
                phoneInput.value.trim();
        }


        if (addressInput) {
            customerAddress =
                addressInput.value.trim();
        }
    }


    const order = {

        id:
            "TM-" +
            Date.now(),

        customer: {
            name: customerName,
            phone: customerPhone,
            address: customerAddress
        },

        products: [...cart],

        total: cart.reduce(
            (total, item) =>
                total +
                item.price * item.quantity,
            0
        ),

        createdAt:
            new Date().toISOString()
    };


    console.log(
        "Đơn hàng:",
        order
    );


    showToast(
        "Đặt hàng thành công!"
    );


    cart = [];

    saveCart();

    updateCart();


    return false;
}


/* =========================================================
   17. TƯ VẤN
   ========================================================= */

function submitConsult(event) {

    if (event) {
        event.preventDefault();
    }


    showToast(
        "Cảm ơn bạn! Cỏ Mềm sẽ tư vấn cho bạn sớm nhất."
    );


    if (event && event.target) {
        event.target.reset();
    }


    return false;
}


/* =========================================================
   18. KHỞI TẠO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupProductDetailStyles();

        renderProducts(products);

        setupSearch();

        updateCart();

    }
);


/* =========================================================
   19. ĐÓNG MODAL BẰNG PHÍM ESC
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
   20. EXPORT RA WINDOW
   ========================================================= */

window.products =
    products;

window.cart =
    cart;

window.renderProducts =
    renderProducts;

window.filterProducts =
    filterProducts;

window.addToCart =
    addToCart;

window.removeFromCart =
    removeFromCart;

window.changeQuantity =
    changeQuantity;

window.updateCart =
    updateCart;

window.openProductDetail =
    openProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.submitOrder =
    submitOrder;

window.submitConsult =
    submitConsult;

window.formatPrice =
    formatPrice;
```
