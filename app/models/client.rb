class Client < ApplicationRecord
    belongs_to :user
    # has_one_attached :featured_image
    has_many :appointments, dependent: :destroy
end
