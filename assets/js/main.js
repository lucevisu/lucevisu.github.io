/**
 * Portfolio Main JavaScript
 * Author: Lê Vủ Lực
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isExpanded = navMenu.classList.contains("open");
      navToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Đóng menu khi click vào một link
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. Active Menu Item based on current path
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    
    // So khớp URL hiện tại
    if (href === "/" && (currentPath === "" || currentPath === "/index.html")) {
      link.classList.add("active");
    } else if (href !== "/" && currentPath.endsWith(href.replace(/^\//, ""))) {
      link.classList.add("active");
    }
  });

  // 3. Contact Form Submission (Mailto Handler)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("senderName").value.trim();
      const email = document.getElementById("senderEmail").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      
      if (!name || !email || !message) {
        alert("Vui lòng điền đầy đủ các thông tin bắt buộc.");
        return;
      }

      // Tạo link mailto để gửi trực tiếp qua ứng dụng email của người dùng
      const mailtoRecipient = "your-email@example.com"; // Thay bằng email của Lê Vủ Lực
      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subject || 'Tin nhắn mới từ ' + name}`);
      const mailtoBody = encodeURIComponent(
        `Chào Lê Vủ Lực,\n\nBạn có tin nhắn mới từ:\nTên: ${name}\nEmail: ${email}\n\nNội dung:\n${message}\n`
      );

      window.location.href = `mailto:${mailtoRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      const formStatus = document.getElementById("formStatus");
      if (formStatus) {
        formStatus.style.display = "block";
        formStatus.innerHTML = "✅ Trình gửi thư của bạn đã được mở để hoàn tất gửi email!";
      }
    });
  }
});
