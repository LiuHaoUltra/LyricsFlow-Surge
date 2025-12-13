# 🎵 LyricsFlow-Surge

> Spotify 歌词增强模块 - 为 Spotify 提供多源聚合歌词和翻译

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Surge](https://img.shields.io/badge/Surge-5.0+-orange.svg)](https://nssurge.com/)

---

## 📖 项目介绍

LyricsFlow-Surge 是一个基于 Surge 的 Spotify 歌词增强模块，通过拦截 Spotify 的歌词请求，将其替换为来自 **LyricsFlow-TypeF** 后端服务聚合的多源歌词（支持 QQ音乐、网易云音乐等），并支持双语翻译显示。

### 🎯 解决的问题

- Spotify 原生歌词覆盖率有限
- 歌词翻译数量极少

---

## ✨ 主要功能

| 功能 | 描述 |
|------|------|
| 🎤 **多源歌词聚合** | 自动从 QQ音乐、网易云音乐等平台匹配最佳歌词 |
| 🌐 **双语歌词显示** | 原文歌词 + 翻译同时显示 |
| 🤖 **AI 翻译增强** | 可选使用 AI 服务优化翻译质量 |
| ⏱️ **逐行同步** | 支持 Line-Synced 歌词时间轴同步 |
| ⚙️ **灵活配置** | 支持 Surge 参数和 BoxJS 配置 |

---

## 📦 安装步骤

### 环境要求

- **Surge 5.0+** (iOS / macOS)
- **LyricsFlow-TypeF 后端服务**（需自行部署）

### 方式一：Surge 模块安装（推荐）

1. 打开 Surge → 首页 → 模块
2. 点击 **新建模块** 或 **从 URL 安装**
3. 输入模块 URL：
   ```
   https://raw.githubusercontent.com/liuhaoultra/lyricsflow-surge/main/LyricsFlow.sgmodule
   ```
4. 根据模块参数设置中填写你的 TypeF 服务器地址

### 方式二：BoxJS 配置（高级）

1. 确保已安装 [BoxJS](https://boxjs.com)
2. 在 BoxJS 中添加订阅：
   ```
   https://raw.githubusercontent.com/liuhaoultra/lyricsflow-surge/main/boxjs.json
   ```
3. 前往 BoxJS → 应用 → LyricsFlow 进行配置

---

## ⚙️ 配置说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `TYPEF_URL` | string | `http://127.0.0.1:8000` | TypeF 后端服务地址 |
| `ENABLE_ENRICH` | boolean | `false` | 是否启用 AI 翻译增强 |
| `ENRICH_URL` | string | - | AI 服务 API 地址（OpenAI 兼容格式） |
| `ENRICH_KEY` | string | - | AI 服务 API Key |
| `LogLevel` | enum | `WARN` | 日志等级：OFF/ERROR/WARN/INFO/DEBUG |

### 配置示例

**Surge 模块参数：**
```
TYPEF_URL=http://your-server.com:8000&ENABLE_ENRICH=false&LogLevel=WARN
```

---

## 🔧 API 要求

本模块需要配合 **LyricsFlow-TypeF** 后端服务使用：

- **仓库地址**：[LyricsFlow-TypeF](https://github.com/liuhaoultra/lyricsflow-typef)
- **API 端点**：`POST /v1/match`
- **请求格式**：
  ```json
  {
    "title": "歌曲名",
    "artist": "歌手名",
    "album": "专辑名",
    "duration_ms": 180000
  }
  ```

详细部署说明请参阅 TypeF 项目文档。

---

## 🏗️ 项目结构

```
LyricsFlow-Surge/
├── LyricsFlow.sgmodule    # Surge 模块定义
├── boxjs.json             # BoxJS 应用配置
├── boxjs.settings.json    # BoxJS 设置项定义
├── scripts/
│   ├── lyrics.js          # 主脚本 - 歌词拦截与转换
│   ├── lyrics_request.js  # 请求阶段处理脚本
│   └── config.js          # 配置读取辅助
├── LICENSE                # Apache 2.0 许可证
└── README.md              # 本文件
```

---

## 🤝 致谢

本项目的开发参考并受启发于以下优秀项目：

- [**🍿️ DualSubs: Spotify**](https://github.com/DualSubs/Spotify) - [@VirgilClyne](https://github.com/VirgilClyne)  
  参考了其 Spotify 歌词拦截的实现思路、Protobuf 处理模式以及 BoxJS 配置结构

---

## 📄 许可证

本项目基于 [Apache License 2.0](LICENSE) 开源。

---

## 🐛 问题反馈

如遇到问题，请在 [Issues](https://github.com/liuhaoultra/lyricsflow-surge/issues) 中提交，并提供：

1. Surge 版本
2. iOS/macOS 版本
3. 日志输出（设置 LogLevel 为 DEBUG）
4. 问题重现步骤