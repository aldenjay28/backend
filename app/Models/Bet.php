<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bet extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'amount', 'game_type', 'result',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
