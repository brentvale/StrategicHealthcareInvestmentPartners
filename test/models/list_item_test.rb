# == Schema Information
#
# Table name: list_items
#
#  id                :integer          not null, primary key
#  list_item_content :text
#  list_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class ListItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
