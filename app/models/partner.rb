class Partner < ApplicationRecord
  has_many :locations, as: :located_clients
  has_and_belongs_to_many :merchants
  validates :name, presence: true
end
