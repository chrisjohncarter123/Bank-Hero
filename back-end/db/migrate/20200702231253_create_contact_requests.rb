class CreateContactRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :contact_requests do |t|
      t.integer :user_id
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
