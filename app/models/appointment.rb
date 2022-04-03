class Appointment < ApplicationRecord
    
    belongs_to :user
    belongs_to :client
    validates_presence_of :img_url, :style, :time, :date, :location, :description
end
