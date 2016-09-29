class PagesController < ApplicationController
  before_action :authenticate_user!
  
  def edit
    # @page = Page.where(:name => params[:page_name]).first
    @page = Page.find(params[:id])
  end
  
  def update
    @page = Page.find(params[:id])
    
    if @page.update_attributes(page_params)
      render json: @page
    else
      render json: "unable to update pages"
    end
  end
  
  private
  
  def page_params
    params.require(:page).permit(:name, 
                                  sections_attributes: [:id,
                                                        :heading, 
                                                        :page_id,
                                                        paragraphs_attributes: [:id, :body, :section_id], 
                                                        lists_attributes: [:id, :list_name, :section_id, :page_order, 
                                                                          list_items_attributes: [:id, 
                                                                                                  :list_item_content,
                                                                                                  :list_id]
                                                                          ]
                                                        ]
                                )
  end
  
end
