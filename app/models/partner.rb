class Partner < ApplicationRecord
  has_many :locations, as: :located_clients
  has_and_belongs_to_many :merchants
  validates :name, presence: true

  def average_location
    x,y=[0.0,0.0]
    avg = ->(i){
      {
        lat: (i[0] / 2).round(7),#11.1111112
        lng: (i[1] / 2).round(7) #11.1111112
      }
      }[
        locations.pluck(:coords).map{|i|
          i.split(',').map(&:to_f)}.map{ |xi, yi| [x += xi, y += yi] }.last
        ] # [22.22222280000,22.222222400000]
    avg
  end
end
