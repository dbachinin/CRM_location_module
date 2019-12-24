class Location < ApplicationRecord
    belongs_to :merchant, polymorphic: true, optional: true
    belongs_to :partner, polymorphic: true, optional: true
    validates :city, presence: true
    validates :coords, presence: true
end
