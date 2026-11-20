// Data & Logic for BSSRC Landing Page

// 0. CẤU HÌNH THÔNG TIN CLB (Chỉ cần thay đổi thông tin ở đây)
const CLUB_CONFIG = {
  name: "BSSRC",
  fullName: "CLB Nghiên cứu Khoa học, STEM và Robotics",
  school: "Trường THPT Bắc Đông Quan",
  address: "Số 26, đường Nguyễn Văn Năng, xã Đông Hưng, tỉnh Hưng Yên",
  slogan: "Khơi Nguồn Sáng Tạo – Chinh Phục Công Nghệ",
  email: "bdq.stemlab@gmail.com",
  phone: "098 455 2238",
  fanpageUrl: "https://www.facebook.com/bdq.ssrc",
  fanpageName: "Câu lạc bộ Nghiên cứu khoa học, STEM và Robotics trường THPT Bắc Đông Quan"
};

// 1. DỮ LIỆU DỰ ÁN TIÊU BIỂU (Dễ dàng thêm / sửa / xóa)
const projectsData = [
  {
    id: 1,
    title: "Hệ thống quản lý và vận hành phòng thực hành STEM",
    category: "khkt",
    categoryName: "Nền tảng Quản lý",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    summary: "Hệ thống số hóa chuyển đổi số phòng Lab STEM: Đặt lịch phòng, quản lý kho vật tư/linh kiện, mượn trả thiết bị và diễn đàn học thuật AI.",
    image: "https://drive.google.com/file/d/1dhOBH4Q4rZoWvvWIqrcSelfrHZ4QDYbl/view?usp=sharing",
    tech: ["Node.js", "Express 5", "better-sqlite3", "Gemini AI", "Session Auth", "REST API"],
    year: "2026-2027",
    authors: "Phạm Công Vinh (A5-K58) - Nguyễn Huyền Trang (A5-K59)",
    description: "Nền tảng phần mềm quản lý toàn diện dành cho phòng nghiên cứu và thực hành STEM tại trường THPT Bắc Đông Quan. Hệ thống gồm các phân hệ chính: Đặt lịch thực hành theo thời khóa biểu, Quản lý kho linh kiện vi điều khiển (Arduino, ESP32, cảm biến, robot), Phiếu mượn trả và bàn giao thiết bị số hóa, Báo cáo sự cố bảo trì kèm ảnh, cùng Diễn đàn trao đổi học thuật tích hợp trí tuệ nhân tạo Gemini để kiểm duyệt thông minh. Vận hành chính thức tại pttp.id.vn."
  },
  // {
  //   id: 2,
  //   title: "Hệ thống Cảnh báo Cháy & Giám sát Môi trường IoT",
  //   category: "khkt",
  //   categoryName: "Nghiên cứu KHKT",
  //   badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
  //   summary: "Hệ thống tích hợp cảm biến nhiệt độ, khói và khí gas, truyền dữ liệu thời gian thực và cảnh báo qua Telegram/SMS.",
  //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  //   tech: ["ESP32", "LoRa", "Cảm biến MQ2", "Firebase", "Flutter App"],
  //   year: "2024",
  //   authors: "Nhóm nghiên cứu KHKT Khóa 2022-2025",
  //   description: "Dự án phát triển hệ thống giám sát và báo cháy sớm dành cho trường học và hộ gia đình. Thiết bị sử dụng vi điều khiển ESP32 kết hợp mạng truyền thông không dây tầm xa LoRa, giúp gửi cảnh báo ngay tức thì tới ban quản lý dù mất kết nối Internet cáp quang. Đạt giải tại Cuộc thi Sáng tạo KHKT cấp Tỉnh."
  // },
  // {
  //   id: 2,
  //   title: "Robot Dò Đường & Phân Loại Sản Phẩm Tự Động",
  //   category: "robotics",
  //   categoryName: "Robotics",
  //   badgeColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
  //   summary: "Mô hình xe AGV tự hành ứng dụng cảm biến quang học và cánh tay robot 4 bậc tự do để nhận diện và gắp vật thể.",
  //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  //   tech: ["Arduino Mega", "PID Control", "Cánh tay Servo", "Cảm biến màu TCS3200"],
  //   year: "2024",
  //   authors: "Ban Kỹ thuật & Robotics",
  //   description: "Robot di chuyển theo vạch chỉ định với thuật toán điều khiển PID mượt mà, đồng thời sử dụng cảm biến màu sắc để phân loại kiện hàng và dùng cánh tay robot gắp vào các khay quy định. Mô hình mô phỏng nhà kho thông minh ứng dụng trong công nghiệp 4.0."
  // },
  // {
  //   id: 3,
  //   title: "Mô hình Nông Nghiệp Thông Minh Tự Động Tưới Tiêu",
  //   category: "stem",
  //   categoryName: "STEM Ứng dụng",
  //   badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
  //   summary: "Vườn ươm mini ứng dụng STEM đo độ ẩm đất, nhiệt độ và tự động bơm nước kết hợp chiếu sáng nhân tạo.",
  //   image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  //   tech: ["Arduino Uno", "Cảm biến độ ẩm đất", "Rơ-le 5V", "Pin năng lượng mặt trời"],
  //   year: "2023",
  //   authors: "Nhóm STEM Sinh - Hóa - Tin",
  //   description: "Dự án liên môn kết hợp Sinh học và Vật lý/Tin học, ứng dụng cho việc chăm sóc vườn cây thuốc nam và cây cảnh tại khuôn viên trường THPT Bắc Đông Quan. Hệ thống vận hành bằng nguồn năng lượng mặt trời sạch và tiết kiệm 40% lượng nước tiêu thụ."
  // },
  // {
  //   id: 4,
  //   title: "Thiết Bị Điểm Danh Học Sinh Bằng Thẻ RFID & Báo Về Phụ Huynh",
  //   category: "khkt",
  //   categoryName: "Nghiên cứu KHKT",
  //   badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
  //   summary: "Giải pháp chuyển đổi số học đường giúp điểm danh nhanh chóng với tốc độ dưới 1 giây và đồng bộ lên dữ liệu đám mây.",
  //   image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  //   tech: ["RFID RC522", "NodeMCU ESP8266", "Google Sheets API", "Telegram Bot"],
  //   year: "2023",
  //   authors: "Ban Lập trình CLB BSSRC",
  //   description: "Mỗi học sinh sử dụng thẻ từ cá nhân hóa để quẹt khi vào lớp. Hệ thống tự động ghi nhận thời gian, kiểm tra sĩ số và gửi thông báo trực tiếp tới phụ huynh qua bot tự động. Dự án nhận được sự đánh giá cao từ Ban giám hiệu trường."
  // },
  // {
  //   id: 5,
  //   title: "Robot Cứu Hộ & Vượt Địa Hình Điều Khiển Không Dây",
  //   category: "robotics",
  //   categoryName: "Robotics",
  //   badgeColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
  //   summary: "Robot bánh xích với camera truyền hình ảnh trực tiếp, có khả năng leo dốc 35 độ và hoạt động trong môi trường hẹp.",
  //   image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=800&q=80",
  //   tech: ["ESP32-CAM", "Khung gầm bánh xích", "Động cơ DC giảm tốc", "WebSockets"],
  //   year: "2024",
  //   authors: "Đội tuyển Robocon BSSRC",
  //   description: "Chế tạo mẫu robot bánh xích hỗ trợ trinh sát trong các khu vực hiểm trở hoặc sự cố sạt lở. Robot truyền tải video thời gian thực độ trễ thấp về điện thoại/máy tính điều khiển từ xa, tích hợp đèn LED công suất cao hỗ trợ ban đêm."
  // },
  // {
  //   id: 6,
  //   title: "Thùng Rác Thông Minh Phân Loại Rác Tự Động",
  //   category: "stem",
  //   categoryName: "STEM Ứng dụng",
  //   badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
  //   summary: "Thùng rác tự động mở nắp không chạm kết hợp cảm biến kim loại và cảm biến quang để phân loại rác thải nhựa/kim loại.",
  //   image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
  //   tech: ["Cảm biến siêu âm HC-SR04", "Cảm biến tiệm cận kim loại", "Servo MG996R", "Arduino"],
  //   year: "2024",
  //   authors: "Thành viên Khóa 10 & 11",
  //   description: "Mục tiêu nâng cao ý thức bảo vệ môi trường trong học đường. Thùng rác tự động cảm ứng mở nắp khi người đến gần, đồng thời phát âm thanh cảm ơn và hướng dẫn phân loại rác tái chế."
  // }
];

