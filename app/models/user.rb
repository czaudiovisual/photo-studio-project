class User < ApplicationRecord
    
    has_secure_password
    
    has_many :appointments
    has_many :clients, through: :appointments
    
    validates_presence_of :name, :photo_style
    validates :username, presence: true, uniqueness: true

end
