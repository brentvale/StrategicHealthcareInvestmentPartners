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

require 'test_helper'

class ListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
