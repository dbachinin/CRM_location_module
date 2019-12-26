json.extract! partner, :id, :created_at, :updated_at
json.locations partner.locations.map{ |l| [l.coords, [m.percent_cover(l, 0.1), m.locations.map(&:coords) ]]}.to_h

