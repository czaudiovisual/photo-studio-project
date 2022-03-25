class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

def authorize
  render json: {errors: "Not authorized"} unless @current_user
end

# def current_user
#   @current_user = User.find(session[:user_id])
# end

end
