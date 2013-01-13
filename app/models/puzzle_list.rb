class PuzzleList < ActiveRecord::Base
  # attr_accessible :title, :body
	attr_accessible :id, :org_id, :filename, :doc, :title
end
