# frozen_string_literal: true

class Location < ApplicationRecord
  belongs_to :merchant, polymorphic: true, optional: true
  belongs_to :partner, polymorphic: true, optional: true
  validates :city, presence: true
  validates :coords, presence: true

  scope :by_city, ->(city){ where(city: city) }
end
