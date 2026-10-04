```javascript
/* =========================================================
   TÓC MÂY CỎ MỀM
   script.js
   - Dữ liệu sản phẩm
   - Hình ảnh sản phẩm
   - Lọc sản phẩm
   - Chi tiết sản phẩm
   - Giỏ hàng
   - LocalStorage
   - Tăng / giảm số lượng
   - Đặt hàng
========================================================= */


/* =========================================================
   1. THÔNG TIN SẢN PHẨM
========================================================= */

const products = {

    shampoo: {

        id: "shampoo",

        name: "Dầu gội thảo dược Tóc Mây",

        shortName: "Dầu gội Tóc Mây Cỏ Mềm",

        price: 189000,

        oldPrice: 219000,

        quantity: 1,

        category: "Dầu gội thảo dược",

        weight: "300 gram",

        origin: "Việt Nam",

        scent: "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên",

        expiry: "24 tháng",

        image:
            "https://media.comem.vn/uploads/2024/07/srm_tram_tra_(8)_sp2x.webp",

        detailImage:
            "https://static.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-1.jpg",

        description:
            "Với chiết xuất từ Bồ kết và thảo dược truyền thống cùng các hoạt chất thiên nhiên, Dầu gội thảo dược Tóc Mây giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn. Sản phẩm có thể dùng cho cả những người có da đầu nhạy cảm.",

        publicationNumber:
            "18429/23/CBMP-HN",

        responsibleCompany:
            "Công ty mỹ phẩm thiên nhiên Cỏ Mềm",

        address:
            "Số 225, phố Trần Đăng Ninh, phường Cầu Giấy, TP Hà Nội",

        information: `
            Dầu gội thảo dược Tóc Mây là sản phẩm chăm sóc tóc
            lấy cảm hứng từ các thảo dược truyền thống Việt Nam,
            kết hợp cùng các hoạt chất có nguồn gốc thiên nhiên.
            Công thức hướng đến việc làm sạch tóc và da đầu
            một cách dịu nhẹ, đồng thời chăm sóc mái tóc khô,
            xơ, gàu, gãy rụng và chẻ ngọn.
        `,

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

        usage: `
            Làm ướt tóc và da đầu. Lấy một lượng dầu gội vừa đủ,
            thoa đều lên tóc và da đầu, massage nhẹ nhàng để tạo bọt.
            Sau đó xả sạch với nước.

            Có thể sử dụng hàng ngày tùy theo nhu cầu của mái tóc.
        `,

        hairProblems: [
            "Tóc xơ",
            "Tóc nhiều gàu",
            "Tóc gãy rụng nhiều",
            "Tóc chẻ ngọn",
            "Tóc khô và hư tổn"
        ],

        benefits: [

            {
                title: "Bồ kết, Bồ hòn, Cỏ ngũ sắc",

                content:
                    "Chứa saponin giúp tạo bọt tự nhiên và hỗ trợ làm sạch tóc, da đầu."
            },

            {
                title: "Hương nhu và Cỏ mần trầu",

                content:
                    "Giúp làm sạch da đầu và hỗ trợ chăm sóc mái tóc."
            },

            {
                title: "Tinh dầu vỏ Bưởi",

                content:
                    "Góp phần chăm sóc tóc và hỗ trợ hạn chế tình trạng tóc gãy rụng."
            },

            {
                title: "Tang bạch bì",

                content:
                    "Được sử dụng trong công thức với mục đích hỗ trợ chăm sóc tóc."
            },

            {
                title: "Tinh dầu Sả chanh",

                content:
                    "Mang hương thơm nhẹ nhàng, tạo cảm giác thư giãn khi gội đầu."
            },

            {
                title: "Dầu quả Bơ",

                content:
                    "Giàu vitamin A, C, D, E, bổ sung dưỡng chất cho tóc khô, hỗ trợ phục hồi tóc hư tổn và giúp tóc mềm mượt."
            },

            {
                title: "Protein từ đậu Hà Lan",

                content:
                    "Cetearamidoethyldiethonium Succinoyl Hydrolyzed Pea Protein có khả năng thay thế silicone, giúp làm mượt và hỗ trợ phục hồi tóc hư tổn."
            }

        ],

        advantages: `
            Dầu gội Thảo dược Tóc Mây theo thông tin sản phẩm
            là dòng dầu gội không silicon, không sulfate,
            hướng đến người có da đầu nhạy cảm.

            Công thức kết hợp các thảo mộc truyền thống
            cùng các hoạt chất thiên nhiên hiện đại để chăm sóc
            mái tóc một cách dịu nhẹ.
        `,

        benefitsDescription: `
            Dầu gội đầu giúp làm sạch tóc và da đầu,
            ngăn ngừa và cải thiện tình trạng tóc gàu,
            gãy rụng, chẻ ngọn, cho mái tóc mềm mượt,
            chắc khỏe.

            Sản phẩm góp phần hỗ trợ sự phát triển
            của nang tóc.
        `,

        finalMessage: `
            Dầu gội thảo dược Tóc Mây là lựa chọn dành cho
            những ai đang tìm kiếm giải pháp chăm sóc mái tóc
            mềm mượt, chắc khỏe và yêu thích các thành phần
            có nguồn gốc từ thiên nhiên.
        `

    }

};


/* =========================================================
   2. GIỎ HÀNG
========================================================= */

let cart = [];

try {

    cart =
        JSON.parse(
            localStorage.getItem("tocMayCart")
        ) || [];

} catch (error) {

    cart = [];

}


/* =========================================================
   3. ĐỊNH DẠNG GIÁ
========================================================= */

function formatPrice(price) {

    return Number(price).toLocaleString("vi-VN") + "đ";

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
   5. THÊM SẢN PHẨM VÀO GIỎ
========================================================= */

function addToCart(productId = "shampoo") {

    const product =
        products[productId];

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity += 1;

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
        "Đã thêm sản phẩm vào giỏ hàng"
    );


    if (
        typeof openCart === "function"
    ) {

        openCart();

    }

}


/* =========================================================
   6. XÓA SẢN PHẨM
========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    updateCart();

}


/* =========================================================
   7. TĂNG / GIẢM SỐ LƯỢNG
========================================================= */

function changeQuantity(
    productId,
    amount
) {

    const item =
        cart.find(
            product => product.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    updateCart();

}


/* =========================================================
   8. CẬP NHẬT GIỎ HÀNG
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById(
            "cart-items"
        );

    const cartCount =
        document.getElementById(
            "cart-count"
        );

    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    let totalQuantity = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        totalQuantity +=
            item.quantity;

        totalPrice +=
            item.price *
            item.quantity;

    });


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(totalPrice);

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <span>🛒</span>

                <p>
                    Giỏ hàng đang trống
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML =

        cart.map(item => `

            <div class="cart-item">

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <strong>
                        ${formatPrice(item.price)}
                    </strong>


                    <div class="quantity">

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

                </div>


                <button
                    type="button"
                    class="remove-item"
                    onclick="removeFromCart('${item.id}')"
                    aria-label="Xóa sản phẩm"
                >
                    ×
                </button>

            </div>

        `).join("");

}


/* =========================================================
   9. HIỂN THỊ THÔNG BÁO
========================================================= */

function showToast(message) {

    let toast =
        document.getElementById(
            "tocmay-toast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "tocmay-toast";

        document.body.appendChild(
            toast
        );


        const style =
            document.createElement(
                "style"
            );


        style.textContent = `

            #tocmay-toast {

                position: fixed;

                right: 25px;

                bottom: 25px;

                z-index: 99999;

                background: #526a55;

                color: #fff;

                padding: 14px 22px;

                border-radius: 50px;

                font-size: 14px;

                box-shadow:
                    0 10px 30px
                    rgba(0,0,0,.18);

                opacity: 0;

                transform:
                    translateY(15px);

                transition:
                    .3s ease;

            }

            #tocmay-toast.show {

                opacity: 1;

                transform:
                    translateY(0);

            }

        `;


        document.head.appendChild(
            style
        );

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.tocMayToastTimer
    );


    window.tocMayToastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   10. CHI TIẾT SẢN PHẨM
========================================================= */

function openProductDetail(
    productId = "shampoo"
) {

    const product =
        products[productId];


    if (!product) return;


    let modal =
        document.getElementById(
            "product-detail-modal"
        );


    if (!modal) {

        modal =
            document.createElement(
                "div"
            );

        modal.id =
            "product-detail-modal";

        document.body.appendChild(
            modal
        );

    }


    modal.innerHTML = `

        <div
            class="product-detail-overlay"
            onclick="closeProductDetail()"
        ></div>


        <div class="product-detail-panel">

            <button
                class="product-detail-close"
                onclick="closeProductDetail()"
                aria-label="Đóng"
            >
                ×
            </button>


            <div class="product-detail-image">

                <img
                    src="${product.detailImage}"
                    alt="Dầu gội thảo dược Tóc Mây Cỏ Mềm"
                >

            </div>


            <div class="product-detail-content">

                <div class="detail-label">
                    CỎ MỀM NATURAL CARE
                </div>


                <h2>
                    ${product.name}
                </h2>


                <div class="detail-price">

                    ${formatPrice(product.price)}

                </div>


                <p class="detail-intro">

                    ${product.description}

                </p>


                <div class="detail-actions">

                    <button
                        class="detail-buy"
                        onclick="addToCart('${product.id}')"
                    >
                        🛒 Thêm vào giỏ hàng
                    </button>

                </div>


                <div class="detail-divider"></div>


                <!-- THÔNG TIN -->

                <section class="detail-section">

                    <h3>
                        Thông tin
                    </h3>


                    <p>
                        ${product.information}
                    </p>


                    <div class="official-information">

                        <div>

                            <strong>
                                Số công bố với Sở Y Tế
                            </strong>

                            <span>
                                ${product.publicationNumber}
                            </span>

                        </div>


                        <div>

                            <strong>
                                Chịu trách nhiệm về sản phẩm
                            </strong>

                            <span>
                                ${product.responsibleCompany}
                            </span>

                        </div>


                        <div>

                            <strong>
                                Địa chỉ
                            </strong>

                            <span>
                                ${product.address}
                            </span>

                        </div>


                        <div>

                            <strong>
                                Xuất xứ
                            </strong>

                            <span>
                                ${product.origin}
                            </span>

                        </div>

                    </div>

                </section>


                <!-- NGUYÊN LIỆU -->

                <section class="detail-section">

                    <h3>
                        Nguyên liệu
                    </h3>


                    <p>
                        Dầu gội thảo dược Tóc Mây
                        không chứa silicone, không sulfate,
                        với sự kết hợp của các thảo dược
                        truyền thống và hoạt chất thiên nhiên.
                    </p>


                    <ul class="ingredient-list">

                        ${product.ingredients.map(
                            ingredient => `
                                <li>
                                    ${ingredient}
                                </li>
                            `
                        ).join("")}

                    </ul>

                </section>


                <!-- HDSD -->

                <section class="detail-section">

                    <h3>
                        HDSD
                    </h3>


                    <p>
                        ${product.usage}
                    </p>

                </section>


                <!-- HÌNH ẢNH -->

                <section class="detail-section">

                    <img
                        class="detail-secondary-image"
                        src="${product.detailImage}"
                        alt="Dầu gội thảo dược Tóc Mây Cỏ Mềm"
                    >


                    <p class="image-caption">

                        Dầu gội thảo dược Tóc Mây Cỏ Mềm

                    </p>

                </section>


                <!-- MÔ TẢ -->

                <section class="detail-section">

                    <p class="detail-highlight">

                        ${product.description}

                    </p>

                </section>


                <!-- THÔNG SỐ -->

                <section class="detail-section">

                    <h3>
                        Thông số sản phẩm
                    </h3>


                    <div class="specification-table">

                        <div class="spec-row">

                            <strong>
                                Tên sản phẩm
                            </strong>

                            <span>
                                ${product.name}
                            </span>

                        </div>


                        <div class="spec-row">

                            <strong>
                                Khối lượng
                            </strong>

                            <span>
                                ${product.weight}
                            </span>

                        </div>


                        <div class="spec-row">

                            <strong>
                                Vấn đề của tóc
                            </strong>

                            <span>
                                ${product.hairProblems.join(", ")}
                            </span>

                        </div>


                        <div class="spec-row">

                            <strong>
                                Công dụng
                            </strong>

                            <span>
                                Làm sạch tóc, da đầu,
                                ngăn ngừa và cải thiện tình trạng
                                gàu, gãy rụng, chẻ ngọn cho
                                mái tóc mềm mượt, chắc khỏe.
                            </span>

                        </div>


                        <div class="spec-row">

                            <strong>
                                Mùi hương
                            </strong>

                            <span>
                                ${product.scent}
                            </span>

                        </div>


                        <div class="spec-row">

                            <strong>
                                Hạn sử dụng
                            </strong>

                            <span>
                                ${product.expiry}
                            </span>

                        </div>

                    </div>

                </section>


                <!-- ƯU ĐIỂM -->

                <section class="detail-section">

                    <h3>
                        Ưu điểm nổi bật dầu gội
                        thảo dược Tóc Mây
                    </h3>


                    <p>
                        ${product.advantages}
                    </p>


                    <div class="benefit-list">

                        ${product.benefits.map(
                            benefit => `

                                <div class="benefit-item">

                                    <span class="benefit-icon">
                                        🌿
                                    </span>

                                    <div>

                                        <strong>
                                            ${benefit.title}
                                        </strong>

                                        <p>
                                            ${benefit.content}
                                        </p>

                                    </div>

                                </div>

                            `
                        ).join("")}

                    </div>

                </section>


                <!-- CÔNG DỤNG -->

                <section class="detail-section">

                    <h3>
                        Công dụng dầu gội
                        thảo dược Tóc Mây
                    </h3>


                    <p>
                        ${product.benefitsDescription}
                    </p>

                </section>


                <!-- THÀNH PHẦN -->

                <section class="detail-section">

                    <h3>
                        Thành phần của sản phẩm
                    </h3>


                    <p>

                        Dầu gội thảo dược Tóc Mây
                        không chứa silicone, không sulfate,
                        lành tính, dùng được cho cả những
                        làn da nhạy cảm với sự kết hợp của:

                    </p>


                    <ul class="ingredient-list">

                        ${product.ingredients.map(
                            ingredient => `
                                <li>
                                    ${ingredient}
                                </li>
                            `
                        ).join("")}

                    </ul>

                </section>


                <!-- KẾT -->

                <section class="detail-final">

                    <p>
                        <strong>
                            Dầu gội thảo dược Tóc Mây
                        </strong>
                        là lựa chọn dành cho mái tóc
                        của bạn. Nếu bạn đang tìm giải pháp
                        cải thiện mái tóc mềm mượt,
                        chắc khỏe, đừng bỏ qua
                        dầu gội thảo dược Tóc Mây
                        nhà Cỏ Mềm.
                    </p>

                </section>


                <button
                    class="detail-buy detail-buy-bottom"
                    onclick="addToCart('${product.id}')"
                >
                    🛒 Mua dầu gội Tóc Mây
                </button>

            </div>

        </div>

    `;


    injectProductDetailStyles();


    modal.classList.add(
        "active"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
   11. ĐÓNG CHI TIẾT
========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById(
            "product-detail-modal"
        );


    if (!modal) return;


    modal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   12. CSS CHO CỬA SỔ CHI TIẾT
========================================================= */

function injectProductDetailStyles() {

    if (
        document.getElementById(
            "tocmay-product-detail-style"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "tocmay-product-detail-style";


    style.textContent = `

        /* ==============================
           PRODUCT DETAIL MODAL
        ============================== */

        #product-detail-modal {

            position: fixed;

            inset: 0;

            z-index: 10000;

            visibility: hidden;

            pointer-events: none;

        }


        #product-detail-modal.active {

            visibility: visible;

            pointer-events: auto;

        }


        .product-detail-overlay {

            position: absolute;

            inset: 0;

            background:
                rgba(35, 48, 38, .65);

            backdrop-filter:
                blur(4px);

            opacity: 0;

            transition:
                .3s ease;

        }


        #product-detail-modal.active
        .product-detail-overlay {

            opacity: 1;

        }


        .product-detail-panel {

            position: absolute;

            top: 50%;

            left: 50%;

            width: min(
                1100px,
                calc(100% - 30px)
            );

            max-height:
                calc(100vh - 30px);

            transform:
                translate(-50%, -45%);

            overflow-y: auto;

            background: #fffdf8;

            border-radius: 22px;

            box-shadow:
                0 30px 80px
                rgba(0,0,0,.25);

            opacity: 0;

            transition:
                .35s ease;

        }


        #product-detail-modal.active
        .product-detail-panel {

            opacity: 1;

            transform:
                translate(-50%, -50%);

        }


        .product-detail-close {

            position: sticky;

            top: 18px;

            float: right;

            margin-right: 18px;

            z-index: 5;

            width: 44px;

            height: 44px;

            border: none;

            border-radius: 50%;

            background: #dce5d9;

            color: #3f5744;

            font-size: 28px;

            line-height: 1;

            cursor: pointer;

        }


        .product-detail-image {

            width: 100%;

            height: 440px;

            background:
                linear-gradient(
                    145deg,
                    #dce6d8,
                    #f5f0e4
                );

            display: flex;

            align-items: center;

            justify-content: center;

            overflow: hidden;

        }


        .product-detail-image img {

            width: 100%;

            height: 100%;

            object-fit: contain;

            padding: 35px;

        }


        .product-detail-content {

            padding:
                45px 55px 60px;

        }


        .detail-label {

            color: #526a55;

            font-size: 11px;

            font-weight: 800;

            letter-spacing: 3px;

            margin-bottom: 10px;

        }


        .product-detail-content h2 {

            margin: 0 0 10px;

            color: #3f5744;

            font-family: Georgia, serif;

            font-size: 42px;

            line-height: 1.2;

            font-weight: 500;

        }


        .detail-price {

            color: #526a55;

            font-size: 25px;

            font-weight: 800;

            margin-bottom: 25px;

        }


        .detail-intro {

            color: #6b6254;

            font-size: 16px;

            line-height: 1.9;

            margin-bottom: 25px;

        }


        .detail-actions {

            margin-bottom: 20px;

        }


        .detail-buy {

            border: none;

            background: #526a55;

            color: white;

            padding: 15px 25px;

            border-radius: 50px;

            cursor: pointer;

            font-weight: 700;

            font-size: 15px;

            transition: .25s;

        }


        .detail-buy:hover {

            background: #3f5744;

            transform:
                translateY(-2px);

        }


        .detail-divider {

            height: 1px;

            background: #ddd8ca;

            margin:
                25px 0 10px;

        }


        .detail-section {

            padding:
                28px 0;

            border-bottom:
                1px solid #e4dfd2;

        }


        .detail-section h3 {

            color: #3f5744;

            font-family: Georgia, serif;

            font-size: 28px;

            font-weight: 500;

            margin-bottom: 15px;

        }


        .detail-section p {

            color: #655f54;

            line-height: 1.85;

            white-space: pre-line;

        }


        .official-information {

            display: grid;

            grid-template-columns:
                repeat(2, 1fr);

            gap: 14px;

            margin-top: 22px;

        }


        .official-information > div {

            background: #f8f3e8;

            padding: 17px;

            border-radius: 12px;

        }


        .official-information strong {

            display: block;

            color: #526a55;

            font-size: 13px;

            margin-bottom: 5px;

        }


        .official-information span {

            color: #655f54;

            font-size: 14px;

            line-height: 1.6;

        }


        .ingredient-list {

            margin: 15px 0 0;

            padding-left: 20px;

        }


        .ingredient-list li {

            color: #655f54;

            margin-bottom: 10px;

            line-height: 1.7;

        }


        .detail-secondary-image {

            width: 100%;

            max-height: 550px;

            object-fit: contain;

            display: block;

            margin: 10px auto;

            border-radius: 14px;

            background: #f8f3e8;

        }


        .image-caption {

            text-align: center;

            font-size: 13px;

            color: #8a8377 !important;

            font-style: italic;

        }


        .detail-highlight {

            background: #edf2e9;

            border-left:
                4px solid #8fa58d;

            padding: 20px;

            border-radius: 0 12px 12px 0;

            color: #526a55 !important;

        }


        .specification-table {

            border:
                1px solid #ddd8ca;

            border-radius: 12px;

            overflow: hidden;

        }


        .spec-row {

            display: grid;

            grid-template-columns:
                210px 1fr;

            border-bottom:
                1px solid #ddd8ca;

        }


        .spec-row:last-child {

            border-bottom: none;

        }


        .spec-row strong {

            padding: 16px;

            background: #edf2e9;

            color: #526a55;

        }


        .spec-row span {

            padding: 16px;

            color: #655f54;

            line-height: 1.65;

        }


        .benefit-list {

            display: grid;

            gap: 15px;

            margin-top: 22px;

        }


        .benefit-item {

            display: flex;

            gap: 14px;

            background: #f8f3e8;

            padding: 18px;

            border-radius: 12px;

        }


        .benefit-icon {

            flex-shrink: 0;

            width: 38px;

            height: 38px;

            border-radius: 50%;

            background: #dce5d9;

            display: flex;

            align-items: center;

            justify-content: center;

        }


        .benefit-item strong {

            color: #526a55;

            display: block;

            margin-bottom: 4px;

        }


        .benefit-item p {

            font-size: 14px;

        }


        .detail-final {

            margin-top: 30px;

            padding: 25px;

            border-radius: 15px;

            background:
                #dce5d9;

        }


        .detail-final p {

            color: #3f5744;

            line-height: 1.8;

            margin: 0;

        }


        .detail-buy-bottom {

            width: 100%;

            margin-top: 25px;

            padding: 17px;

        }


        /* ==============================
           CART IMAGE
        ============================== */

        .cart-item-image img {

            width: 100%;

            height: 100%;

            object-fit: contain;

            border-radius: 10px;

        }


        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 700px) {

            .product-detail-panel {

                width:
                    calc(100% - 14px);

                max-height:
                    calc(100vh - 14px);

                border-radius: 16px;

            }


            .product-detail-image {

                height: 300px;

            }


            .product-detail-image img {

                padding: 20px;

            }


            .product-detail-content {

                padding:
                    30px 22px 40px;

            }


            .product-detail-content h2 {

                font-size: 32px;

            }


            .official-information {

                grid-template-columns: 1fr;

            }


            .spec-row {

                grid-template-columns: 1fr;

            }


            .spec-row strong {

                padding-bottom: 8px;

            }


            .spec-row span {

                padding-top: 8px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   13. LỌC SẢN PHẨM
========================================================= */

function filterProducts(
    keyword = ""
) {

    const search =
        keyword
            .toLowerCase()
            .trim();


    const product =
        products.shampoo;


    const match =
        product.name
            .toLowerCase()
            .includes(search) ||

        product.category
            .toLowerCase()
            .includes(search) ||

        "tóc mây"
            .includes(search) ||

        "cỏ mềm"
            .includes(search);


    const cards =
        document.querySelectorAll(
            ".product-card"
        );


    cards.forEach(card => {

        if (match) {

            card.style.display =
                "";

        } else {

            card.style.display =
                "none";

        }

    });

}


/* =========================================================
   14. TẠO NÚT "XEM CHI TIẾT"
   CHO CARD SẢN PHẨM
========================================================= */

function setupProductDetailButtons() {

    const cards =
        document.querySelectorAll(
            ".product-card"
        );


    cards.forEach(card => {

        if (
            card.querySelector(
                ".view-detail"
            )
        ) {

            return;

        }


        const info =
            card.querySelector(
                ".product-info"
            );


        if (!info) return;


        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "view-detail";


        button.textContent =
            "Xem chi tiết sản phẩm";


        button.onclick = () => {

            openProductDetail(
                "shampoo"
            );

        };


        const style =
            document.createElement(
                "style"
            );


        style.textContent = `

            .view-detail {

                display: block;

                width: 100%;

                margin-top: 12px;

                padding: 11px;

                border: 1px solid #8fa58d;

                border-radius: 50px;

                background: transparent;

                color: #526a55;

                font-weight: 700;

                cursor: pointer;

                transition: .25s;

            }


            .view-detail:hover {

                background: #dce5d9;

            }

        `;


        document.head.appendChild(
            style
        );


        info.appendChild(
            button
        );

    });

}


/* =========================================================
   15. NÚT XEM CHI TIẾT TOÀN CARD
========================================================= */

function setupProductCardClick() {

    const cards =
        document.querySelectorAll(
            ".product-card"
        );


    cards.forEach(card => {

        const image =
            card.querySelector(
                ".product-image"
            );


        const title =
            card.querySelector(
                "h3"
            );


        if (image) {

            image.style.cursor =
                "pointer";


            image.onclick = () => {

                openProductDetail(
                    "shampoo"
                );

            };

        }


        if (title) {

            title.style.cursor =
                "pointer";


            title.onclick = () => {

                openProductDetail(
                    "shampoo"
                );

            };

        }

    });

}


/* =========================================================
   16. ĐẶT HÀNG
========================================================= */

function submitOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showToast(
            "Vui lòng thêm sản phẩm vào giỏ hàng trước."
        );


        if (
            typeof openCart === "function"
        ) {

            openCart();

        }


        return;

    }


    const name =
        document.getElementById(
            "order-name"
        )?.value.trim();


    const phone =
        document.getElementById(
            "order-phone"
        )?.value.trim();


    const address =
        document.getElementById(
            "order-address"
        )?.value.trim();


    if (
        !name ||
        !phone ||
        !address
    ) {

        showToast(
            "Vui lòng nhập đầy đủ thông tin đặt hàng."
        );

        return;

    }


    const order = {

        id:
            "TM" +
            Date.now(),

        customer: {

            name,

            phone,

            address

        },

        items: [...cart],

        total:
            cart.reduce(
                (sum, item) =>
                    sum +
                    item.price *
                    item.quantity,
                0
            ),

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "tocMayLastOrder",
        JSON.stringify(order)
    );


    cart = [];


    saveCart();

    updateCart();


    event.target.reset();


    showToast(
        "Đặt hàng thành công! Cảm ơn bạn đã chọn Tóc Mây Cỏ Mềm."
    );

}


