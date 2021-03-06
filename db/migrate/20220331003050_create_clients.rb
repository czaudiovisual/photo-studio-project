class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :client_name
      t.string :number
      t.string :img_url
      t.string :email
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end