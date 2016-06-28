class Api::PagesController < ApplicationController
  def index
    @pages = Page.includes(sections: [:paragraphs]).all
    
    hash = Hash.new

    page_names = [:home, :about, :team]

    page_names.each do |page_name|
      
      hash[page_name] = {}

      @pages.where(name: page_name).first.sections.each do |section|
        paragraphs_array = []
        #order by paragraph page_rank
        section.paragraphs.each do |paragraph|
          paragraphs_array << paragraph
        end
        
        hash[page_name][section.page_order] = {}
        hash[page_name][section.page_order][:id] = section.id
        hash[page_name][section.page_order][:heading] = section.heading
        hash[page_name][section.page_order][:paragraphs] = paragraphs_array
      end

    end
    render json: hash
  end
  
  def create
  end

  def show
  end

  def edit
  end

  def update
  end
end
