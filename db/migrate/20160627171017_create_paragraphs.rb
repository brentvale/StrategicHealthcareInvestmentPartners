class CreateParagraphs < ActiveRecord::Migration
  def change
    create_table :paragraphs do |t|
      t.integer :section_id
      t.text :body

      t.timestamps null: false
    end
  end
end
