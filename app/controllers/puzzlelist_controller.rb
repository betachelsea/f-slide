class PuzzlelistController < ApplicationController

	def f_puzzle
		@filenames = PuzzleList.all
	end

end
