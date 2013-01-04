#coding: utf-8

class PuzzlelistController < ApplicationController

	def f_puzzle
		@msg = "hey!"
		@filenames = PuzzleList.all
		@prevfile = PuzzleList.find(0)
		if params[:id] != nil
			@showfile = PuzzleList.find(params[:id])
		else
			@showfile = PuzzleList.find(0)
		end
		@nextfile = PuzzleList.find(2)
		@id = params[:id]
	end

end
