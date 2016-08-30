class CreateListItems < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.text :list_item_content
      t.integer :list_id, null: false
      
      t.timestamps null: false
    end
    add_index :list_items, :list_id
  end
end
