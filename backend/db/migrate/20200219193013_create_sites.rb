class CreateSites < ActiveRecord::Migration[6.0]
  def change
    create_table :sites do |t|
      t.string :name
      t.string :location
      t.string :description
      t.string :image_url
      t.string :trip_id
      t.timestamps
    end
  end
end
