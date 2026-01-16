<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/accommodation', function () {
    return Inertia::render('Accommodation');
})->name('accommodation');

Route::get('/dining', function () {
    return Inertia::render('Dining');
})->name('dining');

Route::get('/events', function () {
    return Inertia::render('Event');
})->name('events');

Route::get('/platinum-suite', function () {
    return Inertia::render('PlatinumSuite');
})->name('platinum-suite');

Route::get('/orchid', function () {
    return Inertia::render('OrchidRestaurant');
})->name('orchid');

Route::get('/booking', function () {
    return Inertia::render('Booking');
})->name('booking');

Route::post('/booking', [App\Http\Controllers\BookingController::class, 'store'])->name('booking.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
