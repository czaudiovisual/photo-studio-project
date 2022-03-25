class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok    
    end

    def show
        users = User.find(params[:id])
        render json: users, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private 

    def user_params
        params.permit(:name, :photo_style, :username, :password_digest)
    end
end
