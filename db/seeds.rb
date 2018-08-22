# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create!(
  description: "Metal Curved Benches",
  lat: 37.7738967,
  lng: -122.3955446
)

Bench.create!(
  description: "More Curved Benches with wood",
  lat: 37.773162,
  lng: -122.400041
)

Bench.create!(
  description: "Wood park benches",
  lat: 37.7739241,
  lng: -122.392857
)
