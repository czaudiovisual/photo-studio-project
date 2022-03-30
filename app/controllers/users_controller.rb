class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users, status: :ok    
    end

    def show
      render json: @current_user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    private 

    def user_params
        params.permit(:name, :photo_style, :username, :password, :password_confirmation)
    end
end
