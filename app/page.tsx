// @ts-nocheck
"use client"
// The supplied jQuery/fullPage integration is intentionally kept verbatim.

import Script from 'next/script'
import { useEffect, useRef } from 'react'

const markup = String.raw`

  <a class="skip-link" href="#fullpage">Skip to content</a>

  <!-- ============ HEADER (fixed, outside fullPage wrapper) ============ -->
  <header class="site-header" id="siteHeader">
    <div class="header-bar">
      <nav class="header-nav header-nav--left" aria-label="Primary">
        <a href="#stories">Link 1</a>
        <a href="#volume">Link 2</a>
        <a href="#subscribe">Link 3</a>
        <a href="#engage">Link 4</a>
      </nav>

      <a href="#home" class="logo" aria-label="Home">
        <svg class="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/>
          <path d="M20 4 L20 36 M8 14 Q20 24 32 14 M8 26 Q20 16 32 26" fill="none" stroke="currentColor" stroke-width="1.2"/>
        </svg>
        <span class="logo__word">Fotokabinet</span>
      </a>

      <div class="header-nav header-nav--right">
        <button class="icon-btn" type="button" aria-label="Search" data-open="search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>
        </button>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="storiesMenu" data-open="menu">
          <span class="menu-btn__label">Menu</span>
          <span class="menu-btn__lines" aria-hidden="true"><i></i><i></i></span>
        </button>
      </div>
    </div>
  </header>

  <!-- ============ STORIES MENU OVERLAY ============ -->
  <div class="overlay overlay--menu" id="storiesMenu" aria-hidden="true">
    <button class="overlay__close" type="button" aria-label="Close menu" data-close>&times;</button>
    <div class="overlay__inner">
      <div class="menu-col">
        <p class="label">Read</p>
        <a href="#stories">Link 1</a><a href="#stories">Link 2</a><a href="#stories">Link 3</a>
      </div>
      <div class="menu-col">
        <p class="label">Listen</p>
        <a href="#stories">Link 4</a><a href="#stories">Link 5</a><a href="#stories">Link 6</a>
      </div>
      <div class="menu-col">
        <p class="label">Watch</p>
        <a href="#stories">Link 7</a><a href="#stories">Link 8</a><a href="#stories">Link 9</a>
      </div>
      <div class="menu-col">
        <p class="label">More</p>
        <a href="#engage">Link 10</a><a href="#subscribe">Link 11</a><a href="#footer">Link 12</a>
      </div>
    </div>
  </div>

  <!-- ============ SEARCH OVERLAY ============ -->
  <div class="overlay overlay--search" id="searchOverlay" aria-hidden="true">
    <button class="overlay__close" type="button" aria-label="Close search" data-close>&times;</button>
    <form class="search-form" onsubmit="return false;">
      <label class="label" for="searchInput">Search</label>
      <div class="search-form__row">
        <input id="searchInput" type="search" placeholder="Lorem ipsum dolor…">
        <button type="submit" class="btn btn--light">Submit</button>
      </div>
      <div class="chips">
        <span class="chip">Essays</span><span class="chip">Features</span><span class="chip">Fiction</span>
        <span class="chip">Films</span><span class="chip">Galleries</span><span class="chip">Conversations</span>
        <span class="chip">Poems</span><span class="chip">Practices</span><span class="chip">Staff Picks</span>
      </div>
    </form>
  </div>

  <!-- ============ fullPage.js WRAPPER ============ -->
  <div id="fullpage">

    <!-- 1. HERO FEATURE -->
    <section class="section fp-section s-hero" data-anchor="home">
      <div class="s-hero__media" style="background-image:url('/img/hero.webp')"></div>
      <div class="s-hero__shade"></div>
      <div class="s-hero__content">
        <p class="label">Essay</p>
        <h1 class="display">Lorem Ipsum Dolor</h1>
        <p class="deck">Consectetur adipiscing elit sed do eiusmod</p>
        <p class="byline">by Firstname Lastname</p>
        <a href="#about" class="text-cta">Read Essay</a>
      </div>
      <a href="#about" class="scroll-hint" aria-label="Scroll down"><span></span></a>
    </section>

    <!-- 2. EDITORIAL STATEMENT -->
    <section class="section fp-section s-statement theme-cream" data-anchor="about">
      <div class="container container--narrow">
        <h2 class="section-title">Editorial Statement</h2>
        <hr class="rule">
        <p class="statement">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <a href="#stories" class="text-cta text-cta--dark">Link 1</a>
      </div>
    </section>

    <!-- 3. VOLUME / ISSUE PROMO -->
    <section class="section fp-section s-volume theme-dark" data-anchor="volume">
      <div class="container split">
        <div class="split__media">
          <div class="volume-cover">
            <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=1000&q=80" alt="Abstract geometric cover placeholder">
          </div>
        </div>
        <div class="split__text">
          <p class="label">Print Edition</p>
          <h2 class="display display--md">Volume VII:<br><span class="caps">Lorem &amp; Ipsum</span></h2>
          <p class="body">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          <p class="price">$00.00</p>
          <a href="#volume" class="btn btn--light">Order Now</a>
        </div>
      </div>
    </section>

    <!-- 4. SELECTED STORIES (Read / Listen / Watch) -->
    <section class="section fp-section s-stories theme-cream" data-anchor="stories">
      <div class="container">
        <div class="stories-head">
          <h2 class="section-title">Selected Stories</h2>
          <div class="segmented" role="tablist" aria-label="Story type">
            <button role="tab" class="is-active" aria-selected="true" data-tab="read">Read</button>
            <button role="tab" aria-selected="false" data-tab="listen">Listen</button>
            <button role="tab" aria-selected="false" data-tab="watch">Watch</button>
          </div>
        </div>
        <hr class="rule rule--full">

        <div class="story-group is-active" data-group="read" role="tabpanel">
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=900&q=80" alt=""></a>
            <p class="label">Essay</p>
            <h3 class="card__title"><a href="#">Lorem Ipsum Dolor Sit</a></h3>
            <p class="byline">by Firstname Lastname</p>
          </article>
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=900&q=80" alt=""></a>
            <p class="label">Essay</p>
            <h3 class="card__title"><a href="#">Consectetur Adipiscing</a></h3>
            <p class="byline">by Firstname Lastname</p>
          </article>
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=900&q=80" alt=""></a>
            <p class="label">Essay</p>
            <h3 class="card__title"><a href="#">Sed Do Eiusmod Tempor</a></h3>
            <p class="byline">by Firstname Lastname</p>
          </article>
        </div>

        <div class="story-group" data-group="listen" role="tabpanel">
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=900&q=80" alt=""><span class="card__badge">&#9654; 00:42</span></a>
            <p class="label">Conversation</p>
            <h3 class="card__title"><a href="#">Ut Enim Ad Minim</a></h3>
            <p class="byline">with Firstname Lastname</p>
          </article>
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=900&q=80" alt=""><span class="card__badge">&#9654; 00:38</span></a>
            <p class="label">Conversation</p>
            <h3 class="card__title"><a href="#">Quis Nostrud Exercitation</a></h3>
            <p class="byline">with Firstname Lastname</p>
          </article>
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&w=900&q=80" alt=""><span class="card__badge">&#9654; 00:51</span></a>
            <p class="label">Conversation</p>
            <h3 class="card__title"><a href="#">Ullamco Laboris Nisi</a></h3>
            <p class="byline">with Firstname Lastname</p>
          </article>
        </div>

        <div class="story-group" data-group="watch" role="tabpanel">
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=900&q=80" alt=""><span class="card__badge">&#9654; Film</span></a>
            <p class="label">Feature</p>
            <h3 class="card__title"><a href="#">Duis Aute Irure</a></h3>
            <p class="byline">a film by Firstname Lastname</p>
          </article>
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80" alt=""><span class="card__badge">&#9654; Film</span></a>
            <p class="label">Feature</p>
            <h3 class="card__title"><a href="#">Reprehenderit In Voluptate</a></h3>
            <p class="byline">a film by Firstname Lastname</p>
          </article>
          <article class="card">
            <a href="#" class="card__media"><img src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?auto=format&fit=crop&w=900&q=80" alt=""><span class="card__badge">&#9654; Film</span></a>
            <p class="label">Feature</p>
            <h3 class="card__title"><a href="#">Velit Esse Cillum</a></h3>
            <p class="byline">a film by Firstname Lastname</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 5. ENGAGE / EVENTS CAROUSEL -->
    <section class="section fp-section s-engage theme-dark" data-anchor="engage">
      <div class="container">
        <div class="stories-head">
          <h2 class="section-title caps">Engage</h2>
          <div class="carousel-ctrl">
            <button type="button" class="arrow-btn" data-carousel="prev" aria-label="Previous">&larr;</button>
            <button type="button" class="arrow-btn" data-carousel="next" aria-label="Next">&rarr;</button>
          </div>
        </div>
        <hr class="rule rule--full">
        <div class="carousel">
          <div class="carousel__track">
            <article class="event">
              <div class="event__media"><img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=900&q=80" alt=""></div>
              <p class="label">Lorem Ipsum Lecture Series</p>
              <h3 class="event__title">Lorem Ipsum Dolor Sit Amet</h3>
              <p class="event__date">Month 00, 2026</p>
              <a href="#" class="text-cta">Details</a>
            </article>
            <article class="event">
              <div class="event__media"><img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=900&q=80" alt=""></div>
              <p class="label">Lorem Ipsum Lecture Series</p>
              <h3 class="event__title">Consectetur Adipiscing Elit</h3>
              <p class="event__date">Month 00, 2026</p>
              <a href="#" class="text-cta">Details</a>
            </article>
            <article class="event">
              <div class="event__media"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80" alt=""></div>
              <p class="label">Lorem Ipsum Lecture Series</p>
              <h3 class="event__title">Sed Do Eiusmod Tempor</h3>
              <p class="event__date">Month 00, 2026</p>
              <a href="#" class="text-cta">Details</a>
            </article>
            <article class="event">
              <div class="event__media"><img src="https://images.unsplash.com/photo-1507908708918-778587c9e563?auto=format&fit=crop&w=900&q=80" alt=""></div>
              <p class="label">Lorem Ipsum Lecture Series</p>
              <h3 class="event__title">Incididunt Ut Labore</h3>
              <p class="event__date">Month 00, 2026</p>
              <a href="#" class="text-cta">Details</a>
            </article>
            <article class="event">
              <div class="event__media"><img src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=80" alt=""></div>
              <p class="label">Lorem Ipsum Lecture Series</p>
              <h3 class="event__title">Magna Aliqua Ut Enim</h3>
              <p class="event__date">Month 00, 2026</p>
              <a href="#" class="text-cta">Details</a>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. PODCAST + NEWSLETTER -->
    <section class="section fp-section s-subscribe theme-cream" data-anchor="subscribe">
      <div class="container subscribe-grid">
        <div class="subscribe-card">
          <div class="subscribe-card__media"><img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=900&q=80" alt=""></div>
          <p class="label">Podcast</p>
          <h2 class="display display--sm">Listen to Lorem Ipsum</h2>
          <p class="body">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
          <div class="btn-row">
            <a href="#" class="btn btn--dark">Link 1</a>
            <a href="#" class="btn btn--outline">Link 2</a>
          </div>
        </div>
        <div class="subscribe-card subscribe-card--form">
          <p class="label">Newsletter</p>
          <h2 class="display display--sm">Subscribe to Newsletter</h2>
          <p class="body">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse, arriving every other lorem ipsum morning.</p>
          <form class="newsletter" id="newsletterForm" novalidate>
            <label class="sr-only" for="nlEmail">Email address</label>
            <input id="nlEmail" type="email" placeholder="Email address" required>
            <button type="submit" class="btn btn--dark">Subscribe</button>
          </form>
          <p class="fine">By subscribing you agree to the <a href="#">Link 3</a>.</p>
          <p class="newsletter__thanks" hidden>Thanks for signing up — lorem ipsum.</p>
        </div>
      </div>
    </section>

    <!-- 8. FOOTER (auto-height section) -->
    <section class="section fp-section fp-auto-height s-footer theme-dark" data-anchor="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="#home" class="logo logo--footer">
            <svg class="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/>
              <path d="M20 4 L20 36 M8 14 Q20 24 32 14 M8 26 Q20 16 32 26" fill="none" stroke="currentColor" stroke-width="1.2"/>
            </svg>
            <span class="logo__word">Fotokabinet</span>
          </a>
          <p class="fine">Lorem Ipsum is an initiative of Placeholder Foundation.</p>
          <p class="fine">&copy;2026 All rights reserved.</p>
        </div>
        <nav class="footer-links" aria-label="Footer">
          <a href="#">Link 1</a><a href="#">Link 2</a><a href="#">Link 3</a><a href="#">Link 4</a>
        </nav>
        <div class="footer-social">
          <a href="#" aria-label="Social link 1"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/></svg></a>
          <a href="#" aria-label="Social link 2"><svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9v6l5-3z"/></svg></a>
        </div>
      </div>
      <div class="container footer-legal">
        <a href="#">Terms &amp; Conditions</a><a href="#">Privacy Policy</a><a href="#">Accessibility</a>
      </div>
    </section>

  </div><!-- /#fullpage -->

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.js"></script>
  <script ></script>
`

