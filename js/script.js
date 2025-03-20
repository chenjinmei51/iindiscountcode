document.addEventListener("DOMContentLoaded", function() {
    // ✅ 复制折扣码
    document.getElementById("copyButton").addEventListener("click", function() {
        let discountCode = document.getElementById("discountCode");
        discountCode.select();
        document.execCommand("copy");
        alert("Discount code copied: " + discountCode.value);
    });

    // ✅ 移动端导航折叠效果
    document.querySelector(".menu-toggle").addEventListener("click", function() {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});
