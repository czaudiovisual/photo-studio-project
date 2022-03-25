class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :number, :img_url, :email, :appointment_id
  has_many :appointments, serializer: AppointmentSerializer
end