export default function Page() {
  const initialized = useRef(false)
  useEffect(() => {
    if (initialized.current) return
    const timer = window.setInterval(() => {
      if (initialized.current || !(window as any).jQuery?.fn?.fullpage) return
      initialized.current = true
      const cleanup = init((window as any))
      ;(window as any).__fotokabinetCleanup = cleanup
      window.clearInterval(timer)
    }, 50)
    return () => {
      window.clearInterval(timer)
      ;(window as any).__fotokabinetCleanup?.()
    }
  }, [])

  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.js" strategy="afterInteractive" />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  )
}

const init = (window: any) => {
  const $ = window.jQuery;
  if (!$ || !$.fn.fullpage) return () => {};
  'use strict';

  // Sections whose background is light -> header & nav dots switch to dark ink.
  var LIGHT_SECTIONS = ['about', 'stories', 'subscribe'];

  function setHeaderTone(anchor) {
    // The footer is auto-height: the previous (cream) section stays behind the header, so keep its tone.
    if (anchor === 'footer') anchor = 'subscribe';
    $('body').toggleClass('header-dark', LIGHT_SECTIONS.indexOf(anchor) !== -1);
  }

  // Tag direct children of section content for staggered reveal on enter.
  $('.s-hero__content > *, .s-statement .container > *, .split__text > *, .banner-text > *, .stories-head, .story-group, .s-engage .carousel, .subscribe-card')
    .addClass('reveal');

  /* ---------------- fullPage.js ---------------- */
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    anchors: ['home', 'about', 'volume', 'stories', 'engage', 'subscribe', 'footer'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'Volume', 'Stories', 'Engage', 'Subscribe', 'Footer'],
    css3: true,
    scrollingSpeed: 900,
    easingcss3: 'cubic-bezier(.22,.61,.36,1)',
    autoScrolling: true,      // turns off native scrolling (html/body overflow:hidden)
    fitToSection: true,
    verticalCentered: true,
    keyboardScrolling: true,
    recordHistory: false,
    afterLoad: function (anchorLink) {
      setHeaderTone(anchorLink);
    },
    onLeave: function (index, nextIndex) {
      var nextAnchor = $('#fullpage .section').eq(nextIndex - 1).data('anchor');
      setHeaderTone(nextAnchor);
    }
  });

  /* ---------------- Overlays (menu + search) ---------------- */
  var $menu = $('#storiesMenu');
  var $search = $('#searchOverlay');

  function openOverlay($el) {
    $el.addClass('is-open').attr('aria-hidden', 'false');
    $('[data-open="menu"]').attr('aria-expanded', $el.is($menu));
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    if ($el.is($search)) { setTimeout(function () { $('#searchInput').trigger('focus'); }, 200); }
  }
  function closeOverlays() {
    $('.overlay').removeClass('is-open').attr('aria-hidden', 'true');
    $('[data-open="menu"]').attr('aria-expanded', 'false');
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
  }

  $('[data-open="menu"]').on('click', function () { openOverlay($menu); });
  $('[data-open="search"]').on('click', function () { openOverlay($search); });
  $('[data-close]').on('click', closeOverlays);
  $menu.on('click', 'a', closeOverlays);
  $(document).on('keydown', function (e) { if (e.key === 'Escape') closeOverlays(); });

  /* ---------------- Read / Listen / Watch tabs ---------------- */
  $('.segmented').on('click', 'button', function () {
    var tab = $(this).data('tab');
    $(this).addClass('is-active').attr('aria-selected', 'true')
      .siblings().removeClass('is-active').attr('aria-selected', 'false');
    $('.story-group').removeClass('is-active').filter('[data-group="' + tab + '"]').addClass('is-active');
  });

  /* ---------------- Engage carousel ---------------- */
  var $track = $('.carousel__track');
  var pos = 0;

  function visibleCount() {
    var w = window.innerWidth;
    return w <= 760 ? 1 : (w <= 1024 ? 2 : 3);
  }
  function updateCarousel() {
    var $items = $track.children();
    var max = Math.max(0, $items.length - visibleCount());
    pos = Math.min(Math.max(pos, 0), max);
    var gap = parseFloat($track.css('column-gap')) || parseFloat($track.css('gap')) || 0;
    var step = $items.first().outerWidth() + gap;
    $track.css('transform', 'translateX(' + (-pos * step) + 'px)');
    $('[data-carousel="prev"]').prop('disabled', pos === 0);
    $('[data-carousel="next"]').prop('disabled', pos === max);
  }
  $('[data-carousel="prev"]').on('click', function () { pos--; updateCarousel(); });
  $('[data-carousel="next"]').on('click', function () { pos++; updateCarousel(); });
  $(window).on('resize', updateCarousel);
  updateCarousel();

  /* ---------------- Newsletter (front-end only) ---------------- */
  $('#newsletterForm').on('submit', function (e) {
    e.preventDefault();
    var $input = $('#nlEmail');
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($input.val());
    $input.toggleClass('is-invalid', !ok);
    if (ok) {
      $(this).hide();
      $('.newsletter__thanks').prop('hidden', false);
    }
  });

  return () => {
    $(window).off('resize', updateCarousel);
    $(document).off('keydown');
    try { $.fn.fullpage.destroy('all'); } catch {}
  };
};

