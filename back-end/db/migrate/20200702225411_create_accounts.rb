class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :user_id
      t.integer :account_number
      

      t.timestamps
    end
  end
end
