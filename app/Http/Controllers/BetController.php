<?
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bet;
use App\Models\Wallet;

class BetController extends Controller
{
    public function placeBet(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'game_type' => 'required|string',
        ]);

        $wallet = $request->user()->wallet;

        if ($wallet->balance < $request->amount) {
            return response()->json(['message' => 'Insufficient balance'], 400);
        }

        $result = random_int(1, 100) <= 50 ? 'win' : 'lose';
        $winAmount = $result === 'win' ? $request->amount * 2 : 0;

        $wallet->update([
            'balance' => $wallet->balance - $request->amount + $winAmount,
        ]);

        Bet::create([
            'user_id' => $request->user()->id,
            'amount' => $request->amount,
            'game_type' => $request->game_type,
            'result' => $result,
        ]);

        return response()->json(['result' => $result, 'balance' => $wallet->balance]);
    }

    public function getBalance(Request $request)
    {
        return response()->json(['balance' => $request->user()->wallet->balance]);
    }
}
