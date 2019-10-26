class AddForeignKeyFromPaperToPostit < ActiveRecord::Migration[5.2]
  def change
    add_reference :postits, :paper, foreign_key: true
  end
end
