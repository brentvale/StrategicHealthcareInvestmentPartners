# == Schema Information
#
# Table name: pages
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Page < ActiveRecord::Base
  has_many :sections
  accepts_nested_attributes_for :sections, allow_destroy: true
end
