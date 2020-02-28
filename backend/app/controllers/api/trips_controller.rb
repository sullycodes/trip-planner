class Api::TripsController < ApplicationController

    def index
        @trips = Trip.all 
        render json: @trips
    end

    def create
        @trip = Trip.new(trip_params)
        if @trip.save
            render json: @trip
        else
            render json: {error: "Error saving this trip"}
        end
    end

    def show
        @trip = Trip.find_by(id: params[:id])
        render json: @trip
    end

    def update
        @trip = Trip.find_by(id: params[:id])
        @trip.update(trip_params)
        @trip.save
        render json: @trip
    end

    def destroy
        @trip = Trip.find_by(id: params[:id])
        @trip.sites.each do |s|
            s.destroy
        end
        @trip.destroy
        render json: @trip.id
    end

    private

    def trip_params
        params.require(:trip).permit(:name, :date, :length)
    end
    
end
