class RemoveRatingFromBenches < ActiveRecord::Migration[5.2]
  def change
    remove_column :benches, :rating
  end
end
