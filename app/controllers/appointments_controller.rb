class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.order(updated_at: :desc)
        render json: appointments, status: :ok    
    end
    
    def show
        appointment = find_appointment
        render json: appointment, status: :ok
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end

    def update
        appointment = find_appointment
        appointment.update!(appointment_params)
        render json: appointment, status: :ok

    end

    def destroy
        appointment = find_appointment
        appointment.destroy
        head :no_content
    end

    def order_date
        appointments = Appointment.all.order(date: :asc)
        render json: appointments, status: :ok
    end

    private

    def find_appointment
        Appointment.find(params[:id])
    end

    def appointment_params
        params.require(:appointment).permit(:style, :time, :date, :location, :img_url, :description, :user_id, :client_id)
    end
end
