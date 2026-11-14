# 耳コピプレーヤー

区間（A–B）を決めて繰り返し再生できる、耳コピ用のプレーヤーです。

- **ファイル版**（index.html）：端末内の mp3 / m4a / wav を開く。波形表示あり。オフラインでも使える。
- **YouTube版**（youtube.html）：YouTube の URL を貼って使う。区間と速度は動画ごとにこの端末に記憶される。

## 公開URL

https://litalita0.github.io/（リポジトリ名）/

（Settings → Pages の上部に表示されるURL）

---

## 手順メモ

### ファイルを更新するとき（いちばんよく使う）
1. このリポジトリのトップで **Add file → Upload files**
2. 新しいファイルをドラッグ＆ドロップ（同じ名前なら上書きされる）
3. 下の緑の **Commit changes** を押す
4. 1〜2分で公開ページに反映される
   - ホーム画面のアプリは古い版で一度起動し、**2回目の起動から新しい版**になる

### 新しくリポジトリを作って公開するとき
1. GitHub 右上の **＋ → New repository** で作成（Public）
2. 上の「ファイルを更新するとき」と同じ方法でファイルを置く
3. **Settings → Pages** を開く
4. Source：**Deploy from a branch**、Branch：**main**、フォルダ：**/(root)** → **Save**
5. 1〜2分待って再読み込みすると「Your site is live at …」にURLが出る

### スマホ・iPadのホーム画面に置く
- iPhone / iPad（Safari）：URLを開く → 共有ボタン → **ホーム画面に追加**
- Android（Chrome）：URLを開く → ︙メニュー → **ホーム画面に追加**（または「アプリをインストール」）

### 置いてあるファイル
| ファイル | 役割 |
|---|---|
| index.html | ファイル版プレーヤー |
| youtube.html | YouTube版プレーヤー |
| manifest.json | ホーム画面に置いたときの名前・アイコンの設定 |
| sw.js | オフラインでも起動できるようにする仕組み |
| icon-180/192/512.png | アイコン |

※ sw.js の中の `mimicopi-v2` の数字は、ファイルを追加・削除したときに1つ上げる。

---

## Google Apps Script で公開するとき（別の方法）
1. script.google.com → **新しいプロジェクト**
2. `コード.gs` を Code.gs の内容に置き換え
3. 左の **＋ → HTML** で `index` という名前のファイルを作り、GAS用 index.html の内容に置き換え
4. **デプロイ → 新しいデプロイ → ウェブアプリ**
   - 次のユーザーとして実行：自分 ／ アクセスできるユーザー：自分のみ
5. 出てきた `…/exec` のURLを開く
