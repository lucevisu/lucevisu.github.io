# PROJECT PLAN -- PERSONAL PORTFOLIO

## 1. Tổng quan dự án

Xây dựng website Portfolio cá nhân cho Lê Vủ Lực bằng HTML, CSS,
JavaScript, Markdown và Jekyll. Website được triển khai miễn phí trên
GitHub Pages.

## 2. Mục tiêu

-   Giới thiệu bản thân, kỹ năng, quá trình học tập và định hướng nghề
    nghiệp.
-   Trưng bày các dự án đã thực hiện.
-   Chia sẻ kiến thức thông qua Blog viết bằng Markdown.
-   Có giao diện hiện đại, dễ sử dụng và tương thích với máy tính, điện
    thoại.
-   Xuất bản website công khai bằng GitHub Pages.

## 3. Công nghệ

-   HTML5: cấu trúc trang.
-   CSS3: giao diện, responsive và hiệu ứng.
-   JavaScript: tương tác và chuyển động.
-   Markdown: nội dung Blog.
-   Jekyll: tạo website tĩnh từ Markdown.
-   Git/GitHub: quản lý mã nguồn.
-   GitHub Pages: triển khai website.

## 4. Cấu trúc thư mục dự kiến

``` text
MyPortfolio/
├── _config.yml
├── _layouts/
│   ├── default.html
│   └── post.html
├── _posts/
│   └── 2026-10-30-bai-viet-dau-tien.md
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
├── index.html
├── about.html
├── projects.html
├── blog.html
├── contact.html
└── plan.md
```

## 5. Các trang và chức năng

### 5.1. Home

-   Hiển thị tên Lê Vủ Lực.
-   Giới thiệu ngắn: sinh viên Công nghệ thông tin.
-   Nêu lĩnh vực quan tâm: lập trình, phát triển website và công nghệ.
-   Có nút điều hướng đến Projects hoặc Contact.

### 5.2. About

-   Giới thiệu bản thân, quá trình học tập, sở thích và định hướng.
-   Hiển thị kỹ năng: HTML, CSS, JavaScript, C#, ASP.NET Core và MySQL.
-   Có 2--3 câu trích dẫn tích cực.

### 5.3. Projects

-   Hiển thị danh sách dự án.
-   Mỗi dự án có tên, mô tả, công nghệ và hình ảnh.
-   Chỉ thêm liên kết GitHub khi có URL chính xác; không tự bịa thông
    tin.

### 5.4. Blog

-   Hiển thị danh sách bài viết từ thư mục `_posts`.
-   Mỗi bài có tiêu đề, ngày đăng và phần giới thiệu.
-   Có trang đọc chi tiết bài viết.
-   Nội dung viết bằng Markdown.
-   Tên file theo định dạng `YYYY-MM-DD-ten-bai-viet.md`.

### 5.5. Contact

-   Hiển thị email và liên kết mạng xã hội do chủ website cung cấp.
-   Có nút gửi email bằng `mailto:`.
-   Không tự bịa thông tin liên hệ.

## 6. Yêu cầu giao diện

-   Dark Mode, màu chủ đạo xanh dương và tím.
-   Bố cục rõ ràng, nhất quán.
-   Có hiệu ứng hover và chuyển động nhẹ.
-   Menu điều hướng dễ sử dụng.
-   Responsive trên desktop, tablet và điện thoại.
-   Hình ảnh tối ưu, chữ dễ đọc.

## 7. Kế hoạch thực hiện

1.  Kiểm tra các file hiện có trong workspace.
2.  Tạo cấu trúc thư mục và file cần thiết.
3.  Thiết lập `_config.yml` cho Jekyll.
4.  Tạo layout chung trong `_layouts/default.html`.
5.  Xây dựng trang Home.
6.  Xây dựng trang About.
7.  Xây dựng trang Projects.
8.  Xây dựng trang Contact.
9.  Xây dựng Blog và layout bài viết.
10. Tạo ít nhất một bài viết Markdown mẫu.
11. Hoàn thiện CSS và JavaScript.
12. Kiểm tra điều hướng, nội dung và responsive.
13. Chạy thử bằng Jekyll tại máy tính.
14. Đưa mã nguồn lên GitHub.
15. Bật GitHub Pages và kiểm tra website công khai.

## 8. Tiêu chí kiểm thử

-   Jekyll build thành công.
-   Tất cả trang đều mở được.
-   Liên kết điều hướng hoạt động.
-   Blog tự lấy bài viết Markdown.
-   Mở được trang chi tiết bài viết.
-   Không có hình ảnh hoặc liên kết lỗi.
-   Giao diện hiển thị tốt trên màn hình nhỏ.
-   Không để lộ thông tin cá nhân nhạy cảm.

## 9. Triển khai GitHub Pages

-   Tạo repository GitHub và đưa mã nguồn lên.
-   Cấu hình GitHub Pages theo loại repository.
-   Với repository `USERNAME.github.io`, kiểm tra cấu hình xuất bản ở
    thư mục gốc.
-   Với repository dự án thông thường, cấu hình `baseurl` của Jekyll để
    CSS, JavaScript và hình ảnh có đường dẫn đúng.
-   Chờ build hoàn tất rồi mở URL GitHub Pages để kiểm tra.

## 10. Quy tắc làm việc cho AI Agent

-   Đọc và kiểm tra file hiện có trước khi chỉnh sửa.
-   Không xóa hoặc ghi đè file có sẵn khi chưa giải thích và được người
    dùng đồng ý.
-   Thực hiện theo từng giai đoạn, không tạo mã nguồn rời rạc.
-   Giữ cấu trúc nhất quán và đường dẫn tương thích GitHub Pages.
-   Sau mỗi giai đoạn, báo cáo file đã tạo/chỉnh sửa.
-   Chạy build, kiểm tra và sửa lỗi.
-   Nếu thiếu email, ảnh hoặc link GitHub, dùng nội dung giữ chỗ và hỏi
    người dùng; không tự bịa.
-   Hướng dẫn cách chạy thử, commit, push và triển khai.

## 11. Sản phẩm bàn giao

-   Mã nguồn website Portfolio.
-   Các trang Home, About, Projects, Blog và Contact.
-   Hệ thống bài viết Markdown.
-   File `plan.md`.
-   Repository GitHub.
-   URL GitHub Pages sau khi triển khai thành công.
