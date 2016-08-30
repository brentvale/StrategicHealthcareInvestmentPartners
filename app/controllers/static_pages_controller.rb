class StaticPagesController < ApplicationController
  def home
    @page = Page.where(name: "home").first
    @sections = @page.sections
  end
  
  def about
    @page = Page.where(name: "about").first
    @sections = @page.sections
  end
  
  def team
    @page = Page.where(name: "team").first
    @sections = @page.sections
  end
end
