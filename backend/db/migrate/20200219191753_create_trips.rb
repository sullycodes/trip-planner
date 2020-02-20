class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :date
      t.string :length
      t.timestamps
    end
  end
end
