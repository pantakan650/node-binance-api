const Binance = require('node-binance-api');
const binance = new Binance().options({
  'APIKEY':'ucMWcFS8IyQ8A3l4Qs2BC9zrcVjdeGZeITWjWrKBDloQUxvqdSWOlL06p4EvAVRQ',
  'APISECRET':'kLNt3JodOl6F4NmrgxFox2QdwI7YeCN7QO3IV5KwTswouSPt0az2bkiWKcCTEddp'
});


// Periods: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M
binance.candlesticks("BTCUSDT", "1m", function(error, ticks) {
	console.log("candlesticks()", ticks);
	let last_tick = ticks[ticks.length - 1];
	let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
	console.log("BTCUSDT last close: "+close);
});


// Maintain Market Depth Cache Locally via WebSocket
//binance.websockets.depthCache(["BNBBTC"], function(symbol, depth) {
	//let max = 10; // Show 10 closest orders only
	//let bids = binance.sortBids(depth.bids, max);
	//let asks = binance.sortAsks(depth.asks, max);
	//console.log(symbol+" depth cache update");
	//console.log("asks", asks);
	//console.log("bids", bids);
	//console.log("ask: "+binance.first(asks));
	//console.log("bid: "+binance.first(bids));

