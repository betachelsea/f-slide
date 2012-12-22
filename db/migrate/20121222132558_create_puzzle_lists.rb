class CreatePuzzleLists < ActiveRecord::Migration
  def change
    create_table :puzzle_lists do |t|
			t.string :filename
			t.integer :id 
      t.timestamps
    end
  end
end
