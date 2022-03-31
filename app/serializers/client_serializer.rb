class ClientSerializer < ActiveModel::Serializer
  attributes :id, :client_name, :number, :img_url, :email, :user_id
  has_many :appointments, serializer: AppointmentSerializer
  belongs_to :user, serializer: UserSerializer
end
