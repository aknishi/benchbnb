class AddRatingColumnToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :rating, :integer
  end
end
