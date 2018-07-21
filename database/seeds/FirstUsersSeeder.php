<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class FirstUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Administrador',
            'email'=> 'admin@admin.com',
            'password'=> bcrypt('admin123'),
            'rol'=>1,
            'remember_token'=>str_random(10),
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now(),
        ]);
        DB::table('users')->insert([
            'name' => 'Usuario',
            'email'=> 'usuario@usuario.com',
            'password'=> bcrypt('usuario123'),
            'rol'=>3,
            'remember_token'=>str_random(10),
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now(),
        ]);
    }
}
