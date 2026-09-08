import { useEffect, useState } from "react";
import VuePhotoSlider from "./components/VuePhotoSlider";
import { filters, projects } from "./data/projects";
import "./styles/portfolio.css";

const cvUrl = "/downloads/CV-Muhammad-Abi-Dafa-Afandi.docx";

function useReveal() {
    useEffect(() => {
        const items = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) {
            items.forEach((item) => item.classList.add("is-visible"));
            return undefined;
        }
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                }),
            { threshold: 0.12 },
        );
        items.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);
}

function usePointerGlow() {
    useEffect(() => {
        const targets = document.querySelectorAll(
            ".project-card, .project-showcase, .portrait-frame",
        );
        const updateGlow = (event) => {
            const target = event.currentTarget;
            const bounds = target.getBoundingClientRect();
            target.style.setProperty(
                "--pointer-x",
                `${event.clientX - bounds.left}px`,
            );
            target.style.setProperty(
                "--pointer-y",
                `${event.clientY - bounds.top}px`,
            );
        };
        targets.forEach((target) =>
            target.addEventListener("pointermove", updateGlow),
        );
        return () =>
            targets.forEach((target) =>
                target.removeEventListener("pointermove", updateGlow),
            );
    }, []);
}

function Header({ onNavigate }) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((value) => !value);
    const close = () => setOpen(false);

    useEffect(() => {
        const onKeyDown = (event) => event.key === "Escape" && close();
        const onClick = (event) => {
            if (open && !event.target.closest(".site-header")) close();
        };
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("click", onClick);
        };
    }, [open]);

    const navigate = (event) => {
        close();
        onNavigate?.(event);
    };

    return (
        <header className="site-header">
            <a
                className="brand"
                href="#top"
                aria-label="Dafa Afandi, kembali ke atas"
                onClick={navigate}
            >
                <span>DA</span>
                <small>DEVELOPER / 2026</small>
            </a>
            <button
                className="menu-toggle"
                type="button"
                aria-expanded={open}
                aria-controls="siteNav"
                aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
                onClick={(event) => {
                    event.stopPropagation();
                    toggle();
                }}
            >
                <span />
                <span />
            </button>
            <nav
                className={`site-nav${open ? " is-open" : ""}`}
                id="siteNav"
                aria-label="Navigasi utama"
            >
                <a href="#work" onClick={navigate}>
                    Karya
                </a>
                <a href="#stack" onClick={navigate}>
                    Stack
                </a>
                <a href="#about" onClick={navigate}>
                    Tentang
                </a>
                <a href="#contact" className="nav-cta" onClick={navigate}>
                    Mari ngobrol <span>↗</span>
                </a>
            </nav>
        </header>
    );
}

