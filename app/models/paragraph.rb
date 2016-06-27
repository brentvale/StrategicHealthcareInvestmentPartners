# == Schema Information
#
# Table name: paragraphs
#
#  id         :integer          not null, primary key
#  section_id :integer
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Paragraph < ActiveRecord::Base
  belongs_to :section
end
