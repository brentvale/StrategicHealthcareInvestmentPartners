class StaticPagesController < ApplicationController
  def home
    @page = Page.where(name: "home").first
    @sections = @page.sections.order(:page_order)
  end
  
  def about
    @page = Page.where(name: "about").first
    @sections = @page.sections.order(:page_order)
  end
  
  def team
    @page = Page.where(name: "team").first
    @sections = @page.sections.order(:page_order)
  end
end
