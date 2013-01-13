# coding: utf-8

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
	PuzzleList.create(:id => '0', :org_id => '3794', :filename => '00003794L.jpg', :doc => 'コシヒカリは昭和31年に福井県農業試験場において、多大な努力と十有余年の歳月を費やして育成されたもので、9月上旬に収穫されるお米です。福井県生まれのコシヒカリは本県ではもとより、全国で最もたくさん栽培されており、おいしいお米の代名詞となっています。', :title =>'コシヒカリ')
	PuzzleList.create(:id => '1', :org_id => '671', :filename => '00000671L.jpg', :doc => '樹木の生い茂る足羽川渓谷にかかる橋で、全長44ｍ・幅1.8ｍ・高さ12ｍのシラクチカズラでできた本格的な木のつり橋です。橋の中央から渓流を見下ろすと思わず足がすくんでしまいそうです。', :title =>'かずら橋')
	PuzzleList.create(:id => '2', :org_id => '4072', :filename => '00004072L.jpg', :doc => '武生といえば「菊人形」。会場には大菊、小菊、懸崖など10,000鉢の菊花が咲き誇ります。時代絵巻を繰り広げる菊人形館ではつややかな菊人形が見事です。大劇場でのレビューや野外ステージでのショー、メリーゴーラウンドやバイキングなどがあるプレイランドなど、大人も子どもも楽しめる大イベントです。', :title => 'たけふ菊人形')
	PuzzleList.create(:id => '3', :org_id => '3387', :filename => '00003387L.jpg', :doc => '絵本画家いわさきちひろは、この家で生まれた。当時を伝える板壁や箱階段等大正時代を復元するため、改修し町屋風の記念館として再現した。金･土･日･祝開館。10:00～16:00、入館料100円。', :title => '「ちひろの生まれた家」記念館')


# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
