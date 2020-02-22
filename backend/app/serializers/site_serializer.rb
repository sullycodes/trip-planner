class SiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :image_url, :trip_id
end
