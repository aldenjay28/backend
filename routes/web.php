<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BetController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/bet', [BetController::class, 'placeBet']);
Route::get('/wallet/balance', [BetController::class, 'getBalance']);
