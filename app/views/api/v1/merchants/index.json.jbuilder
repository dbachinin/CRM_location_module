# frozen_string_literal: true
json.array!(@merchants) do |merchant|
  json.id(merchant.id)
  json.name(merchant.name)
  json.location_count(merchant.location_ids.count)
end