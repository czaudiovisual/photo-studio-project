class ApplicationController < ActionController::API
include ActionController::Cookies
before_action :authorize

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_error

def render_unprocessable_entity_error(error)
  render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
end

def render_not_found_error(error)
  render json: {error: "record not found"}, status: :not_found
end

private

def authorize
  @current_user = User.find(session[:user_id])
  render json: {errors: "Not authorized"}, status: :unauthorized unless @current_user
end
end
