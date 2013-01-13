#coding: utf-8

class PuzzlelistController < ApplicationController

	def f_puzzle
		@msg = "hey!"
		@filenames = PuzzleList.all
		
		#URLで指定されたパラメータを取得
		@id = 1
		if params[:id] != nil
			#数字以外の文字列のときはidはゼロとなる
			@id = params[:id].to_i
		end

		#現在表示するデータを取得
		@showfile = PuzzleList.find(@id)

		#prev確認時に表示すべきデータのパラメータ取得
		if @id == 0
			@prevfile = PuzzleList.find(PuzzleList.count - 1)
		else
			@prevfile = PuzzleList.find(@id - 1)
		end

		#next確認時に表示すべきデータのパラメータ取得
		if (@id + 1) == PuzzleList.count
			@nextfile = PuzzleList.find(0)
		else 
			@nextfile = PuzzleList.find(@id + 1)
		end

	end

end



