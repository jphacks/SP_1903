class AddForrignKeyToPostit < ActiveRecord::Migration[5.2]
  def change
    add_reference :postits, :user, foreign_key: true
  end
end
