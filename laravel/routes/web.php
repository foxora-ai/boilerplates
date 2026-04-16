<?php

use App\Http\Controllers\HelloController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'Laravel Boilerplate', 'status' => 'ok']);
});

Route::prefix('api')->group(function () {
    Route::get('/hello', [HelloController::class, 'index']);
    Route::post('/hello', [HelloController::class, 'greet']);
});
