class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.integer :page_id
      t.string :heading
      t.integer :page_order

      t.timestamps null: false
    end
  end
end
