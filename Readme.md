# LyricsFlow TypeL (Surge Module)

## 简介 (Introduction)

**LyricsFlow TypeL** 是一个为 Spotify iOS 客户端打造的歌词增强 Surge 模块。它通过拦截 Spotify 内部 API 请求，无缝接入 **LyricsFlow TypeF** 后端，为您提供基于多源聚合（QQ/网易/酷狗等）的精准逐行歌词与翻译体验。

> **致谢**: 本项目的 MITM 逻辑与实现参考了 [DualSubs](https://github.com/DualSubs/Spotify) 的优秀工作。

## 核心特性 (Features)

- **多源聚合**: 突破 Spotify 歌词库限制，智能聚合主流中文音乐平台的歌词数据。
- **精准匹配**: 基于 metadata 与时长模糊匹配算法，解决常见的歌词错配问题。
- **动态语言**: 支持根据歌词源自动识别语言编码，优化客户端字体渲染。
- **AI 增强 (可选)**: 支持通过 TypeF 后端透传您的 AI 配置，实现高质量的 AI 辅助翻译 (BYOK)。

## 安装指南 (Installation)

### 1. 准备工作
- iOS 设备安装 **Surge 5+**。
- 确保 **MitM** 功能已开启并正确安装/信任 CA 证书。
- 部署好 **LyricsFlow TypeF** 后端 (Docker)。

### 2. 安装模块
将以下模块地址添加到 Surge 的【模块】列表中：

```text
https://raw.githubusercontent.com/liuhaoultra/lyricsflow-surge/main/LyricsFlow.sgmodule
```

### 3. (可选) 配置 BoxJS
虽然模块安装后已可直接工作，但建议使用 BoxJS 进行更方便的配置管理。

- 订阅地址: `https://raw.githubusercontent.com/liuhaoultra/lyricsflow-surge/main/boxjs.json`
- 在 BoxJS 应用中找到 **LyricsFlow** 进行设置。

## 配置说明 (Configuration)

### 方式一：BoxJS (推荐)
支持可视化配置与持久化存储。

| 设置项 | 描述 | 默认值 |
| :--- | :--- | :--- |
| `TypeF URL` | 您的 TypeF 后端地址 (需公网可访问或局域网互通) | `http://127.0.0.1:8000` |
| `Enable AI` | 是否开启 AI 增强功能 | `false` |
| `Enrich URL` | AI API Base URL | - |
| `Enrich Key` | AI API Key | - |
| `Log Level` | 日志等级 (建议平时使用 WARN) | `WARN` |

### 方式二：Surge 模块参数
直接在模块定义中修改 argument 参数：

```ini
[Script]
lyrics = type=http-request, pattern=..., script-path=..., argument=TYPEF_URL=http%3A%2F%2F192.168.1.5%3A8000&LogLevel=INFO
```

## API 要求

本模块依赖 **LyricsFlow TypeF** 后端的 `POST /v1/match` 接口。确保您的后端版本 >= 1.0.0 以支持动态语言识别。