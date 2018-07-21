<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(StatusWordsSeeder::class);
        $this->call(BadWordsSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(FirstUsersSeeder::class);
    }
}
