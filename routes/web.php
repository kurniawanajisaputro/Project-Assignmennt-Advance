<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| contains the "web" middleware group. Now create something great!
| routes are loaded by the RouteServiceProvider within a group which
|
*/
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
