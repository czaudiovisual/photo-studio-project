class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo_style, :username, :password_digest
end
