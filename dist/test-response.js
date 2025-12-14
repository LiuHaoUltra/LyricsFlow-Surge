// 最简测试脚本 - 检查响应脚本是否被触发
console.log('[LyricsFlow-Test] Response script triggered!');
console.log('[LyricsFlow-Test] URL: ' + ($request?.url || 'undefined'));
console.log('[LyricsFlow-Test] Response status: ' + ($response?.status || 'undefined'));
$done({});
