class Partner < ApplicationRecord
    has_many :locations, as: :located_clients
    validates :name, presence: true
end
