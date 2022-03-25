class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :style, :time, :date, :location, :img_url, :description, :user_id, :client_id
end
