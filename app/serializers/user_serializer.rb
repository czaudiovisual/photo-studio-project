class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo_style, :username, :password_digest
  has_many :appointments, serializer: AppointmentSerializer
  has_many :clients, serializer: ClientSerializer
end
