/**
 * 个人作品集网站 — 交互脚本
 * 功能：主题切换 / 项目折叠 / 导航滚动高亮 / 淡入动画 / 移动端菜单
 */

(function () {
  'use strict';

  // ==========================================
  // 1. 主题切换
  // ==========================================
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  // 读取保存的主题
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', function () {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ==========================================
  // 2. 项目展开/折叠
  // ==========================================
  const toggleBtn = document.getElementById('toggleProjects');
  const moreProjects = document.getElementById('moreProjects');

  if (toggleBtn && moreProjects) {
    toggleBtn.addEventListener('click', function () {
      const isOpen = moreProjects.classList.contains('open');
      if (isOpen) {
        moreProjects.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '展开更多项目（5个）<span class="arrow">▼</span>';
      } else {
        moreProjects.classList.add('open');
        toggleBtn.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.innerHTML = '收起<span class="arrow">▼</span>';
      }
    });
  }

  // ==========================================
  // 3. 导航 — 滚动高亮当前区块
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let currentId = '';
    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ==========================================
  // 4. 滚动淡入动画
  // ==========================================
  const fadeEls = document.querySelectorAll(
    '.skill-item, .project-card, .timeline-item'
  );

  fadeEls.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });

  // ==========================================
  // 5. 移动端菜单
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinksContainer = document.getElementById('navLinks');

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('open');
      navLinksContainer.classList.toggle('open');
    });

    // 点击导航链接后自动关闭菜单
    navLinksContainer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('open');
        navLinksContainer.classList.remove('open');
      });
    });
  }
  // ==========================================
  // 6. 点击复制
  // ==========================================
  document.querySelectorAll('.copyable').forEach(function (el) {
    el.addEventListener('click', function () {
      var text = el.getAttribute('data-copy');
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          showToast(el);
        }).catch(function () {
          fallbackCopy(text, el);
        });
      } else {
        fallbackCopy(text, el);
      }
    });
  });

  function fallbackCopy(text, el) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      showToast(el);
    } catch (e) {
      // silently fail
    }
    document.body.removeChild(ta);
  }

  function showToast(el) {
    var text = el.getAttribute('data-copy');
    // Remove existing toast
    var existing = document.querySelector('.copy-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.textContent = '✓ 已复制：' + text;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 1800);
  }
})();
