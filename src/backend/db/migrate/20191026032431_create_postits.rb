class CreatePostits < ActiveRecord::Migration[5.2]
  def change
    create_table :postits do |t|
      t.string :test

      t.timestamps
    end
  end
end
