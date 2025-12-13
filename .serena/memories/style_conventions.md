# コードスタイル・慣例
- 関数コンポーネント + React Hooks (`useState`) を使用。クラスコンポーネントなし。
- スタイルは React Native の `StyleSheet.create` を用いたオブジェクト記法。カラーハードコード有。
- 状態変数は camelCase（例: `inputState`, `goalsState`）。
- 型注釈や PropTypes は未使用。Docstring も特に無し。
- ファイル構成は単一画面のみで、モジュール分割・ナビゲーション未導入。