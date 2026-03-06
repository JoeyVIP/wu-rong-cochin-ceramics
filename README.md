# 吳榮交趾陶品牌官網

**從天到地的藝術對話** — 葉王派系傳承 · 黃金寶石釉的極致淬鍊

## 專案概述

這是吳榮交趾陶大師的官方品牌網站，對標國際頂級工藝品牌（如 Meissen），將台灣「葉王派系」交趾陶從傳統廟宇飾件提升至國際奢侈品藝術收藏等級。

### 品牌願景
將交趾陶從「神明看的工作」轉化為「當代收藏家的藝術珍品」，實現「從天到地」的藝術轉型。

## 技術架構

- **前端技術**: 純 HTML5 + CSS3 + Vanilla JavaScript
- **設計風格**: Exaggerated Minimalism（誇張極簡主義）
- **品牌配色**:
  - 黃金胭脂紅 (Wu's Carmine): `#B8315A`
  - 冰晶折射藍 (Ice-Crackle Blue): `#B8E0F6`
- **字體**: Poiret One (顯示) + Didact Gothic (內文) + Noto Serif TC (中文)
- **部署平台**: Render (Static Site)

## 網站結構

```
/
├── index.html              # 首頁（沉浸式主視覺）
├── master.html             # 關於大師（品牌故事 + 四大支柱）
├── collection.html         # 作品典藏（策展式分類）
├── masterpiece.html        # 《出嫁》專屬解構頁
├── inquiry.html            # 收藏諮詢
├── css/
│   ├── styles.css          # 全域樣式
│   ├── master.css          # 大師頁面
│   ├── collection.css      # 作品典藏頁面
│   ├── masterpiece.css     # 《出嫁》頁面
│   └── inquiry.css         # 諮詢頁面
├── js/
│   ├── main.js             # 全域腳本
│   ├── collection.js       # 作品分類過濾
│   └── inquiry.js          # 表單與 FAQ
├── assets/                 # 圖片素材（待補充）
├── cms-schema.json         # CMS 欄位結構定義
├── cms-data.json           # 當前網站內容資料
├── package.json            # 依賴管理
├── rebuild.js              # Mustache 模板重建腳本
└── render.yaml             # Render 部署配置
```

## 核心特色

### 1. 四大技術支柱
1. **奈米黏土的物理極限** — 突破傳統陶瓷尺寸限制
2. **黃金淬鍊的胭脂釉色** — Wu's Carmine 發色自純金
3. **挑戰重力的動感美學** — 最小支撐點的力學平衡
4. **跨文化的東方身形** — 西方比例 + 東方神韻

### 2. 策展式作品分類
- **傳承經典** (Heritage): 向葉王致敬
- **當代意象** (Contemporary): 2020 法國馬賽巡展系列
- **生命體悟** (Philosophy): 雲童系列 · 季節輪迴
- **大型裝置** (Installation): 突破尺寸的空間張力

### 3. 沉浸式視覺體驗
- Hero Section 微動態背景
- 冰裂紋細節縮放互動
- 卡片 3D 傾斜效果
- Intersection Observer 淡入動畫

## CMS 系統

網站整合了內容管理系統（CMS），支援動態編輯所有可見內容：

### CMS 檔案
- `cms-schema.json`: 定義所有可編輯欄位的結構
- `cms-data.json`: 儲存當前網站內容
- `rebuild.js`: 將 CMS 資料注入 Mustache 模板並重建 HTML

### 使用方式
```bash
# 安裝依賴
npm install

# 修改 cms-data.json 後重建網站
npm run rebuild
```

### CMS 涵蓋範圍
- 品牌資訊（名稱、聯絡方式）
- 首頁主視覺（標題、副標題、榮譽標章）
- 藝術哲學（四大支柱）
- 大師故事（品牌敘事）
- 技術支柱（詳細版）
- 藝術歷程時間軸
- 榮譽與獎項
- 所有作品典藏（4 個分類）
- 《出嫁》專屬內容
- 收藏諮詢服務項目
- 頁尾資訊

## 部署

### Render 部署 (推薦)

1. 推送到 GitHub
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/JoeyVIP/wu-rong-cochin-ceramics.git
git push -u origin main
```

2. 使用 Render API 建立 Static Site
```bash
curl -X POST 'https://api.render.com/v1/services' \
  -H "Authorization: Bearer $RENDER_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "static_site",
    "name": "wu-rong-cochin-ceramics",
    "ownerId": "tea-d60dhri4d50c73ckulmg",
    "repo": "https://github.com/JoeyVIP/wu-rong-cochin-ceramics",
    "branch": "main",
    "autoDeploy": "yes",
    "serviceDetails": {
      "buildCommand": "echo Build complete",
      "publishPath": "."
    }
  }'
```

3. 網站將部署至: `https://wu-rong-cochin-ceramics.onrender.com`

## SEO 關鍵字

- 吳榮
- 交趾陶
- 葉王派系
- 台灣工藝
- 國家民族工藝獎
- 黃金寶石釉
- Wu's Carmine
- 當代陶瓷藝術收藏
- 林添木
- 冰裂紋工藝

## 設計原則

### 品牌語氣
✅ **使用**: 藝術典藏、收藏諮詢、精藝再現
❌ **禁止**: 特價、趕快購買、促銷

### 視覺語言
- **高比例留白** (60%+): 營造美術館般的靜謐感
- **無襯線標題** + **襯線內文**: 優雅與現代的平衡
- **大膽配色**: 黃金胭脂紅為主視覺，冰晶藍為點綴
- **細膩動畫**: 專注於高影響力時刻（hover、scroll）

### 響應式設計
- Mobile-First 開發
- 斷點: 768px (平板), 1024px (桌面)
- 手機版漢堡選單
- 圖片自適應寬度
- 最小觸控區域 44x44px

## 效能優化

- 無第三方框架，純 Vanilla JS
- CSS 變數管理設計系統
- 圖片延遲載入 (未來可加入)
- 簡化動畫（支援 prefers-reduced-motion）

## 開發指南

### 本地開發
直接開啟 `index.html` 即可在瀏覽器中預覽（不需要伺服器）。

### 修改內容
1. 編輯 `cms-data.json` 修改網站內容
2. 執行 `npm run rebuild` 重建 HTML（如使用 Mustache 模板）
3. 或直接修改 HTML 檔案（靜態網站）

### 新增作品
在 `cms-data.json` 的對應分類中新增作品物件：
```json
{
  "name": "作品名稱",
  "description": "作品說明",
  "size": "尺寸",
  "technique": "技法",
  "year": "年代"
}
```

## 版權聲明

© 2026 吳榮交趾陶 Wu Rong Cochin Ceramics. All rights reserved.

---

**技術支援**: 本網站由 Claude AI Agent 開發，遵循最佳實踐與無障礙標準。
