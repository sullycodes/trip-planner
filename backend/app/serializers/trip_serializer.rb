class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :length
  has_many :sites
end
