class Merchant < ApplicationRecord
  has_many :locations, as: :located_clients
  has_and_belongs_to_many :partners
  validates :name, presence: true

   def location_by_distance(p_location, distance)
    locations.find_each.select do |location|
      lat1 = location.coords.split(',').first.to_f
      lat2 = p_location.coords.split(',').first.to_f
      lon1 = location.coords.split(',').last.to_f
      lon2 = p_location.coords.split(',').last.to_f
      f1 = lat1 * Math::PI / 180
      f2 = lat2 * Math::PI / 180
      df = (lat2 - lat1) * Math::PI / 180
      dl = (lon2 - lon1) * Math::PI / 180
      a = Math.sin(df/2) * Math.sin(df/2) + Math.cos(f1) * Math.cos(f2) * Math.sin(dl/2) * Math.sin(dl/2)
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
      dst = 6_371_000.0 * c
      (dst / 1000) < distance
    end
  end

  def percent_cover(p_location, radius)
    in_radius = location_by_distance(p_location, radius).count
    (100 / (locations.by_city(p_location.city).count / in_radius.to_f)).round(2)
  end

end
