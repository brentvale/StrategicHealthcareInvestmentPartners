class Api::ParagraphsController < ApplicationController
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
    @paragraph = Paragraph.find(params[:id])
    if @paragraph.update_attributes(paragraph_params)
      render json: @paragraph
    else
      render json: {message: "something went wrong"}
    end
  end
  
  private 
  
  private 
  
  def paragraph_params
    params.require(:paragraph).permit(:body)
  end
end
