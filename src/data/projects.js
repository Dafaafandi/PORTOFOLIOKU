export const projects = [
    {
        number: "01",
        title: "Pesona Lamongan",
        type: "Website informasi wisata",
        description:
            "Situs informasi destinasi wisata di Lamongan dengan fokus pada navigasi sederhana dan penyajian lokasi yang mudah dipahami.",
        image: "/images/image.png",
        categories: ["website"],
        stack: ["HTML", "CSS", "JavaScript"],
        status: "Full code tersedia · Demo tidak tersedia",
    },
    {
        number: "02",
        title: "Senior Living",
        type: "Aplikasi pengelolaan panti jompo",
        description:
            "Aplikasi untuk membantu pengelola panti jompo mengatur kebutuhan operasional dan data penghuni melalui sistem berbasis web dan mobile.",
        image: "/images/Senior Living.png",
        categories: ["mobile", "backend"],
        stack: ["Laravel", "Flutter", "Dart"],
        status: "Full code tersedia · Demo tidak tersedia",
    },
    {
        number: "03",
        title: "Server Monitoring",
        type: "IoT & kendali server",
        description:
            "Project tugas akhir untuk memantau dan mengendalikan server melalui sistem IoT yang terhubung ke web dashboard dan aplikasi mobile.",
        image: "/images/Server Montioring WEB.png",
        secondaryImage: "/images/Server Montioring APP.png",
        categories: ["mobile", "backend"],
        stack: ["IoT", "Web Dashboard", "Mobile App", "Server Control"],
        status: "Full code tersedia · Demo tidak tersedia",
    },
];

export const filters = [
    ["all", "Semua"],
    ["website", "Website"],
    ["mobile", "Mobile"],
    ["backend", "Backend"],
];
