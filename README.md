# Hướng Dẫn Quản Trị & Phát Triển Landing Page BSSRC
**Câu lạc bộ Nghiên cứu Khoa học, STEM và Robotics - Trường THPT Bắc Đông Quan**

---

## 📁 Cấu Trúc Thư Mục

```
landing page BSSRC/
├── index.html              # Trang chủ chính của Landing Page
├── css/
│   └── style.css          # Định dạng giao diện, hiệu ứng hoạt họa, phông chữ
├── js/
│   └── main.js            # Dữ liệu dự án, thành tích, bộ lọc và hiệu ứng tương tác
├── assets/
│   ├── images/            # Nơi lưu logo, hình ảnh hoạt động, dự án
│   │   └── logo.png       # Đặt ảnh logo CLB vào đây
│   └── data/              # Dữ liệu bổ sung (nếu cần mở rộng)
└── README.md              # File hướng dẫn này
```

---

## 🚀 1. Cách Mở & Xem Trang Web

- **Cách đơn giản nhất:** Mở thư mục `landing page BSSRC` và **nhấp đúp chuột vào file `index.html`** để mở bằng trình duyệt (Chrome, Edge, Cốc Cốc, Firefox...).
- **Cách chuyên nghiệp (Live Server):** Nếu dùng VS Code, bạn nhấp chuột phải vào `index.html` chọn **Open with Live Server**.

---

## 🎨 2. Cách Cập Nhật Thông Tin CLB

Mở file **`js/main.js`**, ngay đầu file bạn sẽ thấy phần cấu hình:

```javascript
const CLUB_CONFIG = {
  name: "BSSRC",
  fullName: "CLB Nghiên cứu Khoa học, STEM và Robotics",
  school: "Trường THPT Bắc Đông Quan",
  slogan: "Khơi Nguồn Sáng Tạo – Chinh Phục Công Nghệ",
  email: "your_email@gmail.com",               // <-- Điền email của bạn
  phone: "0987 654 321",                        // <-- Điền SĐT liên hệ
  fanpageUrl: "https://facebook.com/your-page", // <-- Link Fanpage Facebook
  fanpageName: "CLB STEM & Robotics..."        // <-- Tên Fanpage
};
```
👉 Khi bạn thay đổi ở đây, thông tin trên website sẽ tự động cập nhật đồng bộ!

---

## 🖼️ 3. Cách Thêm Logo CLB

1. Chuẩn bị file logo định dạng `.png` (khuyến khích nền trong suốt) hoặc `.jpg`.
2. Đổi tên file thành: `logo.png`.
3. Copy và dán vào thư mục: `assets/images/logo.png`.
4. Làm mới (F5) trang web trên trình duyệt, logo sẽ tự động hiển thị ở thanh menu trên cùng!

---

## 🔬 4. Cách Thêm / Sửa Dự Án & Thành Tích

Trong file **`js/main.js`**:
- **Thêm dự án mới:** Tìm mảng `projectsData`. Bạn chỉ cần copy một khối `{ ... }` và chỉnh sửa tên đề tài, tóm tắt, ảnh mô tả, công nghệ sử dụng và tên nhóm tác giả.
- **Thêm giải thưởng / thành tích:** Tìm mảng `achievementsData` và thêm thông tin giải thưởng mới.

---

## 🌐 5. Đưa Trang Web Lên Mạng (Miễn Phí 100%)

Sau khi chỉnh sửa ưng ý, bạn có thể đưa trang web lên Internet miễn phí bằng các dịch vụ sau:
1. **Vercel / Netlify:** Chỉ cần kéo thả thư mục `landing page BSSRC` vào trang web [vercel.com](https://vercel.com) hoặc [netlify.com](https://app.netlify.com/drop) là có ngay link web chia sẻ cho mọi người.
2. **GitHub Pages:** Đẩy mã nguồn lên kho GitHub và bật tính năng GitHub Pages trong mục Settings.
