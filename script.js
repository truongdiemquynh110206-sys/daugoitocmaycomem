```javascript
/* =========================================================
   CỎ MỀM - TÓC MÂY
   File: script.js

   SẢN PHẨM:
   1. Dầu gội thảo dược Tóc Mây
   2. Combo cặp Tóc Mây - Dầu gội + Kem xả ủ

   CHỨC NĂNG:
   - Dữ liệu sản phẩm
   - Hiển thị sản phẩm
   - Tìm kiếm / lọc
   - Chi tiết sản phẩm
   - Gallery hình ảnh
   - Giỏ hàng
   - Tăng / giảm số lượng
   - Xóa sản phẩm
   - Tổng tiền
   - Đặt hàng
   - Chuẩn hóa tiếng Việt Unicode NFC
========================================================= */

"use strict";


/* =========================================================
   CHUẨN HÓA TIẾNG VIỆT
   Tránh tình trạng dấu bị tách khỏi chữ.
========================================================= */

function vnText(text) {

    if (typeof text !== "string") {
        return text;
    }

    try {
        return text.normalize("NFC");
    } catch (error) {
        return text;
    }
}


/* =========================================================
   HÌNH ẢNH SẢN PHẨM
========================================================= */

const PRODUCT_IMAGES = {

    tocMay:
        "https://media.comem.vn/uploads/2025/04/z4926524379232_8e45f40105a24f00c01caf6f75d4ed0e.webp",

    tocMayDetail:
        "https://media.comem.vn/uploads/August2023/dau-goi-thao-duoc-toc-may-4.webp",

    tocMayCombo:
        "https://media.comem.vn/uploads/2025/09/z5343266919324_35907e679d51e5d707df8213f0fa4fac_99_m.webp"

};


/* =========================================================
   DỮ LIỆU SẢN PHẨM
========================================================= */

const products = [

    /* =====================================================
       SẢN PHẨM 1
    ===================================================== */

    {
        id: "dau-goi-toc-may",

        name: vnText(
            "Dầu gội thảo dược Tóc Mây"
        ),

        brand: vnText(
            "Cỏ Mềm"
        ),

        category: "all",

        type: vnText(
            "Dầu gội thảo dược"
        ),

        price: 329000,

        oldPrice: 369000,

        unit: vnText(
            "300 gram"
        ),

        image:
            PRODUCT_IMAGES.tocMay,

        images: [

            PRODUCT_IMAGES.tocMay,

            PRODUCT_IMAGES.tocMayDetail,

            PRODUCT_IMAGES.tocMayCombo

        ],

        detailImage:
            PRODUCT_IMAGES.tocMayDetail,

        shortDescription: vnText(
            "Dầu gội thảo dược Tóc Mây với chiết xuất Bồ kết và các thảo dược truyền thống, giúp làm sạch tóc và da đầu, hỗ trợ cải thiện tình trạng gàu, gãy rụng và chẻ ngọn."
        ),

        description: vnText(
            "Với chiết xuất từ Bồ kết và thảo dược truyền thống cùng các hoạt chất thiên nhiên, Dầu gội thảo dược Tóc Mây giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn. Sản phẩm có thể dùng cho cả những người có da đầu nhạy cảm."
        ),

        imageCaption: vnText(
            "Dầu gội thảo dược Tóc Mây Cỏ Mềm"
        ),

        specifications: {

            "Tên sản phẩm":
                vnText(
                    "Dầu gội thảo dược Tóc Mây"
                ),

            "Khối lượng":
                vnText(
                    "300 gram"
                ),

            "Vấn đề của tóc":
                vnText(
                    "Tóc xơ, gàu, gãy rụng nhiều"
                ),

            "Công dụng":
                vnText(
                    "Làm sạch tóc, da đầu, ngăn ngừa cải thiện tình trạng gàu, gãy rụng, chẻ ngọn cho mái tóc mềm mượt, chắc khoẻ"
                ),

            "Mùi hương":
                vnText(
                    "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên"
                ),

            "Hạn sử dụng":
                vnText(
                    "24 tháng"
                )
        },

        legal: {

            "Số công bố với Sở Y Tế":
                "18429/23/CBMP-HN",

            "Chịu trách nhiệm về sản phẩm":
                vnText(
                    "Công ty mỹ phẩm thiên nhiên Cỏ Mềm"
                ),

            "Địa chỉ":
                vnText(
                    "Số 225, phố Trần Đăng Ninh, phường Cầu Giấy, TP Hà Nội"
                ),

            "Xuất xứ":
                vnText(
                    "Việt Nam"
                )
        },

        advantagesIntro: vnText(
            "Dầu gội Thảo dược “Không silicon, Không sulfate”, phù hợp người có da đầu nhạy cảm. Công thức kết hợp các thảo mộc truyền thống và hoạt chất thiên nhiên hiện đại giúp phát huy tác dụng:"
        ),

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

        benefits: vnText(
            "Dầu gội đầu giúp làm sạch tóc và da đầu, ngăn ngừa và cải thiện tình trạng tóc gàu, gãy rụng, chẻ ngọn, cho mái tóc mềm mượt, chắc khoẻ. Góp phần thúc đẩy sự phát triển của nang tóc."
        ),

        ingredientsIntro: vnText(
            "Dầu gội thảo dược Tóc Mây không chứa silicone, không sulfate, lành tính, dùng được cho cả những làn da nhạy cảm nhất với sự kết hợp của:"
        ),

        ingredients: [

            vnText(
                "Nước tinh khiết (Purified water)"
            ),

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
    },


    /* =====================================================
       SẢN PHẨM 2
       COMBO CẶP TÓC MÂY
    ===================================================== */

    {
        id: "combo-cap-toc-may",

        name: vnText(
            "Combo cặp Tóc Mây - Dầu gội + Kem xả ủ"
        ),

        brand: vnText(
            "Cỏ Mềm"
        ),

        category: "all",

        type: vnText(
            "Bộ chăm sóc tóc"
        ),

        price: 659000,

        oldPrice: 739000,

        unit: vnText(
            "Bộ sản phẩm"
        ),

        image:
            PRODUCT_IMAGES.tocMayCombo,

        images: [

            PRODUCT_IMAGES.tocMayCombo,

            PRODUCT_IMAGES.tocMay,

            PRODUCT_IMAGES.tocMayDetail

        ],

        detailImage:
            PRODUCT_IMAGES.tocMayCombo,

        shortDescription: vnText(
            "Combo cặp Tóc Mây kết hợp dầu gội thảo dược và sản phẩm chăm sóc tóc sau gội, phù hợp cho nhu cầu làm sạch, dưỡng tóc mềm mượt và chăm sóc mái tóc khô xơ."
        ),

        description: vnText(
            "Combo cặp Tóc Mây là lựa chọn tiện lợi dành cho chu trình chăm sóc tóc tại nhà. Bộ sản phẩm kết hợp bước làm sạch tóc và da đầu với bước chăm sóc sau gội, giúp mái tóc có cảm giác mềm mượt, óng khỏe và dễ vào nếp hơn."
        ),

        imageCaption: vnText(
            "Combo chăm sóc tóc Tóc Mây Cỏ Mềm"
        ),

        specifications: {

            "Tên sản phẩm":
                vnText(
                    "Combo cặp Tóc Mây - Dầu gội + Kem xả ủ"
                ),

            "Bộ sản phẩm":
                vnText(
                    "Dầu gội thảo dược Tóc Mây + Kem xả ủ Tóc Mây"
                ),

            "Phù hợp":
                vnText(
                    "Tóc xơ, khô, gàu, gãy rụng nhiều"
                ),

            "Công dụng":
                vnText(
                    "Làm sạch tóc và da đầu, kết hợp chăm sóc tóc sau gội, giúp tóc mềm mượt, chắc khỏe và dễ chải hơn"
                ),

            "Mùi hương":
                vnText(
                    "Hương thơm dịu nhẹ với mùi thảo dược tự nhiên"
                ),

            "Hạn sử dụng":
                vnText(
                    "Theo thông tin ghi trên từng sản phẩm"
                )

        },

        legal: {

            "Sản phẩm dầu gội":
                "18429/23/CBMP-HN",

            "Chịu trách nhiệm về sản phẩm":
                vnText(
                    "Công ty mỹ phẩm thiên nhiên Cỏ Mềm"
                ),

            "Địa chỉ":
                vnText(
                    "Số 225, phố Trần Đăng Ninh, phường Cầu Giấy, TP Hà Nội"
                ),

            "Xuất xứ":
                vnText(
                    "Việt Nam"
                )

        },

        advantagesIntro: vnText(
            "Combo cặp Tóc Mây được xây dựng theo hướng chăm sóc tóc theo từng bước: làm sạch da đầu và tóc, sau đó dưỡng tóc để mái tóc có cảm giác mềm mượt, dễ chải và chắc khỏe hơn."
        ),

        advantages: [

            vnText(
                "Dầu gội thảo dược Tóc Mây hỗ trợ làm sạch tóc và da đầu."
            ),

            vnText(
                "Kết hợp bước chăm sóc sau gội giúp tóc mềm mượt và dễ chải hơn."
            ),

            vnText(
                "Thích hợp cho người đang gặp tình trạng tóc xơ, khô, gàu hoặc gãy rụng nhiều."
            ),

            vnText(
                "Hương thơm dịu nhẹ với cảm giác thảo dược tự nhiên."
            ),

            vnText(
                "Có thể sử dụng như một bộ chăm sóc tóc tại nhà."
            ),

            vnText(
                "Thiết kế thành combo giúp thuận tiện khi sử dụng đồng bộ các bước chăm sóc tóc."
            )

        ],

        benefits: vnText(
            "Sử dụng dầu gội để làm sạch tóc và da đầu, sau đó kết hợp sản phẩm chăm sóc sau gội để dưỡng tóc. Chu trình này giúp tóc có cảm giác mềm mượt, óng khỏe, dễ chải và dễ chăm sóc hơn."
        ),

        ingredientsIntro: vnText(
            "Thành phần của từng sản phẩm trong combo được thể hiện trên bao bì sản phẩm. Phần dầu gội thảo dược Tóc Mây có công thức kết hợp các thành phần thảo dược và hoạt chất thiên nhiên."
        ),

        ingredients: [

            vnText(
                "Dầu gội: Nước tinh khiết (Purified water)"
            ),

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

            "Phenoxyethanol.",

            vnText(
                "Kem xả ủ: sử dụng theo thành phần được công bố và ghi trên bao bì sản phẩm."
            )

        ],

        finalMessage: vnText(
            "Nếu bạn muốn xây dựng một chu trình chăm sóc tóc đầy đủ hơn tại nhà, combo cặp Tóc Mây là lựa chọn thuận tiện để kết hợp bước làm sạch với bước dưỡng tóc sau gội."
        ),

        howToUse: [

            vnText(
                "Bước 1: Làm ướt tóc và sử dụng dầu gội Tóc Mây, massage nhẹ nhàng tóc và da đầu."
            ),

            vnText(
                "Bước 2: Xả sạch tóc với nước."
            ),

            vnText(
                "Bước 3: Sử dụng Kem Xả ủ Tóc Mây lên phần thân và ngọn tóc."
            ),

            vnText(
                "Bước 4: Massage nhẹ nhàng, ủ trong thời gian phù hợp rồi xả sạch với nước."
            )

        ],

        notes: [

            vnText(
                "Có thể gội 2 lần nếu muốn, đặc biệt khi tóc và da đầu có nhiều dầu hoặc bụi bẩn."
            ),

            vnText(
                "Chiết xuất bồ kết đậm đặc trong dầu gội có thể gây cay nhẹ nếu rơi vào mắt. Nếu xảy ra, nên rửa sạch lại bằng nước sạch."
            ),

            vnText(
                "Đối với Kem Xả ủ, sử dụng theo hướng dẫn được in trên bao bì sản phẩm."
            ),

            vnText(
                "Bảo quản sản phẩm ở nơi khô ráo, thoáng mát và tránh ánh nắng trực tiếp."
            )

        ]
    }

];


/* =========================================================
   GIỎ HÀNG
========================================================= */

let cart = [];

try {

    cart = JSON.parse(
        localStorage.getItem("tocMayCart") || "[]"
    );

    if (!Array.isArray(cart)) {
        cart = [];
    }

} catch (error) {

    cart = [];

}


/* =========================================================
   FORMAT GIÁ
========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "vi-VN",
        {
            style: "currency",
            currency: "VND"
        }
    ).format(price);

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
   THÊM SẢN PHẨM
========================================================= */

function addToCart(productId) {

    const product =
        findProduct(productId);

    if (!product) {
        return;
    }

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

    showToast(
        `Đã thêm "${product.name}" vào giỏ hàng`
    );

}


/* =========================================================
   XÓA SẢN PHẨM
========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

}


/* =========================================================
   TĂNG / GIẢM SỐ LƯỢNG
========================================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            product => product.id === productId
        );

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== productId
            );

    }

    saveCart();

}


/* =========================================================
   CẬP NHẬT GIỎ HÀNG
========================================================= */

function updateCart() {

    const countElements =
        document.querySelectorAll(
            "#cart-count, .cart-count, [data-cart-count]"
        );

    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    countElements.forEach(
        element => {

            element.textContent =
                totalQuantity;

        }
    );


    const cartItems =
        document.querySelector(
            "#cart-items"
        );

    const cartTotal =
        document.querySelector(
            "#cart-total"
        );


    if (!cartItems) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <p>
                    ${vnText(
                        "Giỏ hàng đang trống"
                    )}
                </p>

            </div>

        `;

        if (cartTotal) {
            cartTotal.textContent =
                formatPrice(0);
        }

        return;
    }


    cartItems.innerHTML =
        cart.map(item => {

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

                        <h4>
                            ${item.name}
                        </h4>

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
                            Xóa
                        </button>

                    </div>

                </div>

            `;

        }).join("");


    const totalPrice =
        cart.reduce(
            (total, item) =>
                total +
                item.price * item.quantity,
            0
        );


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(totalPrice);

    }

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    let toast =
        document.querySelector(
            "#toast-message"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "toast-message";

        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        vnText(message);

    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   HIỂN THỊ TẤT CẢ SẢN PHẨM
   Không chia danh mục.
========================================================= */

function renderProducts(
    list = products
) {

    const productList =
        document.querySelector(
            "#product-list"
        );

    if (!productList) {
        return;
    }


    if (!list.length) {

        productList.innerHTML = `

            <div class="no-products">

                ${vnText(
                    "Không tìm thấy sản phẩm phù hợp."
                )}

            </div>

        `;

        return;
    }


    productList.innerHTML =
        list.map(product => {

            return `

                <article
                    class="product-card"
                    data-product-id="${product.id}"
                >

                    <!-- HÌNH FULL KHUNG -->

                    <button
                        type="button"
                        class="product-image-button"
                        onclick="openProductDetail('${product.id}')"
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


                        <div class="product-type">
                            ${product.type}
                        </div>


                        <h3 class="product-name">
                            ${product.name}
                        </h3>


                        <p class="product-description">
                            ${product.shortDescription}
                        </p>


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
                                Xem chi tiết
                            </button>


                            <button
                                type="button"
                                class="add-cart-btn"
                                onclick="addToCart('${product.id}')"
                            >
                                Thêm vào giỏ
                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


/* =========================================================
   TÌM KIẾM / LỌC
========================================================= */

function filterProducts(
    keyword = ""
) {

    const searchText =
        vnText(keyword)
            .trim()
            .toLowerCase();


    if (!searchText) {

        renderProducts(
            products
        );

        return;
    }


    const filtered =
        products.filter(
            product => {

                const searchableText = [

                    product.name,

                    product.brand,

                    product.type,

                    product.shortDescription,

                    product.description,

                    ...Object.values(
                        product.specifications || {}
                    )

                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();


                return searchableText.includes(
                    searchText
                );

            }
        );


    renderProducts(
        filtered
    );

}


/* =========================================================
   SETUP Ô TÌM KIẾM
========================================================= */

function setupSearch() {

    const searchInput =
        document.querySelector(
            "#product-search, #search-input, [data-product-search]"
        );


    if (!searchInput) {
        return;
    }


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

function openProductDetail(
    productId
) {

    const product =
        findProduct(productId);


    if (!product) {
        return;
    }


    let modal =
        document.querySelector(
            "#product-detail-modal"
        );


    if (!modal) {

        modal =
            document.createElement(
                "div"
            );

        modal.id =
            "product-detail-modal";

        modal.className =
            "product-detail-modal";

        document.body.appendChild(
            modal
        );

    }


    const specificationRows =
        Object.entries(
            product.specifications
        )
            .map(
                ([key, value]) => {

                    return `

                        <tr>

                            <th>
                                ${key}
                            </th>

                            <td>
                                ${value}
                            </td>

                        </tr>

                    `;

                }
            )
            .join("");


    const legalRows =
        Object.entries(
            product.legal
        )
            .map(
                ([key, value]) => {

                    return `

                        <div class="legal-row">

                            <strong>
                                ${key}
                            </strong>

                            <span>
                                ${value}
                            </span>

                        </div>

                    `;

                }
            )
            .join("");


    const advantages =
        product.advantages
            .map(
                item =>
                    `<li>${item}</li>`
            )
            .join("");


    const ingredients =
        product.ingredients
            .map(
                item =>
                    `<li>${item}</li>`
            )
            .join("");


    const howToUse =
        product.howToUse
            .map(
                (item, index) => {

                    return `

                        <li>

                            <strong>
                                Bước ${index + 1}:
                            </strong>

                            ${item}

                        </li>

                    `;

                }
            )
            .join("");


    const notes =
        product.notes
            .map(
                item =>
                    `<li>${item}</li>`
            )
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
        >


            <button
                type="button"
                class="product-detail-close"
                onclick="closeProductDetail()"
                aria-label="Đóng"
            >
                ×
            </button>


            <!-- =========================================
                 PHẦN ĐẦU
            ========================================== -->

            <div class="product-detail-grid">


                <!-- GALLERY -->

                <div class="product-detail-gallery">

                    <div class="product-main-image-wrap">

                        <img
                            id="product-main-image"
                            src="${product.images[0]}"
                            alt="${product.name}"
                        >

                    </div>


                    <div class="product-thumbnails">

                        ${
                            product.images
                                .map(
                                    (image, index) => {

                                        return `

                                            <button
                                                type="button"
                                                class="product-thumbnail ${
                                                    index === 0
                                                        ? "active"
                                                        : ""
                                                }"
                                                onclick="changeProductImage('${image}', this)"
                                            >

                                                <img
                                                    src="${image}"
                                                    alt="${product.name} - hình ${index + 1}"
                                                >

                                            </button>

                                        `;

                                    }
                                )
                                .join("")
                        }

                    </div>

                </div>


                <!-- THÔNG TIN CHÍNH -->

                <div class="product-detail-info">

                    <div class="product-detail-brand">
                        ${product.brand}
                    </div>


                    <div class="detail-product-type">
                        ${product.type}
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
                        Thêm vào giỏ hàng
                    </button>


                    <div class="legal-information">

                        <h3>
                            Thông tin sản phẩm
                        </h3>

                        ${legalRows}

                    </div>

                </div>

            </div>


            <!-- =========================================
                 NỘI DUNG CHI TIẾT
            ========================================== -->

            <div class="product-long-content">


                <!-- GIỚI THIỆU -->

                <section class="detail-section">

                    <h3>
                        Giới thiệu sản phẩm
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


                <!-- THÔNG SỐ -->

                <section class="detail-section">

                    <h3>
                        Thông số sản phẩm
                    </h3>


                    <div class="specification-table-wrap">

                        <table class="specification-table">

                            <thead>

                                <tr>

                                    <th>
                                        Thông số
                                    </th>

                                    <th>
                                        Nội dung
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                ${specificationRows}

                            </tbody>

                        </table>

                    </div>

                </section>


                <!-- ƯU ĐIỂM -->

                <section class="detail-section">

                    <h3>
                        Ưu điểm nổi bật
                    </h3>


                    <p>
                        ${product.advantagesIntro}
                    </p>


                    <ul class="detail-list">

                        ${advantages}

                    </ul>

                </section>


                <!-- CÔNG DỤNG -->

                <section class="detail-section">

                    <h3>
                        Công dụng
                    </h3>


                    <p>
                        ${product.benefits}
                    </p>

                </section>


                <!-- THÀNH PHẦN -->

                <section class="detail-section">

                    <h3>
                        Thành phần của sản phẩm
                    </h3>


                    <p>
                        ${product.ingredientsIntro}
                    </p>


                    <ul class="detail-list">

                        ${ingredients}

                    </ul>

                </section>


                <!-- THÔNG ĐIỆP -->

                <section class="detail-section final-message">

                    <p>
                        <strong>
                            ${product.finalMessage}
                        </strong>
                    </p>

                </section>


                <!-- HƯỚNG DẪN -->

                <section class="detail-section">

                    <h3>
                        Hướng dẫn sử dụng
                    </h3>


                    <ol class="detail-list">

                        ${howToUse}

                    </ol>

                </section>


                <!-- LƯU Ý -->

                <section class="detail-section warning-section">

                    <h3>
                        Lưu ý quan trọng
                    </h3>


                    <ul class="detail-list">

                        ${notes}

                    </ul>

                </section>


                <!-- GIÁ -->

                <section class="detail-buy-box">

                    <div>

                        <small>
                            Giá sản phẩm
                        </small>

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                    </div>


                    <button
                        type="button"
                        onclick="addToCart('${product.id}')"
                    >
                        Thêm vào giỏ hàng
                    </button>

                </section>


            </div>

        </div>

    `;


    modal.classList.add(
        "active"
    );


    document.body.classList.add(
        "product-detail-open"
    );


    setupProductDetailStyles();

}


/* =========================================================
   ĐỔI HÌNH ẢNH
========================================================= */

function changeProductImage(
    imageUrl,
    button
) {

    const mainImage =
        document.querySelector(
            "#product-main-image"
        );


    if (!mainImage) {
        return;
    }


    mainImage.src =
        imageUrl;


    document
        .querySelectorAll(
            ".product-thumbnail"
        )
        .forEach(
            item => {

                item.classList.remove(
                    "active"
                );

            }
        );


    if (button) {

        button.classList.add(
            "active"
        );

    }

}


/* =========================================================
   ĐÓNG CHI TIẾT
========================================================= */

function closeProductDetail(
    event
) {

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


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "product-detail-open"
    );

}


/* =========================================================
   CSS
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
        document.createElement(
            "style"
        );


    style.id =
        "toc-may-script-styles";


    style.textContent = `

        /* =====================================================
           PRODUCT AREA
        ===================================================== */

        #product-list {

            width: 100%;

            max-width: 1500px;

            margin: 0 auto;

            padding:
                35px clamp(18px, 4vw, 55px);

            display: grid;

            grid-template-columns:
                repeat(
                    auto-fit,
                    minmax(330px, 1fr)
                );

            gap: 32px;

            box-sizing: border-box;

        }


        .product-card {

            width: 100%;

            min-width: 0;

            overflow: hidden;

            background:
                #faf6eb;

            border:
                1px solid
                rgba(70, 90, 65, .13);

            border-radius:
                22px;

            box-shadow:
                0 12px 35px
                rgba(50, 70, 45, .08);

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        .product-card:hover {

            transform:
                translateY(-6px);

            box-shadow:
                0 20px 50px
                rgba(50, 70, 45, .14);

        }


        /* HÌNH FULL KHUNG */

        .product-image-button {

            display: block;

            width: 100%;

            padding: 0;

            margin: 0;

            border: 0;

            background:
                transparent;

            cursor: pointer;

        }


        .product-image {

            display: block;

            width: 100%;

            height: 480px;

            object-fit: cover;

            object-position: center;

        }


        .product-card-content {

            padding: 24px;

        }


        .product-brand {

            color:
                #708268;

            font-size: 13px;

            font-weight: 800;

            margin-bottom: 4px;

        }


        .product-type {

            display: inline-block;

            margin-bottom: 8px;

            padding:
                4px 9px;

            border-radius: 999px;

            background:
                #e3ebde;

            color:
                #4f684a;

            font-size: 11px;

            font-weight: 700;

        }


        .product-name {

            margin:
                0 0 12px;

            color:
                #30452f;

            font-size: 23px;

            line-height: 1.35;

        }


        .product-description {

            margin:
                0 0 16px;

            color:
                #687165;

            font-size: 14px;

            line-height: 1.75;

        }


        .product-price-row {

            display: flex;

            align-items: center;

            flex-wrap: wrap;

            gap: 10px;

            margin-bottom: 18px;

        }


        .product-price {

            color:
                #4d6849;

            font-size: 23px;

            font-weight: 900;

        }


        .product-old-price {

            color:
                #999;

            font-size: 14px;

            text-decoration:
                line-through;

        }


        .product-actions {

            display: grid;

            grid-template-columns:
                1fr 1fr;

            gap: 10px;

        }


        .product-actions button {

            min-height: 48px;

            padding:
                11px 14px;

            border: 0;

            border-radius:
                12px;

            cursor: pointer;

            font-weight: 800;

            transition:
                transform .2s ease,
                opacity .2s ease;

        }


        .product-actions button:hover {

            transform:
                translateY(-2px);

            opacity:
                .92;

        }


        .view-product-btn {

            background:
                #e1e9dc;

            color:
                #3d5739;

        }


        .add-cart-btn {

            background:
                #526b4d;

            color:
                white;

        }


        .no-products {

            grid-column:
                1 / -1;

            padding:
                70px 20px;

            text-align:
                center;

            color:
                #697365;

            font-size:
                18px;

        }


        /* =====================================================
           MODAL
        ===================================================== */

        body.product-detail-open {

            overflow:
                hidden;

        }


        .product-detail-modal {

            position:
                fixed;

            inset:
                0;

            z-index:
                99999;

            display:
                none;

        }


        .product-detail-modal.active {

            display:
                block;

        }


        .product-modal-overlay {

            position:
                absolute;

            inset:
                0;

            background:
                rgba(25, 39, 24, .66);

            backdrop-filter:
                blur(5px);

        }


        .product-detail-container {

            position:
                relative;

            width:
                min(
                    1150px,
                    calc(100% - 24px)
                );

            max-height:
                calc(100vh - 24px);

            overflow-y:
                auto;

            margin:
                12px auto;

            background:
                #fbf6ea;

            border-radius:
                25px;

            box-shadow:
                0 30px 90px
                rgba(0, 0, 0, .28);

        }


        .product-detail-close {

            position:
                absolute;

            top:
                18px;

            right:
                18px;

            z-index:
                20;

            width:
                45px;

            height:
                45px;

            border:
                0;

            border-radius:
                50%;

            background:
                rgba(255, 255, 255, .94);

            color:
                #30462f;

            font-size:
                30px;

            line-height:
                1;

            cursor:
                pointer;

            box-shadow:
                0 5px 20px
                rgba(0, 0, 0, .12);

        }


        .product-detail-grid {

            display:
                grid;

            grid-template-columns:
                minmax(0, 1.05fr)
                minmax(0, .95fr);

            gap:
                42px;

            padding:
                42px;

        }


        /* =====================================================
           GALLERY
        ===================================================== */

        .product-detail-gallery {

            min-width:
                0;

        }


        .product-main-image-wrap {

            width:
                100%;

            aspect-ratio:
                1 / 1;

            overflow:
                hidden;

            border-radius:
                20px;

            background:
                #ebe5d8;

        }


        .product-main-image-wrap img {

            display:
                block;

            width:
                100%;

            height:
                100%;

            object-fit:
                cover;

        }


        .product-thumbnails {

            display:
                grid;

            grid-template-columns:
                repeat(3, 1fr);

            gap:
                12px;

            margin-top:
                12px;

        }


        .product-thumbnail {

            padding:
                0;

            border:
                2px solid
                transparent;

            border-radius:
                12px;

            overflow:
                hidden;

            background:
                #ebe5d8;

            cursor:
                pointer;

            aspect-ratio:
                1 / 1;

        }


        .product-thumbnail.active {

            border-color:
                #5c7655;

        }


        .product-thumbnail img {

            display:
                block;

            width:
                100%;

            height:
                100%;

            object-fit:
                cover;

        }


        /* =====================================================
           DETAIL INFO
        ===================================================== */

        .product-detail-brand {

            margin-bottom:
                6px;

            color:
                #6d8067;

            font-size:
                14px;

            font-weight:
                800;

            text-transform:
                uppercase;

            letter-spacing:
                .08em;

        }


        .detail-product-type {

            display:
                inline-block;

            margin-bottom:
                14px;

            padding:
                5px 10px;

            border-radius:
                999px;

            background:
                #e0e9dc;

            color:
                #4e6749;

            font-size:
                12px;

            font-weight:
                800;

        }


        .product-detail-info h2 {

            margin:
                0 0 18px;

            color:
                #30462f;

            font-size:
                clamp(
                    30px,
                    4vw,
                    44px
                );

            line-height:
                1.15;

        }


        .detail-price {

            margin-bottom:
                20px;

            color:
                #4f6949;

            font-size:
                30px;

            font-weight:
                900;

        }


        .detail-price span {

            margin-left:
                8px;

            color:
                #999;

            font-size:
                16px;

            font-weight:
                500;

            text-decoration:
                line-through;

        }


        .detail-description {

            color:
                #606b5e;

            font-size:
                16px;

            line-height:
                1.9;

        }


        .detail-add-cart {

            width:
                100%;

            min-height:
                52px;

            margin:
                18px 0 28px;

            padding:
                12px 20px;

            border:
                0;

            border-radius:
                13px;

            background:
                #526b4d;

            color:
                white;

            cursor:
                pointer;

            font-size:
                16px;

            font-weight:
                800;

        }


        .legal-information {

            padding-top:
                22px;

            border-top:
                1px solid
                rgba(70, 90, 65, .13);

        }


        .legal-information h3 {

            margin:
                0 0 15px;

            color:
                #3c5538;

            font-size:
                20px;

        }


        .legal-row {

            display:
                grid;

            grid-template-columns:
                minmax(150px, .7fr)
                1fr;

            gap:
                12px;

            padding:
                10px 0;

            border-bottom:
                1px solid
                rgba(70, 90, 65, .08);

            font-size:
                14px;

            line-height:
                1.6;

        }


        .legal-row strong {

            color:
                #41563d;

        }


        .legal-row span {

            color:
                #626b5f;

        }


        /* =====================================================
           LONG CONTENT
        ===================================================== */

        .product-long-content {

            padding:
                0 42px 50px;

        }


        .detail-section {

            padding:
                35px 0;

            border-top:
                1px solid
                rgba(70, 90, 65, .12);

        }


        .detail-section h3 {

            margin:
                0 0 18px;

            color:
                #354c32;

            font-size:
                clamp(
                    23px,
                    3vw,
                    31px
                );

            line-height:
                1.3;

        }


        .detail-section p {

            margin:
                0 0 16px;

            color:
                #5e685b;

            font-size:
                16px;

            line-height:
                1.9;

        }


        .detail-list {

            margin:
                15px 0 0;

            padding-left:
                25px;

        }


        .detail-list li {

            margin-bottom:
                12px;

            color:
                #5e685b;

            line-height:
                1.8;

        }


        .detail-feature-image {

            margin:
                25px 0 0;

            text-align:
                center;

        }


        .detail-feature-image img {

            display:
                block;

            width:
                100%;

            max-width:
                850px;

            max-height:
                700px;

            margin:
                0 auto;

            object-fit:
                cover;

            border-radius:
                20px;

        }


        .detail-feature-image figcaption {

            margin-top:
                10px;

            color:
                #75806f;

            font-size:
                14px;

            font-style:
                italic;

        }


        /* =====================================================
           TABLE
        ===================================================== */

        .specification-table-wrap {

            width:
                100%;

            overflow-x:
                auto;

        }


        .specification-table {

            width:
                100%;

            border-collapse:
                collapse;

            background:
                #fffdf8;

            overflow:
                hidden;

        }


        .specification-table th,
        .specification-table td {

            padding:
                15px;

            border:
                1px solid
                #e4e0d6;

            text-align:
                left;

            vertical-align:
                top;

            line-height:
                1.65;

        }


        .specification-table th {

            width:
                28%;

            background:
                #e3ebde;

            color:
                #3d5539;

        }


        .specification-table td {

            color:
                #5e665b;

        }


        /* =====================================================
           FINAL
        ===================================================== */

        .final-message {

            padding:
                28px;

            border-radius:
                18px;

            background:
                #e3ebde;

        }


        .final-message p {

            margin:
                0;

            color:
                #40583c;

        }


        .warning-section {

            padding:
                28px;

            border-radius:
                18px;

            background:
                #f0e9dc;

        }


        /* =====================================================
           BUY BOX
        ===================================================== */

        .detail-buy-box {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                20px;

            padding:
                24px;

            border-radius:
                18px;

            background:
                #40593b;

        }


        .detail-buy-box small {

            display:
                block;

            margin-bottom:
                3px;

            color:
                rgba(255,255,255,.7);

        }


        .detail-buy-box strong {

            display:
                block;

            color:
                white;

            font-size:
                25px;

        }


        .detail-buy-box button {

            min-height:
                48px;

            padding:
                11px 20px;

            border:
                0;

            border-radius:
                11px;

            background:
                white;

            color:
                #3f573a;

            cursor:
                pointer;

            font-weight:
                900;

        }


        /* =====================================================
           CART
        ===================================================== */

        .cart-item {

            display:
                flex;

            gap:
                15px;

            padding:
                15px 0;

            border-bottom:
                1px solid #e3e0d8;

        }


        .cart-item-image {

            width:
                85px;

            height:
                85px;

            flex:
                0 0 85px;

            object-fit:
                cover;

            border-radius:
                10px;

        }


        .cart-item-info {

            flex:
                1;

            min-width:
                0;

        }


        .cart-item-info h4 {

            margin:
                0 0 7px;

            color:
                #354b32;

        }


        .cart-item-price {

            color:
                #5b7055;

            font-size:
                14px;

        }


        .cart-quantity {

            display:
                flex;

            align-items:
                center;

            gap:
                10px;

            margin-top:
                10px;

        }


        .cart-quantity button {

            width:
                30px;

            height:
                30px;

            border:
                0;

            border-radius:
                8px;

            background:
                #e1e9dc;

            color:
                #40563c;

            cursor:
                pointer;

            font-size:
                18px;

        }


        .cart-item-total {

            margin-top:
                7px;

            color:
                #4f6949;

            font-weight:
                800;

        }


        .remove-cart-item {

            margin-top:
                7px;

            padding:
                0;

            border:
                0;

            background:
                transparent;

            color:
                #9b6a60;

            cursor:
                pointer;

        }


        .empty-cart {

            padding:
                50px 20px;

            text-align:
                center;

            color:
                #6e786a;

        }


        .empty-cart-icon {

            margin-bottom:
                10px;

            font-size:
                40px;

        }


        /* =====================================================
           TOAST
        ===================================================== */

        #toast-message {

            position:
                fixed;

            left:
                50%;

            bottom:
                25px;

            z-index:
                100000;

            transform:
                translate(-50%, 20px);

            opacity:
                0;

            pointer-events:
                none;

            padding:
                13px 20px;

            border-radius:
                12px;

            background:
                #405a3c;

            color:
                white;

            font-size:
                14px;

            box-shadow:
                0 10px 30px
                rgba(0,0,0,.18);

            transition:
                opacity .25s ease,
                transform .25s ease;

        }


        #toast-message.show {

            opacity:
                1;

            transform:
                translate(-50%, 0);

        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 900px) {

            #product-list {

                grid-template-columns:
                    repeat(
                        2,
                        minmax(0, 1fr)
                    );

            }


            .product-image {

                height:
                    360px;

            }


            .product-detail-grid {

                grid-template-columns:
                    1fr;

                padding:
                    28px;

            }

        }


        @media (max-width: 600px) {

            #product-list {

                grid-template-columns:
                    1fr;

                padding:
                    18px 12px;

            }


            .product-image {

                height:
                    390px;

            }


            .product-card-content {

                padding:
                    19px;

            }


            .product-actions {

                grid-template-columns:
                    1fr;

            }


            .product-detail-container {

                width:
                    calc(100% - 12px);

                max-height:
                    calc(100vh - 12px);

                margin:
                    6px auto;

                border-radius:
                    18px;

            }


            .product-detail-grid {

                padding:
                    22px 15px;

                gap:
                    25px;

            }


            .product-long-content {

                padding:
                    0 15px 30px;

            }


            .product-detail-close {

                top:
                    9px;

                right:
                    9px;

                width:
                    38px;

                height:
                    38px;

                font-size:
                    25px;

            }


            .legal-row {

                grid-template-columns:
                    1fr;

                gap:
                    3px;

            }


            .detail-buy-box {

                flex-direction:
                    column;

                align-items:
                    stretch;

            }


            .detail-buy-box button {

                width:
                    100%;

            }


            .specification-table th,
            .specification-table td {

                padding:
                    11px;

                font-size:
                    14px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   ĐẶT HÀNG
========================================================= */

function submitOrder() {

    if (!cart.length) {

        showToast(
            "Giỏ hàng đang trống"
        );

        return;

    }


    const order = {

        items:
            cart.map(
                item => ({

                    id:
                        item.id,

                    name:
                        item.name,

                    price:
                        item.price,

                    quantity:
                        item.quantity

                })
            ),

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


    console.log(
        "ĐƠN HÀNG:",
        order
    );


    cart = [];

    saveCart();


    showToast(
        "Đặt hàng thành công!"
    );

}


/* =========================================================
   TƯ VẤN
========================================================= */

function submitConsult() {

    showToast(
        "Cảm ơn bạn! Cỏ Mềm sẽ liên hệ tư vấn."
    );

}


/* =========================================================
   ESC ĐÓNG POPUP
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProductDetail();

        }

    }
);


/* =========================================================
   KHỞI TẠO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProducts();

        updateCart();

        setupSearch();

        setupProductDetailStyles();

        window.cart = cart;

        window.products = products;

    }
);


/* =========================================================
   EXPORT HÀM CHO HTML
========================================================= */

window.vnText =
    vnText;

window.products =
    products;

window.renderProducts =
    renderProducts;

window.filterProducts =
    filterProducts;

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
