class Client < ApplicationRecord
    belongs_to :user
    has_many :appointments, dependent: :destroy
    validates_presence_of :client_name, :number, :img_url, :email 
end
