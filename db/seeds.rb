# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


Character.create([
{ name: 'Char 1', x: 857, y: 989 },
{ name: 'Char 2', x: 740, y: 675  },
{ name: 'Char 3', x: 2243, y: 613 } ])
