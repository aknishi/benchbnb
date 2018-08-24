class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng < ?", bounds[:northEast][:lng])
      .where("lng > ?", bounds[:southWest][:lng])
  end

  has_many :reviews

  def average_rating
    reviews.average(:rating)
  end

end
