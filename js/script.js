document.addEventListener("DOMContentLoaded", function () {
    // ✅ 多个折扣码复制功能
    document.querySelectorAll(".copyButton").forEach(button => {
        button.addEventListener("click", function () {
            const codeId = this.getAttribute("data-code");
            const codeInput = document.getElementById(codeId);
            if (codeInput) {
                codeInput.select();
                codeInput.setSelectionRange(0, 99999); // For mobile devices

                // 优先使用 Clipboard API（现代浏览器）
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(codeInput.value).then(() => {
                        alert("Copied:" + codeInput.value);
                    }).catch(err => {
                        console.error("Clipboard write failed", err);
                    });
                } else {
                    // 兼容旧浏览器
                    document.execCommand("copy");
                    alert("Copied:" + codeInput.value);
                }
            }
        });
    });

    // ✅ 移动端导航菜单切换
    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            document.querySelector(".nav-links").classList.toggle("active");
        });
    }
});
