```javascript
/* =========================================================
   CỎ MỀM - TÓC MÂY
   FILE DUY NHẤT: script.js

   Chức năng:
   - Hiển thị toàn bộ sản phẩm
   - Ảnh sản phẩm lấy trực tiếp từ URL
   - Ảnh full khung
   - Không chia danh mục
   - Tìm kiếm sản phẩm
   - Xem chi tiết sản phẩm
   - Thêm vào giỏ hàng
   - Tăng / giảm số lượng
   - Lưu giỏ hàng bằng localStorage
   - Chuẩn hóa tiếng Việt Unicode NFC
========================================================= */


/* =========================================================
   1. CHUẨN HÓA TIẾNG VIỆT
   Giúp chữ có dấu không bị tách thành ký tự rời.
========================================================= */

function vnText(text) {
    return String(text ?? "").normalize("NFC");
}


/* =========================================================
   2. ẢNH SẢN PHẨM
========================================================= */

const PRODUCT_IMAGES = {
    tocMay1:
        "https://media.comem.vn/uploads/2025/04/z4926524379232_8e45f40105a24f00c01caf6f75d4ed0e.webp",

    tocMay2:
        "https://media.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-4.webp",

    tocMay3:
        "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99_m.webp",

    tocMayDetail:
        "https://static.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-1.jpg"
};


/* =========================================================
   3. DỮ LIỆU SẢN PHẨM
   Không chia danh mục.
   Tất cả sản phẩm đều hiển thị chung.
========================================================= */

const products = [

    {
        id: "dau-goi-toc-may",

        name: vnText("Dầu gội thảo dược Tóc Mây"),

        brand: vnText("Cỏ Mềm"),

        type: vnText("Dầu gội thảo dược"),

        price: 329000,

        oldPrice: 369000,

        unit: vnText("300 gram"),

        image: PRODUCT_IMAGES.tocMay1,

        gallery: [
            PRODUCT_IMAGES.tocMay1,
            PRODUCT_IMAGES.tocMay2,
            PRODUCT_IMAGES.tocMay3
        ],

        detailImage: PRODUCT_IMAGES.tocMayDetail,

        shortDescription: vnText(
            "Dầu gội thảo dược từ Bồ kết và các loại thảo mộc truyền thống, giúp làm sạch tóc và da đầu, hỗ trợ cải thiện tình trạng gàu, gãy rụng và chẻ ngọn."
        ),

        description: vnText(
            "Với chiết xuất từ Bồ kết và thảo dược truyền thống cùng các hoạt chất thiên nhiên, Dầu gội thảo dược Tóc Mây giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn. Sản phẩm có thể dùng cho cả những người có da đầu nhạy cảm."
        ),

        caption: vnText(
            "Dầu gội thảo dược Tóc Mây Cỏ Mềm"
        ),

        specifications: {
            "Tên sản phẩm": "Dầu gội thảo dược Tóc Mây",
            "Khối lượng": "300 gram",
            "Vấn đề của tóc": "Tóc xơ, gàu, gãy rụng nhiều",
            "Mùi hương": "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên",
            "Hạn sử dụng": "24 tháng",
            "Xuất xứ": "Việt Nam"
        },

        legal: {
            "Số công bố với Sở Y Tế": "18429/23/CBMP-HN",
            "Chịu trách nhiệm về sản phẩm": "Công ty mỹ phẩm thiên nhiên Cỏ Mềm",
            "Địa chỉ": "Số 225, phố Trần Đăng Ninh, phường Cầu Giấy, TP Hà Nội",
            "Xuất xứ": "Việt Nam"
        },

        advantages: [
            vnText("Không silicon"),
            vnText("Không sulfate"),
            vnText("Phù hợp với người có da đầu nhạy cảm"),
            vnText("Chiết xuất từ thảo mộc truyền thống"),
            vnText("Hương thơm thảo dược dịu nhẹ")
        ],

        benefits: [
            {
                title: vnText("Bồ kết, Bồ hòn, Cỏ ngũ sắc"),
                text: vnText(
                    "Chứa saponin giúp tạo bọt tự nhiên và làm sạch gàu."
                )
            },
            {
                title: vnText("Hương nhu và Cỏ mần trầu"),
                text: vnText(
                    "Giúp làm sạch da đầu và hỗ trợ ngăn ngừa tình trạng rụng tóc."
                )
            },
            {
                title: vnText("Tinh dầu vỏ Bưởi"),
                text: vnText(
                    "Góp phần hỗ trợ chăm sóc tóc và hạn chế tình trạng rụng tóc."
                )
            },
            {
                title: vnText("Tang bạch bì"),
                text: vnText(
                    "Hỗ trợ chăm sóc da đầu và mái tóc."
                )
            },
            {
                title: vnText("Tinh dầu Sả chanh"),
                text: vnText(
                    "Mang hương thơm nhẹ nhàng và cảm giác thư giãn khi gội đầu."
                )
            },
            {
                title: vnText("Dầu quả Bơ"),
                text: vnText(
                    "Chứa nhiều vitamin A, C, D, E, giúp chăm sóc tóc khô, tóc hư tổn và dưỡng tóc mềm mượt."
                )
            },
            {
                title: vnText("Protein từ đậu Hà Lan"),
                text: vnText(
                    "Có khả năng thay thế silicone, giúp làm mượt và phục hồi tóc hư tổn mà không gây bít tắc nang tóc."
                )
            }
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

        usage: vnText(
            "Dầu gội đầu giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn, cho mái tóc mềm mượt, chắc khoẻ. Góp phần thúc đẩy sự phát triển của nang tóc."
        ),

        howToUse: [
            vnText("Làm ướt tóc và thoa đều dầu gội lên trên tóc."),
            vnText("Thực hiện massage tóc và da đầu."),
            vnText("Xả sạch lại tóc với nước.")
        ],

        notes: [
            vnText(
                "Có thể gội 2 lần nếu muốn."
            ),
            vnText(
                "Nên sử dụng kết hợp với Kem Xả ủ và Serum Tóc Mây để dưỡng tóc, giúp tóc luôn óng mượt, chắc khỏe."
            ),
            vnText(
                "Chiết xuất bồ kết đậm đặc, có thể gây cay nhẹ nếu rơi vào mắt; rửa sạch lại bằng nước sạch."
            )
        ],

        finalMessage: vnText(
            "Dầu gội thảo dược Tóc Mây là lựa chọn chân ái dành cho mái tóc của bạn. Nếu bạn đang tìm giải pháp cải thiện mái tóc mềm mượt, chắc khỏe, đừng bỏ qua dầu gội thảo dược Tóc Mây nhà Cỏ bạn nhé!"
        )
    },


    /* =====================================================
       SẢN PHẨM 2
       Combo cặp Tóc Mây
    ===================================================== */

    {
        id: "combo-cap-toc-may",

        name: vnText(
            "Combo cặp Tóc Mây - Dầu gội + Kem xả ủ"
        ),

        brand: vnText("Cỏ Mềm"),

        type: vnText("Bộ chăm sóc tóc"),

        price: 659000,

        oldPrice: 739000,

        unit: vnText("Bộ sản phẩm"),

        image: PRODUCT_IMAGES.tocMay3,

        gallery: [
            PRODUCT_IMAGES.tocMay3,
            PRODUCT_IMAGES.tocMay1,
            PRODUCT_IMAGES.tocMay2
        ],

        detailImage: PRODUCT_IMAGES.tocMay3,

        shortDescription: vnText(
            "Combo chăm sóc tóc Tóc Mây gồm dầu gội và sản phẩm chăm sóc tóc, phù hợp cho chu trình chăm sóc tóc mềm mượt và chắc khỏe."
        ),

        description: vnText(
            "Combo cặp Tóc Mây là lựa chọn tiện lợi dành cho người muốn chăm sóc mái tóc theo bộ. Kết hợp dầu gội thảo dược cùng sản phẩm chăm sóc tóc giúp mái tóc được làm sạch và chăm sóc toàn diện hơn."
        ),

        caption: vnText(
            "Combo cặp chăm sóc tóc Tóc Mây Cỏ Mềm"
        ),

        specifications: {
            "Tên sản phẩm": "Combo cặp Tóc Mây - Dầu gội + Kem xả ủ",
            "Loại": "Bộ chăm sóc tóc",
            "Giá bán": "659.000đ",
            "Xuất xứ": "Việt Nam"
        },

        legal: {
            "Sản phẩm trong bộ": "Dầu gội thảo dược Tóc Mây",
            "Số công bố dầu gội": "18429/23/CBMP-HN",
            "Đơn vị chịu trách nhiệm": "Công ty mỹ phẩm thiên nhiên Cỏ Mềm",
            "Xuất xứ": "Việt Nam"
        },

        advantages: [
            vnText("Chăm sóc tóc theo bộ"),
            vnText("Tiện lợi khi sử dụng"),
            vnText("Kết hợp làm sạch và dưỡng tóc"),
            vnText("Phù hợp với chu trình chăm sóc tóc tại nhà")
        ],

        benefits: [
            {
                title: vnText("Làm sạch"),
                text: vnText(
                    "Dầu gội giúp làm sạch tóc và da đầu."
                )
            },
            {
                title: vnText("Chăm sóc tóc"),
                text: vnText(
                    "Kết hợp sản phẩm chăm sóc tóc giúp mái tóc mềm mượt và dễ chăm sóc hơn."
                )
            },
            {
                title: vnText("Tiện lợi"),
                text: vnText(
                    "Một combo giúp người dùng dễ dàng lựa chọn sản phẩm cho chu trình chăm sóc tóc."
                )
            }
        ],

        ingredients: [
            vnText(
                "Dầu gội thảo dược Tóc Mây có thành phần từ Bồ kết và các loại thảo dược thiên nhiên."
            ),
            vnText(
                "Sản phẩm chăm sóc tóc đi kèm sử dụng theo hướng dẫn trên bao bì."
            )
        ],

        usage: vnText(
            "Sử dụng dầu gội để làm sạch tóc và da đầu, sau đó kết hợp sản phẩm chăm sóc tóc trong bộ theo hướng dẫn sử dụng."
        ),

        howToUse: [
            vnText("Làm ướt tóc."),
            vnText("Sử dụng dầu gội và massage nhẹ da đầu."),
            vnText("Xả sạch tóc với nước."),
            vnText("Sử dụng sản phẩm chăm sóc tóc trong bộ theo hướng dẫn.")
        ],

        notes: [
            vnText(
                "Thông tin chi tiết của từng sản phẩm trong combo cần được xem trên bao bì sản phẩm."
            ),
            vnText(
                "Nếu sản phẩm tiếp xúc với mắt, rửa sạch lại bằng nước."
            )
        ],

        finalMessage: vnText(
            "Combo cặp Tóc Mây là lựa chọn tiện lợi cho chu trình chăm sóc mái tóc tại nhà, giúp bạn dễ dàng kết hợp bước làm sạch và chăm sóc tóc."
        )
    }
];


/* =========================================================
   4. GIỎ HÀNG
========================================================= */

const CART_KEY = "tocMayCart";

let cart = [];

try {
    cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
} catch (error) {
    cart = [];
}


/* =========================================================
   5. FORMAT GIÁ
========================================================= */

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}


/* =========================================================
   6. LƯU GIỎ HÀNG
========================================================= */

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}


/* =========================================================
   7. TÌM SẢN PHẨM
========================================================= */

function findProduct(productId) {
    return products.find(product => product.id === productId);
}


/* =========================================================
   8. THÊM SẢN PHẨM VÀO GIỎ
========================================================= */

function addToCart(productId) {

    const product = findProduct(productId);

    if (!product) {
        return;
    }

    const existing = cart.find(
        item => item.id === productId
    );

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();
    updateCart();

    showToast(
        vnText("Đã thêm sản phẩm vào giỏ hàng")
    );
}


/* =========================================================
   9. XÓA SẢN PHẨM
========================================================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();
    updateCart();
}


/* =========================================================
   10. THAY ĐỔI SỐ LƯỢNG
========================================================= */

function changeQuantity(productId, amount) {

    const item = cart.find(
        cartItem => cartItem.id === productId
    );

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCart();
}


/* =========================================================
   11. HIỂN THỊ TOAST
========================================================= */

function showToast(message) {

    let toast = document.getElementById("product-toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "product-toast";

        toast.style.cssText = `
            position: fixed;
            left: 50%;
            bottom: 30px;
            transform: translateX(-50%);
            z-index: 99999;
            background: #315c45;
            color: #fff;
            padding: 13px 22px;
            border-radius: 999px;
            font-size: 15px;
            font-family: Arial, sans-serif;
            box-shadow: 0 8px 30px rgba(0,0,0,.2);
            opacity: 0;
            transition: opacity .25s ease;
            pointer-events: none;
        `;

        document.body.appendChild(toast);
    }

    toast.textContent = vnText(message);

    toast.style.opacity = "1";

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {
        toast.style.opacity = "0";
    }, 2200);
}


/* =========================================================
   12. RENDER DANH SÁCH SẢN PHẨM
========================================================= */

function renderProducts(list = products) {

    const container =
        document.getElementById("product-list") ||
        document.querySelector(".product-list") ||
        document.querySelector(".products-grid") ||
        document.querySelector(".products");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (!list.length) {

        container.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px 20px;
                font-size:18px;
                color:#555;
            ">
                ${vnText("Không tìm thấy sản phẩm phù hợp.")}
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.style.cssText = `
            width:100%;
            min-width:0;
            overflow:hidden;
            background:#fffdf7;
            border-radius:22px;
            border:1px solid rgba(49,92,69,.12);
            box-shadow:0 10px 30px rgba(49,92,69,.08);
            box-sizing:border-box;
        `;


        card.innerHTML = `

            <div
                class="product-image-wrap"
                style="
                    width:100%;
                    height:480px;
                    overflow:hidden;
                    background:#f1eadb;
                    cursor:pointer;
                "
                onclick="openProductDetail('${product.id}')"
            >

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='${PRODUCT_IMAGES.tocMayDetail}'"
                    style="
                        display:block;
                        width:100%;
                        height:100%;
                        object-fit:cover;
                        object-position:center;
                    "
                >

            </div>


            <div
                class="product-content"
                style="
                    padding:22px;
                    box-sizing:border-box;
                "
            >

                <div
                    style="
                        font-size:13px;
                        color:#6b806f;
                        margin-bottom:8px;
                    "
                >
                    ${product.brand}
                </div>


                <h3
                    style="
                        margin:0 0 12px;
                        color:#274c38;
                        font-size:21px;
                        line-height:1.4;
                    "
                >
                    ${product.name}
                </h3>


                <p
                    style="
                        margin:0 0 18px;
                        color:#5f665f;
                        line-height:1.65;
                        font-size:15px;
                    "
                >
                    ${product.shortDescription}
                </p>


                <div
                    style="
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        gap:15px;
                        flex-wrap:wrap;
                    "
                >

                    <div>

                        <div
                            style="
                                color:#315c45;
                                font-size:23px;
                                font-weight:700;
                            "
                        >
                            ${formatPrice(product.price)}
                        </div>

                        <div
                            style="
                                color:#999;
                                text-decoration:line-through;
                                font-size:14px;
                                margin-top:3px;
                            "
                        >
                            ${formatPrice(product.oldPrice)}
                        </div>

                    </div>


                    <div
                        style="
                            display:flex;
                            gap:8px;
                        "
                    >

                        <button
                            type="button"
                            onclick="openProductDetail('${product.id}')"
                            style="
                                border:1px solid #315c45;
                                background:transparent;
                                color:#315c45;
                                padding:11px 15px;
                                border-radius:999px;
                                cursor:pointer;
                                font-weight:600;
                            "
                        >
                            ${vnText("Xem chi tiết")}
                        </button>


                        <button
                            type="button"
                            onclick="addToCart('${product.id}')"
                            style="
                                border:0;
                                background:#315c45;
                                color:white;
                                padding:11px 17px;
                                border-radius:999px;
                                cursor:pointer;
                                font-weight:600;
                            "
                        >
                            ${vnText("Thêm giỏ")}
                        </button>

                    </div>

                </div>

            </div>
        `;


        container.appendChild(card);
    });
}


/* =========================================================
   13. TÌM KIẾM SẢN PHẨM
========================================================= */

function filterProducts(keyword = "") {

    const searchText = vnText(keyword)
        .trim()
        .toLowerCase();

    if (!searchText) {
        renderProducts(products);
        return;
    }

    const result = products.filter(product => {

        const text = [
            product.name,
            product.brand,
            product.type,
            product.shortDescription,
            product.description
        ]
            .join(" ")
            .normalize("NFC")
            .toLowerCase();

        return text.includes(searchText);
    });

    renderProducts(result);
}


/* =========================================================
   14. TỰ ĐỘNG GẮN Ô TÌM KIẾM
========================================================= */

function setupSearch() {

    const searchInput =
        document.querySelector("#product-search") ||
        document.querySelector(".product-search input") ||
        document.querySelector('input[type="search"]');

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", event => {

        filterProducts(
            event.target.value
        );

    });
}


/* =========================================================
   15. CHI TIẾT SẢN PHẨM
========================================================= */

function openProductDetail(productId) {

    const product = findProduct(productId);

    if (!product) {
        return;
    }

    let modal =
        document.getElementById("product-detail-modal");

    if (!modal) {

        modal = document.createElement("div");

        modal.id = "product-detail-modal";

        document.body.appendChild(modal);
    }


    modal.innerHTML = `

        <div
            class="product-detail-overlay"
            onclick="
                if(event.target === this)
                closeProductDetail()
            "
            style="
                position:fixed;
                inset:0;
                z-index:99990;
                overflow-y:auto;
                background:rgba(20,35,27,.72);
                padding:25px;
                box-sizing:border-box;
            "
        >

            <div
                style="
                    max-width:1180px;
                    margin:20px auto;
                    background:#fffdf7;
                    border-radius:25px;
                    overflow:hidden;
                    box-shadow:0 20px 80px rgba(0,0,0,.3);
                "
            >

                <div
                    style="
                        display:flex;
                        justify-content:flex-end;
                        padding:15px 18px 0;
                    "
                >

                    <button
                        type="button"
                        onclick="closeProductDetail()"
                        aria-label="Đóng"
                        style="
                            width:42px;
                            height:42px;
                            border:0;
                            border-radius:50%;
                            background:#edf1e9;
                            color:#315c45;
                            font-size:25px;
                            cursor:pointer;
                        "
                    >
                        ×
                    </button>

                </div>


                <div
                    style="
                        display:grid;
                        grid-template-columns:minmax(0,1fr) minmax(0,1fr);
                        gap:35px;
                        padding:10px 35px 40px;
                    "
                    class="product-detail-main"
                >


                    <div>

                        <div
                            style="
                                width:100%;
                                aspect-ratio:1/1;
                                overflow:hidden;
                                border-radius:20px;
                                background:#f0e9da;
                            "
                        >

                            <img
                                id="detail-main-image"
                                src="${product.detailImage || product.image}"
                                alt="${product.name}"
                                style="
                                    width:100%;
                                    height:100%;
                                    display:block;
                                    object-fit:cover;
                                "
                            >

                        </div>


                        <div
                            style="
                                display:grid;
                                grid-template-columns:repeat(3,1fr);
                                gap:10px;
                                margin-top:12px;
                            "
                        >

                            ${product.gallery.map((image, index) => `
                                <button
                                    type="button"
                                    onclick="changeProductImage('${image}')"
                                    style="
                                        padding:0;
                                        border:2px solid transparent;
                                        border-radius:12px;
                                        overflow:hidden;
                                        cursor:pointer;
                                        background:#f0e9da;
                                        aspect-ratio:1/1;
                                    "
                                >
                                    <img
                                        src="${image}"
                                        alt="${product.name}"
                                        style="
                                            width:100%;
                                            height:100%;
                                            display:block;
                                            object-fit:cover;
                                        "
                                    >
                                </button>
                            `).join("")}

                        </div>

                    </div>


                    <div>

                        <div
                            style="
                                color:#728273;
                                font-size:14px;
                                margin-bottom:8px;
                            "
                        >
                            ${product.brand}
                        </div>


                        <h2
                            style="
                                margin:0 0 15px;
                                color:#274c38;
                                font-size:32px;
                                line-height:1.3;
                            "
                        >
                            ${product.name}
                        </h2>


                        <div
                            style="
                                color:#315c45;
                                font-size:29px;
                                font-weight:700;
                                margin-bottom:4px;
                            "
                        >
                            ${formatPrice(product.price)}
                        </div>


                        <div
                            style="
                                color:#999;
                                text-decoration:line-through;
                                margin-bottom:20px;
                            "
                        >
                            ${formatPrice(product.oldPrice)}
                        </div>


                        <p
                            style="
                                color:#555e57;
                                line-height:1.8;
                                font-size:16px;
                            "
                        >
                            ${product.description}
                        </p>


                        <div
                            style="
                                margin:25px 0;
                                padding:18px;
                                border-radius:16px;
                                background:#eef3e9;
                            "
                        >

                            <strong
                                style="
                                    display:block;
                                    color:#315c45;
                                    margin-bottom:10px;
                                "
                            >
                                ${vnText("Thông tin sản phẩm")}
                            </strong>

                            <div
                                style="
                                    display:grid;
                                    gap:8px;
                                    color:#4e5a50;
                                    line-height:1.6;
                                "
                            >

                                ${Object.entries(product.specifications)
                                    .map(([key, value]) => `
                                        <div>
                                            <strong>${vnText(key)}:</strong>
                                            ${vnText(value)}
                                        </div>
                                    `)
                                    .join("")}

                            </div>

                        </div>


                        <button
                            type="button"
                            onclick="addToCart('${product.id}')"
                            style="
                                width:100%;
                                border:0;
                                background:#315c45;
                                color:#fff;
                                padding:16px;
                                border-radius:999px;
                                font-size:16px;
                                font-weight:700;
                                cursor:pointer;
                            "
                        >
                            ${vnText("THÊM VÀO GIỎ HÀNG")}
                        </button>

                    </div>

                </div>


                <div
                    style="
                        padding:0 35px 45px;
                    "
                >

                    <section class="detail-section">

                        <h3>${vnText("Ưu điểm")}</h3>

                        <div
                            style="
                                display:grid;
                                grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
                                gap:12px;
                            "
                        >

                            ${product.advantages.map(item => `
                                <div
                                    style="
                                        padding:15px;
                                        background:#f1f4ed;
                                        border-radius:14px;
                                        color:#315c45;
                                        font-weight:600;
                                    "
                                >
                                    ${item}
                                </div>
                            `).join("")}

                        </div>

                    </section>


                    <section class="detail-section">

                        <h3>${vnText("Công dụng và thành phần nổi bật")}</h3>

                        <div style="display:grid;gap:15px;">

                            ${product.benefits.map(item => `
                                <div>

                                    <strong
                                        style="
                                            display:block;
                                            color:#315c45;
                                            margin-bottom:4px;
                                        "
                                    >
                                        ${item.title}
                                    </strong>

                                    <div
                                        style="
                                            color:#555;
                                            line-height:1.7;
                                        "
                                    >
                                        ${item.text}
                                    </div>

                                </div>
                            `).join("")}

                        </div>

                    </section>


                    <section class="detail-section">

                        <h3>${vnText("Thành phần")}</h3>

                        <ul
                            style="
                                line-height:1.8;
                                color:#555;
                            "
                        >

                            ${product.ingredients.map(item => `
                                <li>${vnText(item)}</li>
                            `).join("")}

                        </ul>

                    </section>


                    <section class="detail-section">

                        <h3>${vnText("Công dụng")}</h3>

                        <p
                            style="
                                color:#555;
                                line-height:1.8;
                            "
                        >
                            ${product.usage}
                        </p>

                    </section>


                    <section class="detail-section">

                        <h3>${vnText("Hướng dẫn sử dụng")}</h3>

                        <ol
                            style="
                                line-height:1.9;
                                color:#555;
                            "
                        >

                            ${product.howToUse.map(item => `
                                <li>${item}</li>
                            `).join("")}

                        </ol>

                    </section>


                    <section class="detail-section">

                        <h3>${vnText("Thông tin pháp lý")}</h3>

                        <div
                            style="
                                overflow-x:auto;
                            "
                        >

                            <table
                                style="
                                    width:100%;
                                    border-collapse:collapse;
                                    color:#555;
                                "
                            >

                                <tbody>

                                    ${Object.entries(product.legal)
                                        .map(([key, value]) => `
                                            <tr>

                                                <td
                                                    style="
                                                        padding:12px;
                                                        border-bottom:1px solid #e5e5df;
                                                        font-weight:700;
                                                        width:35%;
                                                    "
                                                >
                                                    ${vnText(key)}
                                                </td>

                                                <td
                                                    style="
                                                        padding:12px;
                                                        border-bottom:1px solid #e5e5df;
                                                    "
                                                >
                                                    ${vnText(value)}
                                                </td>

                                            </tr>
                                        `)
                                        .join("")}

                                </tbody>

                            </table>

                        </div>

                    </section>


                    <section class="detail-section">

                        <h3>${vnText("Lưu ý")}</h3>

                        <ul
                            style="
```