// 2. DỮ LIỆU THÀNH TÍCH (Lưu trữ thành tích & giải thưởng)
const achievementsData = [
  {
    year: "2026",
    badge: "Thành lập CLB",
    badgeType: "accent",
    title: "Thành lập Câu lạc bộ Nghiên cứu Khoa học, STEM và Robotics (BSSRC)",
    project: "Đơn vị chủ quản: Trường THPT Bắc Đông Quan",
    desc: "Câu lạc bộ BSSRC được thành lập nhằm thúc đẩy nghiên cứu khoa học, phát triển kỹ năng STEM và Robotics cho học sinh, đồng thời tạo môi trường sáng tạo và thực hành công nghệ."
  },
  {
    year: "2026",
    badge: "VSAR 2025 - 2026",
    badgeType: "primary",
    title: "Top 10 toàn quốc cuộc thi VSAR 2025 - 2026 do Báo Tiền Phong tổ chức",
    project: "Đội thi: Would You Lose?",
    desc: "Đại diện trường THPT Bắc Đông Quan tham gia tranh tài cùng hàng chục đội thi xuất sắc trên cả nước."
  },
  {
    year: "2025",
    badge: "Trao tặng",
    badgeType: "primary",
    title: "Trường THPT Bắc Đông Quan đón nhận tài trợ phòng học STEM mới trị giá 3,5 tỷ đồng",
    project: "Đơn vị tài trợ: Tập đoàn Công nghiệp – Năng lượng Quốc gia Việt Nam (PVN) thông qua dự án STEM INNOVATION PETROVIETNAM",
    desc: "Phòng học STEM hiện đại với đầy đủ thiết bị thực hành, máy tính, robot và linh kiện IoT phục vụ nghiên cứu khoa học và sáng tạo kỹ thuật."
  },
];

