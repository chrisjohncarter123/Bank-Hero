class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.datetime :created_at
      t.integer :account_from_id
      t.integer :account_to_id
      t.integer :cash

      t.timestamps
    end
  end
end
