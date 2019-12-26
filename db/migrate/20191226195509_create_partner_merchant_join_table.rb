class CreatePartnerMerchantJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :partners, :merchants do |t|
      t.index :partner_id
      t.index :merchant_id
    end
  end
end
