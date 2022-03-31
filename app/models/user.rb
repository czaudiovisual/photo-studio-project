class User < ApplicationRecord
    has_secure_password

    has_many :clients
    has_many :appointments, through: :clients

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
end
