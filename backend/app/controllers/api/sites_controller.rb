class Api::SitesController < ApplicationController

    before_action :get_trip

    def get_trip
        @trip = Trip.find_by(id: params[:trip_id])   
    end

    def index
        @sites = Site.all
        render json: @sites
    end

    def create
        @site = Site.new(site_params)
        if @site.save
            render json: @site
        else
            render json: {error: "Error saving this site"}
        end
    end

    def show
        @site = Site.find_by(id: params[:id])
        render json: @site
    end

    def destroy
        @site = Site.find_by(id: params[:id])
        @site.delete
        render json: Site.all
    end

    private

    def site_params
        params.require(:site).permit(:name, :location, :description, :image_url, :trip_id)
    end

end
