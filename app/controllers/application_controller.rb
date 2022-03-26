class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  private

def authorize
  @current_user = User.find(session[:user_id])
  render json: {errors: "Not authorized"} unless @current_user
end

# def current_user
#   @current_user = User.find(session[:user_id])
# end

end
