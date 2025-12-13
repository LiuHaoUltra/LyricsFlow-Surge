# LyricsFlow TypeL (Surge Module)

## 简介
**LyricsFlow TypeL** 是一个 Surge 模块，旨在为 Spotify iOS 客户端提供 **LyricsFlow** 强大的歌词服务。

它通过 **MITM (中间人攻击)** 拦截 Spotify 的歌词请求，并将请求转发至你自建或公共的 **LyricsFlow TypeF** 服务器。从而利用 TypeF 的多源聚合（QQ/网易/酷狗）、精准匹配和解密能力，为 Spotify 带来极致的滚动歌词体验。

## 核心特性

- **多源聚合**: 突破 Spotify 歌词库限制，无缝接入国内各大音乐平台歌词库。
- **精准匹配**: 解决 Spotify 经常出现的歌词错配问题 （基于 TypeF 的时长 + 元数据模糊匹配算法）。
- **AI 翻译增强**: 
    - **默认开启标准翻译**: 自动为所有外文歌词提供标准翻译。
    - **Client AI 配置透传**: 支持在 Surge 脚本配置中填写个人的 AI Key/URL，请求时将透传给 TypeF 服务器，由服务器代为请求并返回翻译结果（BYOK 模式）。
- **超低延迟**: 基于 TypeF 的本地缓存机制，秒开歌词。

## 安装说明

### 1. 准备工作
- iOS 设备安装 **Surge 5+**。
- 确保已配置好 **MitM** 并安装 CA 证书。
- 拥有一台运行中的 **LyricsFlow TypeF** 服务器（Docker 部署）。

### 2. 安装模块
将以下链接添加到 Surge 模块列表：

```text
https://raw.githubusercontent.com/liuhaoultra/lyricsflow-typel/main/Surge/LyricsFlow.sgmodule
```

### 3. 配置参数
在 Surge 或 BoxJS 中搜索 `LyricsFlow` 进行配置：

| 参数 | 描述 | 默认值 |
| :--- | :--- | :--- |
| `TYPEF_URL` | TypeF 服务器地址 | `http://127.0.0.1:8000` |
| `ENABLE_ENRICH` | 启用 AI 增强服务（Client） | `False` |
| `ENRICH_URL` | AI 增强服务 URL (OpenAI 格式) | `None` |
| `ENRICH_KEY` | AI 增强服务 API Key | `None` |

## 工作原理

1. **拦截**: 脚本监听 `spclient.wg.spotify.com` 的 `/color-lyrics/v2/track/` 接口。
2. **获元**: 从请求 URL 或 Spotify 元数据流中提取 `Track ID` 及歌曲信息。
3. **请求**: 向配置的 `TypeF` 服务器发送 `POST /v1/match` 请求。
4. **转换**: 将 TypeF 返回的 `LyricsFlow Standard JSON` 转换为 Spotify 客户端识别的 JSON/Protobuf 格式。
5. **注入**: 伪造响应直接返回给 Spotify 客户端。

## 常见问题

**Q: 为什么歌词显示没有翻译？**
A: 请检查 TypeF 服务器是否启用了翻译源，或者手动点击 Spotify 界面上的“翻译”按钮（如果脚本成功激活了翻译功能）。

**Q: 如何开启 AI 翻译？**
A: 在 BoxJS 设置中开启 `Enable AI Translation`。开启后，点击翻译按钮将优先请求 TypeF 的 AI 缓存结果。

## 许可证
本项目基于 MIT 许可证开源。