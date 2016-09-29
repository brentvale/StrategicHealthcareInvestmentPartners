# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  list_name  :string
#  section_id :integer          not null
#  page_order :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ActiveRecord::Base
  belongs_to :section
  
  has_many :list_items
  accepts_nested_attributes_for :list_items, allow_destroy: true
end
