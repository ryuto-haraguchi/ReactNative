# プロジェクト概要
- 目的: Expo/React Native で動作する簡単なゴール入力アプリ。入力フォームで目標文字列を追加し、リスト表示する。
- 技術スタック: React 19 + React Native 0.81 (新アーキ有効)、Expo SDK 54。言語は JavaScript（TypeScript 未導入）。
- エントリポイント: `index.js` で `registerRootComponent(App)` を実行し、`App.js` の関数コンポーネントを起動。
- UI 構成: `App.js` 内で `useState` を使ったフォームとゴール一覧のみ。`StyleSheet` で画面内スタイルを定義。
- 設定ファイル: `app.json` に Expo 設定（アイコン・スプラッシュ・新アーキ有効化など）。`assets/` にアイコン各種。
- ディレクトリ構造（ルート直下）: `App.js`, `index.js`, `app.json`, `package.json`, `package-lock.json`, `assets/`, `.vscode/`, `.serena/`。