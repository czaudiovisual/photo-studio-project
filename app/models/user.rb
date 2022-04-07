class User < ApplicationRecord
    
   
    # has_many :appointments, through: :clients
    # has_many :clients
    
    has_many :clients
    has_many :appointments
    has_many :appointments_booked, through: :appointments, source: :client
 
    has_secure_password
    
    validates_presence_of :name, :photo_style
    validates :username, presence: true, uniqueness: {case_sensitive: false}

end
