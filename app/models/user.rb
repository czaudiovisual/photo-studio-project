class User < ApplicationRecord
    
    has_many :clients
    has_many :appointments, through: :clients
    
    validates_presence_of :name, :photo_style
    validates :username, presence: true, uniqueness: true

    has_secure_password
end
