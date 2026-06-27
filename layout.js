// Chrome dùng chung (header + sidebar) — mô phỏng theme Modernize/Tabler của EOffice (Masan DigitalOffice)
var EO = (function () {
  var head = document.head;
  head.insertAdjacentHTML('beforeend',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.7.0/dist/tabler-icons.min.css">');

  var MENU = [
    { grp: 'NHÂN SỰ' },
    { t: 'Nhân sự', ic: 'ti-users', ex: true },
    { grp: 'DIGI-OFFICE' },
    { t: 'Đề nghị chờ phê duyệt', ic: 'ti-checkbox', key: 'approve', href: 'phe-duyet-hang-loat.html' },
    { t: 'Tất cả đề nghị', ic: 'ti-checks' },
    { t: 'Biên bản chứng từ', ic: 'ti-clipboard-text', ex: true },
    { t: 'Hợp đồng', ic: 'ti-file-text', ex: true },
    { t: 'Văn bản ban hành', ic: 'ti-file-description', ex: true },
    { t: 'Tờ trình', ic: 'ti-file-invoice', ex: true },
    { t: 'Thanh toán', ic: 'ti-coin', ex: true },
    { t: 'Đăng ký sử dụng xe', ic: 'ti-car', ex: true },
    { t: 'Báo cáo', ic: 'ti-chart-bar', ex: true },
    { t: 'Thiết lập', ic: 'ti-adjustments', ex: true },
    { grp: 'E-CONTRACT' },
    { t: 'Danh sách hợp đồng', ic: 'ti-list-details', key: 'list', href: 'danh-sach.html' },
    { t: 'Tạo hợp đồng', ic: 'ti-file-plus', key: 'create', href: 'tao-hop-dong.html' },
    { t: 'Cấu hình quy trình', ic: 'ti-hierarchy-3', key: 'wf', href: 'cau-hinh-quy-trinh.html' },
    { t: 'Cấu hình form động', ic: 'ti-forms', key: 'form', href: 'cau-hinh-form-dong.html' },
    { grp: 'HỆ THỐNG' },
    { t: 'Phân quyền', ic: 'ti-shield-lock', ex: true },
    { t: 'Thiết lập hệ thống', ic: 'ti-settings', ex: true },
    { t: 'Monitor', ic: 'ti-device-desktop-analytics', ex: true }
  ];

  function mount(opts) {
    opts = opts || {};
    var crumb = opts.crumb || 'Trang chủ';
    var active = opts.active || '';

    var side = MENU.map(function (m) {
      if (m.grp) return '<div class="eo-cap">' + m.grp + '</div>';
      var cls = 'eo-mi' + (m.key === active ? ' active' : '');
      var open = m.href ? ('onclick="location.href=\'' + m.href + '\'"') : '';
      var chev = m.ex ? '<i class="ti ti-chevron-right ex"></i>' : '';
      return '<div class="' + cls + '" ' + open + '><i class="ti ' + m.ic + '"></i><span>' + m.t + '</span>' + chev + '</div>';
    }).join('');

    var header =
      '<div class="eo-header">' +
        '<div class="eo-logo"><div class="brand"><span class="bg">MASAN <b>GROUP</b></span><span class="do">DigitalOffice</span></div></div>' +
        '<div class="eo-burger"><i class="ti ti-menu-2"></i></div>' +
        '<div class="eo-crumb">Trang chủ / <b>' + crumb + '</b></div>' +
        '<div class="eo-right">' +
          '<span class="eo-bu"><i class="ti ti-layout-grid"></i> MCH - ITMCH <i class="ti ti-chevron-down"></i></span>' +
          '<span class="eo-user">Lê Thành Ký <small>(The CrownX-TECH-MN)</small></span>' +
          '<span class="eo-ava">LK</span>' +
          '<span class="eo-ico bell"><i class="ti ti-bell"></i><em>99+</em></span>' +
        '</div>' +
      '</div>';

    var sidebar = '<div class="eo-side">' + side + '</div>';
    document.body.insertAdjacentHTML('afterbegin', header + sidebar);
    document.body.insertAdjacentHTML('beforeend',
      '<div class="foot"><span>Copyright © 2025 <b>Masan Group</b>. All rights reserved.</span><span class="ver">Version 2.0</span></div>');
  }

  function tab(el, id) {
    var root = el.closest('.tabs-root') || document;
    root.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
    root.querySelectorAll('.tabpane').forEach(function (p) { p.classList.remove('active'); });
    el.classList.add('active');
    var pane = document.getElementById(id); if (pane) pane.classList.add('active');
  }
  function openModal(id){var m=document.getElementById(id); if(m) m.style.display='flex';}
  function closeModal(id){var m=document.getElementById(id); if(m) m.style.display='none';}

  return { mount: mount, tab: tab, openModal: openModal, closeModal: closeModal };
})();
