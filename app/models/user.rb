class User < ApplicationRecord
    
    has_many :clients
    has_many :appointments, through: :clients
    
    validates :name, presence: true
    validates :photo_style, presence: true
    validates :username, presence: true, uniqueness: true
    
    has_secure_password
end
