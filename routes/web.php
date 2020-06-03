<?php

use Illuminate\Support\Facades\Route;

Route::get('{path}', 'ViewController')->where('path', '([0-9A-Za-z\-]+)?');
