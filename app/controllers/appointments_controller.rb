class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments, status: :ok    
    end
    
    def show
        appointment = find_appointment
        render json: appointment, status: :ok
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :okcreated
    end

    def update
        appointment = find_appointment
        appointment = Appointment.update!(appointment_params)
        render json: appointment, status: :ok

    end

    def destroy
        appointment = find_appointment
        appointment.destroy
        head :no_content
    end

    private

    def find_appointment
        Appointment.find(params[:id])
    end

    def appointment_params
        params.permit(:style, :time, :date, :location, :img_url, :description, :user_id, :client_id)
    end
end
