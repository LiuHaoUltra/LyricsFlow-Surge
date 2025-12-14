// 最简测试脚本 - 检查脚本是否被触发
console.log('[LyricsFlow-Test] Request script triggered!');
console.log('[LyricsFlow-Test] URL: ' + ($request?.url || 'undefined'));
console.log('[LyricsFlow-Test] $argument: ' + (typeof $argument !== 'undefined' ? $argument : 'undefined'));
$done($request);
