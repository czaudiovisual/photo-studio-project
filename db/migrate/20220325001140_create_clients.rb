class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :number
      t.string :img_url
      t.string :email
      t.integer :appointment_id
      t.timestamps
    end
  end
end
