# シェアポス

[![Product Name](image.png)](https://www.youtube.com/watch?v=G5rULR53uMk)

## 製品概要
### X Tech
グループワーク * Tech

### 背景
ブレインストーミングはアイデア出しによく用いられる手法である．
しかし，ポスト・イットを片手に模造紙を囲むのは面倒である．
ブレスト完了後は，ポスト・イットと模造紙はゴミになるし，模造紙を広げるスペースも必要になる．
模造紙を広げる都合上，PCを避ける羽目になるがちなので，PCで調べ物をしながらのブレストも難しい．
なにより，ポスト・イットと模造紙を用いる場合，物理的に一箇所に集まらなければならない．

P.S. チームメンバーが事故により会場入りできなくなってしまったので，現地にいなくてもハッカソンに参加できるように直接会って行う必要があるブレインストーミングをオンラインでできるアプリを作ろうと考えた．

### 製品説明
ブレインストーミングで行うポスト・イットの書き出しとプロットを行えるWEBアプリケーションである．
トランプゲームのアプリケーションのように，本来紙ベースで行うポスト・イットの書き出しとプロットをWEBブラウザ上の1画面で行えるようにした．

画面は，模造紙に対応した画面中央に表示されるコンポーネント(以下，模造紙コンポーネント)と，手元のポスト・イットに対応した画面下部に表示されるテキストエリアを持つコンポーネント(以下，ポスト・イットコンポーネント)から構成される．
模造紙コンポーネントは，コンポーネント内にキーワードごとのポスト・イットをまとめるコンポーネント(以下，グループコンポーネント)を持つ．
グループコンポーネントは，コンポーネント内にプロットされたポスト・イットを表示するコンポーネント(プロットポスト・イットコンポーネント)を複数持つ．

使い方は以下のとおりである．

1. ポスト・イットコンポーネントが持つテキストエリアに対して，ポスト・イットに書き込みたい内容と，プロットしたいグループコンポーネントのIDを入力する．
2. 入力が完了したら，ポスト・イットコンポーネントの左下に表示されるsend(送信)ボタンをおす．
3. 送信した内容が，模造紙コンポーネントが持つ対応したグループコンポーネントにプロットポスト・イットコンポーネントとして表示される．

### 特長
WEBアプリケーションでブレインストーミングで行うポスト・イットの書き出しとプロットを行える

### 解決できること
- ポスト・イットの書き出しとプロットについて，紙，スペース，ポストイットを確保する必要が無くなる．
- 過去のポスト・イットへのアクセスが容易になる．

### 今後の展望
本来のコンセプトである，複数人での共同作業に関する機能を実装したい．
現状では，複数PC同士の通信ができないので，ブレインストーミングを行うことができないからである．

また，これだけでは，既存のサービスとの差別化が困難である．
そのため，以下のような機能を追加して差別化を図りたいと考えている．

- Google DocsやDropbox Paperのような入力テキストの同期
- 自然言語処理によるテキスト処理によって関連がありそうなポスト・イットコンポーネントをサジェスト

## 開発内容・開発技術
### 活用した技術
#### API・データ
なし

#### フレームワーク・ライブラリ・モジュール
- React
- Ruby on Rails

#### デバイス
なし

### 研究内容・事前開発プロダクト（任意）
なし

### 独自開発技術（Hack Dayで開発したもの）
#### 2日間に開発した独自の機能・技術
なし
