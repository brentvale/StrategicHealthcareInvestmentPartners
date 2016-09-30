class PagesController < ApplicationController
  before_action :authenticate_user!
  
  def edit
    @page = Page.find(params[:id])
  end
  
  def update
    @page = Page.find(params[:id])
    
    if @page.update_attributes(page_params)
      if @page.name == "home"
        redirect_to root_path
      elsif @page.name == "about"
        redirect_to about_path
      elsif @page.name == "team"
        redirect_to team_path
      end
    else
      render json: "unable to update pages"
    end
  end
  
  private
  
  def page_params
    params.require(:page).permit(:name, 
                                  sections_attributes: [:_destroy,
                                                        :id,
                                                        :heading, 
                                                        :page_id,
                                                        paragraphs_attributes: [:_destroy,:id, :body, :section_id], 
                                                        lists_attributes: [:_destroy,:id, :list_name, :section_id, :page_order, 
                                                                          list_items_attributes: [:_destroy,
                                                                                                  :id, 
                                                                                                  :list_item_content,
                                                                                                  :list_id]
                                                                          ]
                                                        ]
                                )
  end
  
end
