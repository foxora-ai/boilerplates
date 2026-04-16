<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(['message' => 'Hello from Laravel!']);
    }

    public function greet(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
        ]);

        return response()->json([
            'message' => "Hello, {$validated['name']}!",
        ]);
    }
}
