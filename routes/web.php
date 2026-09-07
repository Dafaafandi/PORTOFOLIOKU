<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $projects = [
        [
            'number' => '01',
            'title' => 'Pesona Lamongan',
            'type' => 'Website informasi wisata',
            'description' => 'Situs informasi destinasi wisata di Lamongan dengan fokus pada navigasi sederhana dan penyajian lokasi yang mudah dipahami.',
            'image' => 'image.png',
            'category' => 'website',
            'stack' => ['HTML', 'CSS', 'JavaScript'],
            'status' => 'Full code tersedia · Demo tidak tersedia',
        ],
        [
            'number' => '02',
            'title' => 'Senior Living',
            'type' => 'Aplikasi pengelolaan panti jompo',
            'description' => 'Aplikasi untuk membantu pengelola panti jompo mengatur kebutuhan operasional dan data penghuni melalui sistem berbasis web dan mobile.',
            'image' => 'Senior Living.png',
            'category' => 'mobile',
            'stack' => ['Laravel', 'Flutter', 'Dart'],
            'status' => 'Full code tersedia · Demo tidak tersedia',
        ],
        [
            'number' => '03',
            'title' => 'Server Monitoring',
            'type' => 'IoT & kendali server',
            'description' => 'Project tugas akhir untuk memantau dan mengendalikan server melalui sistem IoT yang terhubung ke web dashboard dan aplikasi mobile.',
            'image' => 'Server Montioring WEB.png',
            'secondary_image' => 'Server Montioring APP.png',
            'category' => 'backend',
            'stack' => ['IoT', 'Web Dashboard', 'Mobile App', 'Server Control'],
            'status' => 'Full code tersedia · Demo tidak tersedia',
        ],
    ];

    $projectCount = count($projects);

    return view('portfolio', compact('projects', 'projectCount'));
});
