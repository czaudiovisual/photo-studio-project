class Appointment < ApplicationRecord
    
    belongs_to :client
    belongs_to :user

    validates_presence_of :img_url, :style, :time, :date, :location, :description
end
