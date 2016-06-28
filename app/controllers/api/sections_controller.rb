class Api::SectionsController < ApplicationController
  before_action :authenticate_user!, only: [:update]
  def index
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
    @section = Section.find(params[:id])
    if @section.update_attributes(section_params)
      render json: {section: @section}
    else
      render json: {message: "something went wrong"}
    end
  end

  def destroy
  end
  
  private 
  
  def section_params
    params.require(:section).permit(:heading)
  end

end
