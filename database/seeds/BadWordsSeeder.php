<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
class BadWordsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bad_words')->insert([
            'word' => 'verga',
            'status'=> 1,
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now(),
        ]);
        DB::table('bad_words')->insert([
            'word' => 'maldicion',
            'status'=> 1,
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now(),
        ]);
        DB::table('bad_words')->insert([
            'word' => 'puta',
            'status'=> 1,
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now(),
        ]);
    }
}
