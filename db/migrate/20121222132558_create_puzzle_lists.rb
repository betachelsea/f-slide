class CreatePuzzleLists < ActiveRecord::Migration
  def change
    create_table :puzzle_lists do |t|
			t.string :filename
			t.integer :id
			t.string :doc
			t.string :title
      t.timestamps
    end
  end
end
