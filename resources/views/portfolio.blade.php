<!doctype html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Portofolio Muhammad Abi Dafa Afandi, web, mobile, dan backend developer.">
    <meta name="theme-color" content="#101211">
    <meta property="og:title" content="Dafa Afandi — Developer Portfolio">
    <meta property="og:description" content="Web, mobile, dan backend development oleh Dafa Afandi.">
    <meta property="og:image" content="{{ asset('images/image.png') }}">
    <link rel="icon" href="{{ asset('favicon.svg') }}" type="image/svg+xml">
    <title>Dafa Afandi — Developer Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/portfolio.css') }}">
</head>

<body>
    <a class="skip-link" href="#content">Lewati ke konten</a>

    <header class="site-header">
        <a class="brand" href="#top" aria-label="Dafa Afandi, kembali ke atas"><span>DA</span><small>DEVELOPER /
                2026</small></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="siteNav"
            aria-label="Buka navigasi">
            <span></span><span></span>
        </button>
        <nav class="site-nav" id="siteNav" aria-label="Navigasi utama">
            <a href="#work">Karya</a>
            <a href="#stack">Stack</a>
            <a href="#about">Tentang</a>
            <a href="#contact" class="nav-cta">Mari ngobrol <span>↗</span></a>
        </nav>
    </header>

    <main id="content">
        <section class="hero section-shell" id="top">
            <div class="hero-intro reveal">
                <p class="kicker"><span class="dot"></span> Terbuka untuk proyek & magang</p>
                <p class="hero-role">WEB DEVELOPER <span>·</span> MOBILE DEVELOPER <span>·</span> BACKEND EXPLORER</p>
                <h1>Membangun produk digital yang <em>berguna.</em></h1>
                <p class="hero-copy">Saya Dafa, developer yang membangun pengalaman web, aplikasi mobile, dan sistem
                    backend dengan perhatian pada detail, struktur, dan cara orang menggunakan produk digital.</p>
                <div class="hero-actions">
                    <a class="button button-accent" href="#work">Lihat karya <span>↓</span></a>
                    <a class="button button-dark" href="{{ asset('downloads/CV-Muhammad-Abi-Dafa-Afandi.docx') }}"
                        download>Download CV <span>↓</span></a>
                    <a class="text-link" href="mailto:Dafaafandi946@gmail.com">Dafaafandi946@gmail.com
                        <span>↗</span></a>
                </div>
            </div>
            <div class="hero-aside reveal reveal-delay">
                <div class="portrait-frame"><img src="{{ asset('images/DSC08576.JPG') }}"
                        alt="Foto Muhammad Abi Dafa Afandi" decoding="async"></div>
                <div class="hero-note"><span class="note-line"></span>
                    <p>Berbasis di<br><strong>Surabaya, Indonesia</strong></p>
                </div>
                <div class="hero-stamp"><span>{{ str_pad($projectCount, 2, '0', STR_PAD_LEFT) }}</span>
                    <p>top 3<br>projects</p>
                </div>
            </div>
        </section>

        <section class="signal-strip section-shell reveal" aria-label="Ringkasan profil">
            <div><span class="label">01 / Fokus</span><strong>Web · Mobile · Backend</strong></div>
            <div><span class="label">02 / Pendidikan</span><strong>D3 Teknik Informatika — PENS</strong></div>
            <div><span class="label">03 / Pendekatan</span><strong>Rapi dari tampilan hingga logika</strong></div>
        </section>

        <div class="marquee" aria-label="Dafa Afandi, web, mobile, backend developer">
            <div class="marquee-track"><span>DESIGN WITH INTENT</span><b>✳</b><span>BUILD WITH
                    CURIOSITY</span><b>✳</b><span>SHIP WITH CARE</span><b>✳</b><span>DESIGN WITH INTENT</span><b>✳</b>
            </div>
        </div>

        <section class="work-section section-shell" id="work">
            <div class="section-heading reveal"><span class="section-number">01</span>
                <div>
                    <p class="eyebrow">Top 3 projects</p>
                    <h2>Beberapa hal yang<br><em>saya bangun.</em></h2>
                </div>
                <p class="section-intro">Pilihan project yang menunjukkan cara saya merancang interface, menyusun
                    alur aplikasi, dan mengubah kebutuhan menjadi produk yang bisa digunakan.</p>
            </div>
            <div class="project-filters" role="group" aria-label="Filter project">
                <button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">Semua
                    <span>{{ $projectCount }}</span></button>
                <button class="filter-button" type="button" data-filter="website" aria-pressed="false">Website</button>
                <button class="filter-button" type="button" data-filter="mobile" aria-pressed="false">Mobile</button>
                <button class="filter-button" type="button" data-filter="backend" aria-pressed="false">Backend</button>
                <button class="filter-button" type="button" data-filter="ui" aria-pressed="false">UI
                    Design</button>
            </div>
            <div class="project-showcase" tabindex="0" aria-label="Project showcase" aria-live="polite">
                @foreach ($projects as $project)
                    <article class="showcase-slide {{ $loop->first ? 'is-active' : '' }}"
                        data-slide="{{ $loop->index }}">
                        <div class="showcase-visual"><span class="showcase-kicker">PROJECT {{ $project['number'] }} /
                                {{ strtoupper($project['category']) }}</span>
                            <div class="photo-slider" data-photo-slider>
                                <img class="photo-slide is-active" src="{{ asset('images/' . $project['image']) }}"
                                    alt="Preview {{ $project['title'] }}" loading="eager" decoding="async">
                                @if (!empty($project['secondary_image']))
                                    <img class="photo-slide"
                                        src="{{ asset('images/' . $project['secondary_image']) }}"
                                        alt="Tampilan aplikasi mobile {{ $project['title'] }}" loading="eager"
                                        decoding="async">
                                    <div class="photo-controls"><button type="button" class="photo-prev"
                                            aria-label="Foto sebelumnya">←</button><span
                                            class="photo-counter"><b>01</b> / 02</span><button type="button"
                                            class="photo-next" aria-label="Foto berikutnya">→</button></div>
                                @endif
                            </div>
                        </div>
                        <div class="showcase-copy">
                            <p class="project-type">{{ $project['type'] }}</p>
                            <h3>{{ $project['title'] }}</h3>
                            <p>{{ $project['description'] }}</p>
                            <div class="showcase-tags">
                                @foreach ($project['stack'] as $technology)
                                    <span>{{ $technology }}</span>
                                @endforeach
                            </div>
                            <p class="project-status">{{ $project['status'] }}</p>
                        </div>
                    </article>
                @endforeach
                <div class="showcase-controls"><button class="showcase-button showcase-prev" type="button"
                        aria-label="Project sebelumnya">←</button>
                    <div class="showcase-dots">
                        @foreach ($projects as $project)
                            <button type="button" class="showcase-dot {{ $loop->first ? 'is-active' : '' }}"
                                data-slide-to="{{ $loop->index }}"
                                aria-label="Lihat project {{ $project['number'] }}"
                                aria-pressed="{{ $loop->first ? 'true' : 'false' }}"></button>
                        @endforeach
                    </div><button class="showcase-button showcase-next" type="button"
                        aria-label="Project berikutnya">→</button><span class="showcase-counter"><b>01</b> /
                        {{ str_pad($projectCount, 2, '0', STR_PAD_LEFT) }}</span>
                </div>
            </div>
            <div class="project-grid">
                @foreach ($projects as $project)
                    <article class="project-card {{ $loop->last ? 'project-card-featured' : '' }} reveal"
                        data-category="{{ $project['category'] }}">
                        <div class="project-image"><span class="project-index">{{ $project['number'] }}</span>
                            <div class="photo-slider" data-photo-slider>
                                <img class="photo-slide is-active" src="{{ asset('images/' . $project['image']) }}"
                                    alt="Tampilan {{ $project['title'] }}" loading="lazy" decoding="async">
                                @if (!empty($project['secondary_image']))
                                    <img class="photo-slide"
                                        src="{{ asset('images/' . $project['secondary_image']) }}"
                                        alt="Tampilan aplikasi mobile {{ $project['title'] }}" loading="lazy"
                                        decoding="async">
                                    <div class="photo-controls"><button type="button" class="photo-prev"
                                            aria-label="Foto sebelumnya">←</button><span
                                            class="photo-counter"><b>01</b> / 02</span><button type="button"
                                            class="photo-next" aria-label="Foto berikutnya">→</button></div>
                                @endif
                            </div>
                        </div>
                        <div class="project-meta">
                            @if ($loop->last)
                                <span class="featured-label">FEATURED EXPLORATION</span>
                            @endif
                            <p class="project-type">{{ $project['type'] }}</p>
                            <h3>{{ $project['title'] }}</h3>
                            <p class="project-description">{{ $project['description'] }}</p>
                            <ul class="tags">
                                @foreach ($project['stack'] as $technology)
                                    <li>{{ $technology }}</li>
                                @endforeach
                            </ul>
                            <p class="project-status">{{ $project['status'] }}</p>
                        </div>
                    </article>
                @endforeach
            </div>
            <p class="more-projects"><span>TOP 3</span> Tiga project pilihan yang merepresentasikan fokus dan kemampuan
                saya.</p>
        </section>

        <section class="statement-section section-shell reveal" id="about">
            <div class="section-heading"><span class="section-number">02</span>
                <div>
                    <p class="eyebrow">How I think</p>
                    <h2>Teknologi adalah alat.<br><em>Rasa ingin tahu adalah mesin.</em></h2>
                </div>
            </div>
            <div class="statement-grid">
                <p>Saya menikmati proses memahami bagaimana sesuatu bekerja di balik layar, lalu menyusunnya kembali
                    menjadi sistem yang lebih mudah dipakai. Bagi saya, interface yang baik dan logika yang terstruktur
                    selalu berjalan beriringan.</p>
                <p>Saya terbiasa memulai dari nol, membaca dokumentasi, memecah masalah, dan menyelesaikan detail
                    kecil yang membuat sebuah produk terasa utuh dan dapat diandalkan.</p>
            </div>
            <div class="statement-signature"><span>DA / 2026</span><strong>Keep making<br>things clearer.</strong>
            </div>
        </section>

        <section class="stack-section section-shell reveal" id="stack">
            <div class="section-heading"><span class="section-number">03</span>
                <div>
                    <p class="eyebrow">Tools I use</p>
                    <h2>Stack yang sedang<br><em>saya kembangkan.</em></h2>
                </div>
            </div>
            <div class="stack-list"><span><b>01</b><strong>HTML /
                        CSS</strong></span><span><b>02</b><strong>JavaScript</strong></span><span><b>03</b><strong>PHP</strong></span><span><b>04</b><strong>MySQL</strong></span><span><b>05</b><strong>Flutter
                        / Dart</strong></span><span><b>06</b><strong>REST
                        API</strong></span><span><b>07</b><strong>Git</strong></span><span><b>08</b><strong>Laravel
                        <small>primary</small></strong></span></div>
        </section>

        <section class="activity-section section-shell reveal" aria-labelledby="activity-title">
            <div class="section-heading"><span class="section-number">04</span>
                <div>
                    <p class="eyebrow">Currently building</p>
                    <h2 id="activity-title">Selalu ada hal baru<br><em>untuk dipelajari.</em></h2>
                </div>
            </div>
            <div class="activity-list">
                <div><span class="activity-dot"></span>
                    <p><strong>Laravel development</strong><small>Membangun aplikasi backend dengan struktur yang
                            terorganisir dan mudah dirawat.</small></p>
                </div>
                <div><span class="activity-dot"></span>
                    <p><strong>Project documentation</strong><small>Merapikan full code project agar proses dan hasilnya
                            mudah dipresentasikan.</small></p>
                </div>
                <div><span class="activity-dot"></span>
                    <p><strong>Terbuka untuk kolaborasi</strong><small>Siap berdiskusi tentang project web, mobile,
                            maupun tugas teknis.</small></p>
                </div>
            </div>
        </section>

        <section class="contact-section section-shell reveal" id="contact">
            <p class="eyebrow">Have a project in mind?</p>
            <h2>Mari membuat sesuatu<br><em>yang berarti.</em></h2>
            <p class="contact-copy">Terbuka untuk diskusi proyek, kolaborasi, magang, atau sekadar bertukar pikiran
                tentang pengembangan aplikasi.</p><a class="contact-email"
                href="mailto:Dafaafandi946@gmail.com">Dafaafandi946@gmail.com <span>↗</span></a>
            <a class="contact-cv-link" href="{{ asset('downloads/CV-Muhammad-Abi-Dafa-Afandi.docx') }}"
                download>Download CV <span>↓</span></a>
        </section>
    </main>

    <footer class="site-footer section-shell"><span>© {{ date('Y') }} Dafa Afandi</span><span>Made with curiosity
            in Surabaya</span>
        <div><a href="https://github.com/Dafaafandi" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a
                href="https://www.linkedin.com/in/muhammad-abi-dafa-afandi-2106262a4/" target="_blank"
                rel="noopener noreferrer">LinkedIn ↗</a></div>
    </footer>
    <script src="{{ asset('js/portfolio.js') }}"></script>
</body>

</html>
