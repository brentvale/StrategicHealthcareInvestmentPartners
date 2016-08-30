class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :list_name
      t.integer :section_id, null: false
      t.integer :page_order, null: false
      t.timestamps null: false
    end
    add_index :lists, :section_id
  end
end
