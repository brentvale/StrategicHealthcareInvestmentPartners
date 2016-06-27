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

require 'test_helper'

class ParagraphTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
