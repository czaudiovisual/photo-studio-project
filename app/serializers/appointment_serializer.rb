class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :style, :time, :date, :location, :img_url, :description, :user_id, :client_id
  belongs_to :user, serializer: UserSerializer
  belongs_to :client, serializer: ClientSerializer
end
