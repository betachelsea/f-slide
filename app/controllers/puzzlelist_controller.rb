class PuzzlelistController < ApplicationController

	def f_puzzle
		@msg = "hey!"
		@filenames = PuzzleList.all
	end

end
