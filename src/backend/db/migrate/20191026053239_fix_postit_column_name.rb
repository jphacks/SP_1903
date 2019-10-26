class FixPostitColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :postits, :test, :text
  end
end