/* =========================================================
   17. TƯ VẤN
========================================================= */

function submitConsult(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "name"
        )?.value.trim();


    const phone =
        document.getElementById(
            "phone"
        )?.value.trim();


    const hair =
        document.getElementById(
            "hair"
        )?.value;


    const message =
        document.getElementById(
            "message"
        )?.value.trim();


    const consultation = {

        name,

        phone,

        hair,

        message,

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "tocMayConsultation",
        JSON.stringify(
            consultation
        )
    );


    event.target.reset();


    showToast(
        "Đã nhận thông tin. Tóc Mây sẽ hỗ trợ bạn."
    );

}


/* =========================================================
   18. ESC ĐỂ ĐÓNG MODAL
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProductDetail();


            if (
                typeof closeCart ===
                "function"
            ) {

                closeCart();

            }

        }

    }
);


/* =========================================================
   19. KHỞI TẠO WEBSITE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCart();

        setupProductDetailButtons();

        setupProductCardClick();

        injectProductDetailStyles();

    }
);


/* =========================================================
   20. XUẤT DỮ LIỆU
========================================================= */

window.products =
    products;

window.cart =
    cart;

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

window.filterProducts =
    filterProducts;

window.submitOrder =
    submitOrder;

window.submitConsult =
    submitConsult;
```
