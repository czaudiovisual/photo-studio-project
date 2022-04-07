class Client < ApplicationRecord

    # has_many :appointments
    # has_many :users, through: :appointments

    belongs_to :user
    has_many :appointments
    has_many :users, through: :appointments
    
    validates_presence_of :client_name, :number, :img_url, :email 
end
