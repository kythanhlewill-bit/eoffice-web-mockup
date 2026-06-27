// Chrome dùng chung (header + sidebar) — mô phỏng theme Modernize/Tabler của EOffice
var EO = (function () {
  // Inject Tabler icon webfont (bộ icon EOffice đang dùng) + font
  var head = document.head;
  head.insertAdjacentHTML('beforeend',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.7.0/dist/tabler-icons.min.css">');

  var MENU = [
    { grp: 'TRANG CHỦ' },
    { t: 'Trang chủ', ic: 'ti-layout-grid' },
    { t: 'Quản lý vào ra cổng', ic: 'ti-door' },
    { t: 'Công tác', ic: 'ti-plane' },
    { t: 'Sử dụng xe', ic: 'ti-car' },
    { t: 'Quản lý vi phạm', ic: 'ti-alert-triangle' },
    { t: 'Quy trình', ic: 'ti-subtask' },
    { grp: 'E-CONTRACT' },
    { t: 'Phê duyệt hợp đồng', ic: 'ti-file-check', key: 'approve', href: 'phe-duyet-hang-loat.html' },
    { t: 'Danh sách hợp đồng', ic: 'ti-list-details', key: 'list', href: 'danh-sach.html' },
    { t: 'Tạo hợp đồng', ic: 'ti-file-plus', key: 'create', href: 'tao-hop-dong.html' },
    { t: 'Cấu hình quy trình', ic: 'ti-hierarchy-3', key: 'wf', href: 'cau-hinh-quy-trinh.html' },
    { t: 'Cấu hình form động', ic: 'ti-forms', key: 'form', href: 'cau-hinh-form-dong.html' },
    { grp: 'KHÁC' },
    { t: 'Thư viện mẫu chứng từ', ic: 'ti-folder' },
    { t: 'Ký số User', ic: 'ti-writing-sign' },
    { t: 'Thông tin công ty', ic: 'ti-building' },
    { t: 'Thông tin đối tác', ic: 'ti-users' }
  ];

  function mount(opts) {
    opts = opts || {};
    var crumb = opts.crumb || 'E-Contract';
    var active = opts.active || '';

    var side = MENU.map(function (m) {
      if (m.grp) return '<div class="eo-cap"><i class="ti ti-dots"></i>' + m.grp + '</div>';
      var cls = 'eo-mi' + (m.key === active ? ' active' : '');
      var open = m.href ? ('onclick="location.href=\'' + m.href + '\'"') : '';
      return '<div class="' + cls + '" ' + open + '><i class="ti ' + m.ic + '"></i><span>' + m.t + '</span></div>';
    }).join('');

    var header =
      '<div class="eo-header">' +
        '<div class="eo-logo"><span class="mk">EO</span><b>Office</b></div>' +
        '<div class="eo-burger"><i class="ti ti-menu-2"></i></div>' +
        '<div class="eo-crumb">Trang chủ <i class="ti ti-chevron-right"></i> <b>' + crumb + '</b></div>' +
        '<div class="eo-right">' +
          '<span class="eo-ico"><i class="ti ti-bell"></i></span>' +
          '<span class="eo-bu">MCH - AN <i class="ti ti-chevron-down"></i></span>' +
          '<span class="eo-user">Lê Thành Kỳ <small>(The CrownX-TECH-MN)</small></span>' +
          '<span class="eo-ava">LK</span>' +
        '</div>' +
      '</div>';

    var sidebar = '<div class="eo-side">' + side + '</div>';
    document.body.insertAdjacentHTML('afterbegin', header + sidebar);
    document.body.insertAdjacentHTML('beforeend',
      '<div class="foot">Copyright © 2025 Masan Group. All rights reserved. — <i>Mockup E-Contract</i></div>');
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
