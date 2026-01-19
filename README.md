# npm 学習メモ

## 基本コマンド

| コマンド | 説明 |
|---------|------|
| `npm init` | プロジェクト初期化（package.json作成） |
| `npm install <pkg>` | パッケージをインストール |
| `npm install -D <pkg>` | 開発用パッケージをインストール |
| `npm install -g <pkg>` | グローバルインストール |
| `npm install` | package.jsonの依存関係をすべてインストール |
| `npm run <script>` | スクリプト実行 |

## dependencies vs devDependencies

| オプション | 記録先 | 用途 |
|-----------|--------|------|
| なし | dependencies | 本番で必要（express, kuromojiなど） |
| -D | devDependencies | 開発時のみ（jest, eslintなど） |

`npm install --production` で本番デプロイ時は devDependencies を除外できる。

## 主要ファイル

| ファイル | 役割 |
|---------|------|
| `package.json` | 依存関係・スクリプトの定義 |
| `package-lock.json` | 正確なバージョンを固定（Gitにコミットする） |
| `node_modules/` | インストールされたパッケージ（Gitに含めない） |

## 使用したパッケージ

### lodash
便利なユーティリティ関数集。ただし最近はJavaScript標準機能で代替できるものも多い。

### natural
英語の自然言語処理ライブラリ。トークン化、ステミング、感情分析、テキスト分類など。

### kuromoji
日本語形態素解析ライブラリ。MeCabのIPA辞書をJavaScript用に変換したもの。

## デモファイル

- `index.js` - lodashのサンプル
- `natural-demo.js` - naturalのサンプル
- `kuromoji-demo.js` - kuromojiのサンプル
