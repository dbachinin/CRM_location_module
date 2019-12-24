class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :coords
      t.references :located_clients, polymorphic: true
      # t.references :merchant, index: true, foreign_key: true

      t.timestamps
    end
  end
end
