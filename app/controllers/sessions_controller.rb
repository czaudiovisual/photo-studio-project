class SessionsController < ApplicationController
    
    skip_before_action :authorize, only: :create
    
    def create
        # byebug
        user = User.find_by_username(params[:username])
        if user
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
