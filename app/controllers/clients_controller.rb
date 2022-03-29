class ClientsController < ApplicationController
    def index
        clients = Client.all
        render json: clients, status: :ok    
    end

    def show
        client = find_client
        render json: client, status: :ok
    end

    def create
        client = Client.create!(client_params)
        render json: client, status: :created
    end

    def update
        client = find_client
        client = Client.update!(client_params)
        render json: client, status: :ok

    end

    def destroy
        client = find_client
        client.destroy
        head :no_content
    end

    private

    def find_client
        Client.find(params[:id])
    end

    def client_params
        params.permit(:client_name, :number, :img_url, :email, :appointment_id)
    end
end
