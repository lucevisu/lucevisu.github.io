# Website Portfolio Cá Nhân - Lê Vủ Lực

Trang web Portfolio cá nhân được xây dựng bằng **HTML5, CSS3, JavaScript ES6, Markdown và Jekyll**, tự động xuất bản trên **GitHub Pages** tại địa chỉ: [https://vulil.github.io](https://vulil.github.io).

---

## 🌟 Tính Năng Nổi Bật

- **Giao diện Hiện đại (Dark Mode):** Phối màu xanh dương & tím chuyển sắc (gradient) thời thượng, hiệu ứng phát sáng nhẹ nhàng và sang trọng.
- **Tương thích mọi thiết bị (Responsive):** Tự động co giãn mượt mà trên Desktop, Laptop, Máy tính bảng và Điện thoại (có thanh menu trượt di động).
- **Trang Blog tự động với Jekyll & Markdown:** Đăng tải bài viết mới chỉ bằng việc thêm file `.md` vào thư mục `_posts/`.
- **Đầy đủ 5 phân hệ trang:**
  - `index.html`: Trang chủ (Hero banner, giới thiệu ngắn gọn, định hướng phát triển).
  - `about.html`: Trang giới thiệu (Học vấn, mục tiêu nghề nghiệp, kỹ năng cốt lõi và châm ngôn).
  - `projects.html`: Trưng bày dự án (Mô tả, danh sách công nghệ và liên kết mã nguồn).
  - `blog.html`: Danh sách bài viết & kinh nghiệm học tập.
  - `contact.html`: Trang liên hệ với biểu mẫu tương tác và nút gửi `mailto:`.

---

## 📁 Cấu Trúc Thư Mục

```text
vulil.github.io/
├── _config.yml                             # Cấu hình website Jekyll
├── _layouts/                               # Giao diện khung dùng chung
│   ├── default.html                        # Khung giao diện chính (Header, Nav, Footer)
│   └── post.html                           # Khung hiển thị chi tiết bài viết Blog
├── _posts/                                 # Thư mục chứa bài viết Markdown
│   └── 2026-10-30-bai-viet-dau-tien.md     # Bài viết mẫu
├── assets/
│   ├── css/
│   │   └── style.css                       # Toàn bộ mã định dạng CSS Dark Mode
│   ├── js/
│   │   └── main.js                         # JavaScript xử lý menu mobile và liên hệ
│   └── images/                             # Thư mục chứa hình ảnh dự án và đại diện
├── index.html                              # Trang chủ
├── about.html                              # Trang giới thiệu bản thân
├── projects.html                           # Trang dự án
├── blog.html                               # Trang danh sách bài viết
├── contact.html                            # Trang liên hệ
├── plan.md                                 # Bản kế hoạch dự án
└── README.md                               # Hướng dẫn sử dụng
```

---

## 🚀 Cách Cập Nhật & Đẩy Lên GitHub Pages

Vì kho lưu trữ này đã được liên kết với `https://github.com/lucevisu/vulil.github.io.git`, để đưa website lên internet bạn chỉ cần thực hiện 3 lệnh Git đơn giản trong PowerShell hoặc Terminal:

```bash
cd D:\vuluc\vulil.github.io

# 1. Thêm toàn bộ file mới vào Git
git add .

# 2. Tạo bản ghi commit
git commit -m "Khoi tao website Portfolio ca nhan cho Le Vu Luc"

# 3. Đẩy lên nhánh main trên GitHub
git push -u origin main
```

Sau khi `git push`, GitHub Actions / Pages sẽ tự động kích hoạt tiến trình build Jekyll trong khoảng 1 - 2 phút. Website của bạn sẽ hoạt động trực tiếp tại:
👉 **[https://vulil.github.io](https://vulil.github.io)**

---

## ✍️ Cách Thêm Bài Viết Mới

Để đăng một bài viết blog mới:
1. Tạo một file mới trong thư mục `_posts/` theo quy ước: `YYYY-MM-DD-tieu-de-bai-viet.md`.
2. Khai báo phần đầu file (Front Matter):
   ```yaml
   ---
   layout: post
   title: "Tiêu đề bài viết của bạn"
   date: 2026-10-31 09:00:00 +0700
   category: "Công nghệ"
   excerpt: "Mô tả ngắn gọn về bài viết."
   ---
   ```
3. Viết nội dung bằng cú pháp Markdown bình thường bên dưới.
4. Chạy `git add .`, `git commit` và `git push` để tự động xuất bản.
