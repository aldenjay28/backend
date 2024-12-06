<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Wallet;

class UserSeeder extends Seeder
{
    public function run()
    {
        $user = User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'), // Replace with your password
        ]);

        Wallet::create([
            'user_id' => $user->id,
            'balance' => 1000.00, // Initial balance
            'currency' => 'PHP',
        ]);
    }
}
