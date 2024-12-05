<?
namespace App\Helpers;

class FairnessHelper
{
    public static function generateFairSeed()
    {
        return hash('sha256', microtime() . rand());
    }

    public static function verifyGame($serverSeed, $clientSeed)
    {
        return hash('sha256', $serverSeed . $clientSeed);
    }
}