// Khởi tạo hiển thị khi trang tải
document.addEventListener("DOMContentLoaded", () => {
  applyClubConfig();
  renderProjects("all");
  renderAchievements();
  initCounters();
  setupFilterButtons();
  initMobileMenu();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Cập nhật thông tin CLB lên giao diện
function applyClubConfig() {
  const emailEl = document.getElementById("email-address");
  const emailLink = document.getElementById("contact-email");
  if (emailEl) emailEl.innerText = CLUB_CONFIG.email;
  if (emailLink) emailLink.href = "mailto:" + CLUB_CONFIG.email;

  const phoneEl = document.getElementById("phone-number");
  const phoneLink = document.getElementById("contact-phone");
  if (phoneEl) phoneEl.innerText = CLUB_CONFIG.phone;
  if (phoneLink) phoneLink.href = "tel:" + CLUB_CONFIG.phone.replace(/\s+/g, '');

  const fanpageNameEl = document.getElementById("fanpage-name");
  const fanpageLink = document.getElementById("contact-fanpage");
  const navFanpageBtn = document.getElementById("nav-fanpage-btn");
  const btnMsgFanpage = document.getElementById("btn-message-fanpage");
  const footerFanpage = document.getElementById("footer-fanpage");
  const mobileFanpageBtn = document.getElementById("mobile-fanpage-btn");

  if (fanpageNameEl) fanpageNameEl.innerText = CLUB_CONFIG.fanpageName;
  if (fanpageLink) fanpageLink.href = CLUB_CONFIG.fanpageUrl;
  if (navFanpageBtn) navFanpageBtn.href = CLUB_CONFIG.fanpageUrl;
  if (btnMsgFanpage) btnMsgFanpage.href = CLUB_CONFIG.fanpageUrl;
  if (footerFanpage) footerFanpage.href = CLUB_CONFIG.fanpageUrl;
  if (mobileFanpageBtn) mobileFanpageBtn.href = CLUB_CONFIG.fanpageUrl;
}

// Hàm hiển thị danh sách dự án
function renderProjects(category) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = category === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500">
        <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 text-slate-400"></i>
        <p class="text-lg">Chưa có dự án nào trong mục này.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-slate-200/80 hover:shadow-xl transition-all duration-300";
    card.onclick = () => openProjectModal(p.id);

    card.innerHTML = `
      <div class="relative h-48 overflow-hidden bg-slate-100">
        <img 
          src="${p.image}" 
          alt="${p.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md ${p.badgeColor} border shadow-sm">
          ${p.categoryName}
        </span>
        <span class="absolute bottom-3 right-3 text-xs font-medium text-white/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
          Năm ${p.year}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <h3 class="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            ${p.title}
          </h3>
          <p class="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            ${p.summary}
          </p>
        </div>
        <div>
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${p.tech.slice(0, 3).map(t => `
              <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-mono">${t}</span>
            `).join("")}
            ${p.tech.length > 3 ? `<span class="text-xs text-slate-400 px-1 py-0.5">+${p.tech.length - 3}</span>` : ""}
          </div>
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span class="truncate max-w-[180px]"><i data-lucide="users" class="w-3.5 h-3.5 inline mr-1 text-slate-400"></i>${p.authors}</span>
            <span class="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Chi tiết <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

// Thiết lập bộ lọc danh mục
function setupFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => {
        b.classList.remove("active", "bg-blue-600", "text-white", "shadow-md");
        b.classList.add("bg-white", "text-slate-600", "hover:bg-slate-50");
      });
      btn.classList.add("active", "bg-blue-600", "text-white", "shadow-md");
      btn.classList.remove("bg-white", "text-slate-600", "hover:bg-slate-50");

      const category = btn.getAttribute("data-category");
      renderProjects(category);
    });
  });
}

// Hiển thị dòng thời gian thành tích
function renderAchievements() {
  const container = document.getElementById("achievements-list");
  if (!container) return;

  container.innerHTML = achievementsData.map((item, index) => {
    const isEven = index % 2 === 0;
    const badgeBg = item.badgeType === "primary" ? "bg-blue-600 text-white" : "bg-orange-500 text-white";
    const borderLeftColor = item.badgeType === "primary" ? "border-blue-500" : "border-orange-500";

    return `
      <div class="relative pl-8 md:pl-10 pb-8 last:pb-0 border-l-2 border-slate-200 group">
        <!-- Marker point -->
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 ${borderLeftColor} group-hover:scale-125 transition-transform"></div>
        
        <div class="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${badgeBg}">
              ${item.badge}
            </span>
            <span class="text-xs font-semibold text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
              <i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1 text-slate-400"></i>${item.year}
            </span>
          </div>
          <h4 class="text-base md:text-lg font-bold text-slate-800 mb-1">
            ${item.title}
          </h4>
          <p class="text-sm font-medium text-blue-700 mb-2">
            ${item.project}
          </p>
          <p class="text-sm text-slate-600 leading-relaxed">
            ${item.desc}
          </p>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// Modal Xem Chi Tiết Dự Án
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <div class="relative h-64 md:h-80 w-full overflow-hidden bg-slate-900 rounded-t-2xl">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-85">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      <button onclick="closeProjectModal()" class="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-110">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="absolute bottom-4 left-6 right-6">
        <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2 bg-blue-600 text-white shadow-sm">
          ${project.categoryName} • Năm ${project.year}
        </span>
        <h2 class="text-xl md:text-2xl font-bold text-white leading-tight">
          ${project.title}
        </h2>
      </div>
    </div>
    
    <div class="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
      <div>
        <h4 class="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Mô tả chi tiết</h4>
        <p class="text-slate-700 leading-relaxed text-sm md:text-base">
          ${project.description}
        </p>
      </div>

      <div>
        <h4 class="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Công nghệ & Linh kiện sử dụng</h4>
        <div class="flex flex-wrap gap-2">
          ${project.tech.map(t => `
            <span class="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-xs font-mono font-medium">
              ${t}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <i data-lucide="award" class="w-5 h-5"></i>
        </div>
        <div>
          <p class="text-xs text-slate-500">Nhóm tác giả thực hiện</p>
          <p class="text-sm font-bold text-slate-800">${project.authors}</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Hiệu ứng đếm số (Counter Animation)
function initCounters() {
  const counters = document.querySelectorAll(".counter-value");
  const speed = 60;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const inc = Math.max(1, Math.floor(target / speed));

        const updateCount = () => {
          count += inc;
          if (count < target) {
            counter.innerText = count;
            setTimeout(updateCount, 25);
          } else {
            counter.innerText = target + "+";
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Menu Mobile
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}
