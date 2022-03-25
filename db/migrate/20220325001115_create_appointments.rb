class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :style
      t.string :time
      t.string :date
      t.string :location
      t.string :img_url
      t.string :description
      t.integer :user_id
      t.integer :client_id
      t.timestamps
    end
  end
end
