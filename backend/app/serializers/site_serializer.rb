class SiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :image_url
end
