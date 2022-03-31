class ClientSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  attributes :id, :client_name, :number, :img_url, :email, :user_id
  # :featured_image
  has_many :appointments, serializer: AppointmentSerializer
  belongs_to :user, serializer: UserSerializer

  # def featured_image
  #   if object.featured_image.attached?
  #     {
  #       url: rails_blob_url(object.featured_image)
  #     }
  #   end
  # end
end
