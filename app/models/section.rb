# == Schema Information
#
# Table name: sections
#
#  id         :integer          not null, primary key
#  page_id    :integer
#  heading    :string
#  page_order :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Section < ActiveRecord::Base
  belongs_to :page
  
  has_many :paragraphs
  accepts_nested_attributes_for :paragraphs, allow_destroy: true
  
  has_many :lists
  accepts_nested_attributes_for :lists, allow_destroy: true
end
