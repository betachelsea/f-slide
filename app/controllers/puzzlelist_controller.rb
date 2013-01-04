#coding: utf-8

class PuzzlelistController < ApplicationController

	def f_puzzle
		@msg = "hey!"
		@filenames = PuzzleList.all
		@prevfile = PuzzleList.find(0)
		@showfile = PuzzleList.find(params[:id])
		@nextfile = PuzzleList.find(2)
		@id = params[:id]
	end

end