function ProjectShowcase({ project }) {
    const images = [
        project.image,
        ...(project.secondaryImage ? [project.secondaryImage] : []),
    ];
    return (
        <article className="showcase-slide is-active">
            <div className="showcase-visual">
                <span className="showcase-kicker">
                    PROJECT {project.number} / {project.category.toUpperCase()}
                </span>
                <VuePhotoSlider
                    images={images}
                    altPrefix={`Preview ${project.title}`}
                />
            </div>
            <div className="showcase-copy">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="showcase-tags">
                    {project.stack.map((technology) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>
                <p className="project-status">{project.status}</p>
            </div>
        </article>
    );
}

function ProjectCard({ project, featured }) {
    const images = [
        project.image,
        ...(project.secondaryImage ? [project.secondaryImage] : []),
    ];
    return (
        <article
            className={`project-card${featured ? " project-card-featured" : ""} reveal`}
            data-category={project.category}
        >
            <div className="project-image">
                <span className="project-index">{project.number}</span>
                <VuePhotoSlider
                    images={images}
                    altPrefix={`Tampilan ${project.title}`}
                />
            </div>
            <div className="project-meta">
                {featured && (
                    <span className="featured-label">FEATURED EXPLORATION</span>
                )}
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tags">
                    {project.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
                <p className="project-status">{project.status}</p>
            </div>
        </article>
    );
}

function WorkSection() {
    const [filter, setFilter] = useState("all");
    const [slide, setSlide] = useState(0);
    const visibleProjects = projects.filter(
        (project) => filter === "all" || project.category === filter,
    );
    const current = projects[slide];
    const move = (direction) =>
        setSlide(
            (value) => (value + direction + projects.length) % projects.length,
        );

    return (
        <section className="work-section section-shell" id="work">
            <div className="section-heading reveal">
                <span className="section-number">01</span>
                <div>
                    <p className="eyebrow">Top 3 projects</p>
                    <h2>
                        Beberapa hal yang
                        <br />
                        <em>saya bangun.</em>
                    </h2>
                </div>
                <p className="section-intro">
                    Pilihan project yang menunjukkan cara saya merancang
                    interface, menyusun alur aplikasi, dan mengubah kebutuhan
                    menjadi produk yang bisa digunakan.
                </p>
            </div>
            <div
                className="project-filters"
                role="group"
                aria-label="Filter project"
            >
                {filters.map(([value, label]) => (
                    <button
                        key={value}
                        className={`filter-button${filter === value ? " is-active" : ""}`}
                        type="button"
                        data-filter={value}
                        aria-pressed={filter === value}
                        onClick={() => setFilter(value)}
                    >
                        {label}
                        {value === "all" && <span>{projects.length}</span>}
                    </button>
                ))}
            </div>
            <div
                className="project-showcase"
                tabIndex="0"
                aria-label="Project showcase"
                aria-live="polite"
            >
                <ProjectShowcase project={current} />
                <div className="showcase-controls">
                    <button
                        className="showcase-button"
                        type="button"
                        aria-label="Project sebelumnya"
                        onClick={() => move(-1)}
                    >
                        ←
                    </button>
                    <div className="showcase-dots">
                        {projects.map((project, index) => (
                            <button
                                key={project.number}
                                type="button"
                                className={`showcase-dot${slide === index ? " is-active" : ""}`}
                                aria-label={`Lihat project ${project.number}`}
                                aria-pressed={slide === index}
                                onClick={() => setSlide(index)}
                            />
                        ))}
                    </div>
                    <button
                        className="showcase-button"
                        type="button"
                        aria-label="Project berikutnya"
                        onClick={() => move(1)}
                    >
                        →
                    </button>
                    <span className="showcase-counter">
                        <b>{String(slide + 1).padStart(2, "0")}</b> /{" "}
                        {String(projects.length).padStart(2, "0")}
                    </span>
                </div>
            </div>
            <div className="project-grid">
                {visibleProjects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        featured={project.number === "03"}
                    />
                ))}
            </div>
            <p className="more-projects">
                <span>TOP 3</span> Tiga project pilihan yang merepresentasikan
                fokus dan kemampuan saya.
            </p>
        </section>
    );
}

export default function App() {
    useReveal();
    usePointerGlow();
    return (
        <>
            <a className="skip-link" href="#content">
                Lewati ke konten
            </a>
            <Header />
            <main id="content">
                <section className="hero section-shell" id="top">
                    <div className="hero-intro reveal">
                        <p className="kicker">
                            <span className="dot" /> Terbuka untuk proyek &
                            magang
                        </p>
                        <p className="hero-role">
                            WEB DEVELOPER <span>·</span> MOBILE DEVELOPER{" "}
                            <span>·</span> BACKEND EXPLORER
                        </p>
                        <h1>
                            Membangun produk digital yang <em>berguna.</em>
                        </h1>
                        <p className="hero-copy">
                            Saya Dafa, developer yang membangun pengalaman web,
                            aplikasi mobile, dan sistem backend dengan perhatian
                            pada detail, struktur, dan cara orang menggunakan
                            produk digital.
                        </p>
                        <div className="hero-actions">
                            <a className="button button-accent" href="#work">
                                Lihat karya <span>↓</span>
                            </a>
                            <a
                                className="button button-dark"
                                href={cvUrl}
                                download
                            >
                                Download CV <span>↓</span>
                            </a>
                            <a
                                className="text-link"
                                href="mailto:Dafaafandi946@gmail.com"
                            >
                                Dafaafandi946@gmail.com <span>↗</span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-aside reveal reveal-delay">
                        <div className="portrait-frame">
                            <img
                                src="/images/DSC08576.webp"
                                alt="Foto Muhammad Abi Dafa Afandi"
                                decoding="async"
                            />
                        </div>
                        <div className="hero-note">
                            <span className="note-line" />
                            <p>
                                Berbasis di
                                <br />
                                <strong>Surabaya, Indonesia</strong>
                            </p>
                        </div>
                        <div className="hero-stamp">
                            <span>03</span>
                            <p>
                                top 3<br />
                                projects
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="signal-strip section-shell reveal"
                    aria-label="Ringkasan profil"
                >
                    <div>
                        <span className="label">01 / Fokus</span>
                        <strong>Web · Mobile · Backend</strong>
                    </div>
                    <div>
                        <span className="label">02 / Pendidikan</span>
                        <strong>D3 Teknik Informatika — PENS</strong>
                    </div>
                    <div>
                        <span className="label">03 / Pendekatan</span>
                        <strong>Rapi dari tampilan hingga logika</strong>
                    </div>
                </section>
                <div
                    className="marquee"
                    aria-label="Dafa Afandi, web, mobile, backend developer"
                >
                    <div className="marquee-track">
                        <span>DESIGN WITH INTENT</span>
                        <b>✳</b>
                        <span>BUILD WITH CURIOSITY</span>
                        <b>✳</b>
                        <span>SHIP WITH CARE</span>
                        <b>✳</b>
                        <span>DESIGN WITH INTENT</span>
                        <b>✳</b>
                    </div>
                </div>
                <WorkSection />
                <section
                    className="statement-section section-shell reveal"
                    id="about"
                >
                    <div className="section-heading">
                        <span className="section-number">02</span>
                        <div>
                            <p className="eyebrow">How I think</p>
                            <h2>
                                Teknologi adalah alat.
                                <br />
                                <em>Rasa ingin tahu adalah mesin.</em>
                            </h2>
                        </div>
                    </div>
                    <div className="statement-grid">
                        <p>
                            Saya menikmati proses memahami bagaimana sesuatu
                            bekerja di balik layar, lalu menyusunnya kembali
                            menjadi sistem yang lebih mudah dipakai. Bagi saya,
                            interface yang baik dan logika yang terstruktur
                            selalu berjalan beriringan.
                        </p>
                        <p>
                            Saya terbiasa memulai dari nol, membaca dokumentasi,
                            memecah masalah, dan menyelesaikan detail kecil yang
                            membuat sebuah produk terasa utuh dan dapat
                            diandalkan.
                        </p>
                    </div>
                    <div className="statement-signature">
                        <span>DA / 2026</span>
                        <strong>
                            Keep making
                            <br />
                            things clearer.
                        </strong>
                    </div>
                </section>
                <section
                    className="stack-section section-shell reveal"
                    id="stack"
                >
                    <div className="section-heading">
                        <span className="section-number">03</span>
                        <div>
                            <p className="eyebrow">Tools I use</p>
                            <h2>
                                Stack yang sedang
                                <br />
                                <em>saya kembangkan.</em>
                            </h2>
                        </div>
                    </div>
                    <div className="stack-list">
                        {[
                            "HTML / CSS",
                            "JavaScript",
                            "PHP",
                            "MySQL",
                            "Flutter / Dart",
                            "REST API",
                            "Git",
                            "Laravel",
                        ].map((item, index) => (
                            <span key={item}>
                                <b>{String(index + 1).padStart(2, "0")}</b>
                                <strong>{item}</strong>
                            </span>
                        ))}
                    </div>
                </section>
                <section
                    className="activity-section section-shell reveal"
                    aria-labelledby="activity-title"
                >
                    <div className="section-heading">
                        <span className="section-number">04</span>
                        <div>
                            <p className="eyebrow">Currently building</p>
                            <h2 id="activity-title">
                                Selalu ada hal baru
                                <br />
                                <em>untuk dipelajari.</em>
                            </h2>
                        </div>
                    </div>
                    <div className="activity-list">
                        <div>
                            <span className="activity-dot" />
                            <p>
                                <strong>Laravel development</strong>
                                <small>
                                    Membangun aplikasi backend dengan struktur
                                    yang terorganisir dan mudah dirawat.
                                </small>
                            </p>
                        </div>
                        <div>
                            <span className="activity-dot" />
                            <p>
                                <strong>Project documentation</strong>
                                <small>
                                    Merapikan full code project agar proses dan
                                    hasilnya mudah dipresentasikan.
                                </small>
                            </p>
                        </div>
                        <div>
                            <span className="activity-dot" />
                            <p>
                                <strong>Terbuka untuk kolaborasi</strong>
                                <small>
                                    Siap berdiskusi tentang project web, mobile,
                                    maupun tugas teknis.
                                </small>
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className="contact-section section-shell reveal"
                    id="contact"
                >
                    <p className="eyebrow">Have a project in mind?</p>
                    <h2>
                        Mari membuat sesuatu
                        <br />
                        <em>yang berarti.</em>
                    </h2>
                    <p className="contact-copy">
                        Terbuka untuk diskusi proyek, kolaborasi, magang, atau
                        sekadar bertukar pikiran tentang pengembangan aplikasi.
                    </p>
                    <a
                        className="contact-email"
                        href="mailto:Dafaafandi946@gmail.com"
                    >
                        Dafaafandi946@gmail.com <span>↗</span>
                    </a>
                    <a className="contact-cv-link" href={cvUrl} download>
                        Download CV <span>↓</span>
                    </a>
                </section>
            </main>
            <footer className="site-footer section-shell">
                <span>© 2026 Dafa Afandi</span>
                <span>Made with curiosity in Surabaya</span>
                <div>
                    <a
                        href="https://github.com/Dafaafandi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammad-abi-dafa-afandi-2106262a4/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>
                </div>
            </footer>
        </>
    );
}
