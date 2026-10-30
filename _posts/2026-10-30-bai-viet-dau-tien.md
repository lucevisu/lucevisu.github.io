---
layout: post
title: "Hành trình xây dựng website Portfolio cá nhân với Jekyll và GitHub Pages"
date: 2026-10-30 10:00:00 +0700
category: "Lập trình Web"
excerpt: "Chia sẻ về lý do, quá trình chọn lựa công nghệ và các bước xây dựng website cá nhân tĩnh nhưng mạnh mẽ với GitHub Pages."
---

Chào mừng bạn đến với bài viết đầu tiên trên blog cá nhân của mình! 

Trong bài viết này, mình sẽ chia sẻ ngắn gọn về hành trình tạo ra trang web Portfolio này, vì sao mình lựa chọn công nghệ tĩnh (Static Site Generator) và những kinh nghiệm rút ra được.

## 1. Tại sao mỗi lập trình viên nên có một Portfolio?

Khi học tập và phát triển trong ngành Công nghệ thông tin, chúng ta thường làm nhiều bài tập, đồ án và dự án thực tế. Tuy nhiên, nếu chỉ lưu trữ mã nguồn trong máy tính cá nhân hay trên GitHub mà không có một nơi tổng hợp trực quan thì:
- Nhà tuyển dụng khó hình dung được các kỹ năng và sản phẩm bạn đã làm.
- Bản thân bạn cũng thiếu một không gian riêng để ghi chép lại những bài học bổ ích.

Do đó, một website cá nhân là cầu nối tuyệt vời để giới thiệu năng lực và định hình phong cách làm việc của bạn.

## 2. Vì sao lựa chọn Jekyll & GitHub Pages?

Có rất nhiều công cụ để làm website hiện nay (WordPress, React/Next.js, Vue...), nhưng đối với Portfolio cá nhân, mình chọn **Jekyll** kết hợp cùng **GitHub Pages** vì các ưu điểm:

- **Hoàn toàn miễn phí:** GitHub Pages hỗ trợ hosting trực tiếp từ repository GitHub.
- **Tối ưu tốc độ tải trang:** Trang web tĩnh thuần HTML/CSS/JS tải cực nhanh, không phụ thuộc vào cơ sở dữ liệu nặng nề.
- **Hỗ trợ Markdown tuyệt vời:** Chỉ cần viết một file `.md` đơn giản trong thư mục `_posts`, Jekyll sẽ tự động tạo bài viết đẹp mắt.
- **Dễ dàng quản lý phiên bản với Git:** Mọi thay đổi đều được lưu vết qua các lần commit.

```bash
# Quy trình cập nhật bài viết mới cực kỳ nhanh chóng:
git add .
git commit -m "Thêm bài viết mới"
git push origin main
```

## 3. Các kỹ năng và công nghệ đã áp dụng

Trong dự án này, mình đã kết hợp các kiến thức nền tảng:
- **HTML5 & CSS3:** Thiết kế giao diện Dark Mode với dải màu gradient tím - xanh dương hiện đại.
- **Responsive Web Design:** Tương thích trên cả máy tính bàn, tablet và điện thoại di động.
- **JavaScript ES6:** Xử lý đóng/mở menu trên điện thoại và tương tác biểu mẫu liên hệ.
- **Markdown & Liquid Template:** Tự động hóa danh sách bài viết và render giao diện linh hoạt.

## 4. Kế hoạch tiếp theo

Trong thời gian tới, mình sẽ tiếp tục:
1. Cập nhật thêm các dự án mới đã thực hiện trong quá trình học tập (ASP.NET Core, C#, MySQL).
2. Viết thêm các bài viết chia sẻ về kỹ thuật lập trình và thủ thuật giải quyết lỗi.
3. Tinh chỉnh hiệu năng và trải nghiệm người dùng trên trang web.

Cảm ơn bạn đã ghé thăm và đọc bài viết! Nếu bạn có góp ý hay muốn kết nối trao đổi, đừng ngần ngại gửi tin nhắn qua trang [Liên hệ](/contact.html) nhé.
