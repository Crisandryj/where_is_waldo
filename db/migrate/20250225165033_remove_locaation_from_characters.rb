class RemoveLocaationFromCharacters < ActiveRecord::Migration[7.2]
  def change
    remove_column :characters, :location, :float
  end
end
