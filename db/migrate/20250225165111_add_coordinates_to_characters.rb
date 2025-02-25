class AddCoordinatesToCharacters < ActiveRecord::Migration[7.2]
  def change
    add_column :characters, :x, :float
    add_column :characters, :y, :float
  end
end
