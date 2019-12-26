# frozen_string_literal: true
json.array!(@partners) do |partner|
  json.id(partner.id)
  json.name(partner.name)
  json.location_count(partner.location_ids.count)
end