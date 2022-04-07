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
        client.update!(client_params)
        render json: client, status: :ok

    end

    def destroy
        client = find_client
        client.destroy
        head :no_content
    end

    def order_name
        clients = Client.all.order(client_name: :asc)
        render json: clients, status: :ok
    end

    def appointments_count
        client = client.find_client.appointments.count
        render json: client, status: :ok
    end

    private

    def find_client
        Client.find(params[:id])
    end

    def client_params
        params.require(:client).permit(:client_name, :number, :img_url, :email, :user_id)
    end
end
