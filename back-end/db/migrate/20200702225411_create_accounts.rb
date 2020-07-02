class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.integer :cash
      t.integer :user_id
      t.datetime :dcreated_at

      t.timestamps
    end
  end
end
