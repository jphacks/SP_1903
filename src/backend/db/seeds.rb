# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!([
  { name: 'マツダ' },
  { name: 'セキネ' },
  { name: 'サトウ' },
  { name: 'アイカワ' },
])

Paper.create!([
  { name: 'アイデア' },
  { name: 'ユーザストーリー' },
  { name: '課題/要件' },
  { name: '機能' },
])

Postit.create!([
  { user_id: 1, paper_id: 1, text: 'シェアポス' },
  { user_id: 3, paper_id: 3, text: 'ブレスト完了後はポスト・イットと模造紙はゴミになる' },
  { user_id: 2, paper_id: 3, text: 'ブレインストーミングはアイデア出しによく用いられる手法' },
  { user_id: 4, paper_id: 3, text: 'ポスト・イットを片手に模造紙を囲むのは面倒' },
  { user_id: 4, paper_id: 3, text: '模造紙を広げる都合上，PCを避ける羽目になるがちなので，PCで調べ物をしながらのブレストも難しい' },
  { user_id: 3, paper_id: 3, text: 'ポスト・イットと模造紙を用いる場合，物理的に一箇所に集まらなければならない' },
  { user_id: 2, paper_id: 1, text: '複数人で共同作業が可能なブレインストーミング用WEBアプリケーション' },
  { user_id: 2, paper_id: 1, text: 'DCGのように本来紙ベースで行うブレストをWEBブラウザ上の1画面で行えるようにしたもの' },
  { user_id: 4, paper_id: 1, text: 'ゴミの問題，PCで調べものがしにくい問題，一箇所に集まらなければならない問題を解決' },
  { user_id: 4, paper_id: 3, text: 'React, Rails' },
  { user_id: 4, paper_id: 2, text: '遠隔地同士のブレインストーミング' },
  { user_id: 4, paper_id: 2, text: 'ハッカソンでのアイデア出し' },
])
