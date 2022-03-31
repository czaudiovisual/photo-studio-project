class Client < ApplicationRecord
    include Rails.application.routes.url_helpers
    belongs_to :user
    has_one_attached :avatar
    has_many :appointments, dependent: :destroy

    def image_url
    url_for(self.avatar)
    end
end
