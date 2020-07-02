json.extract! transaction, :id, :created_at, :account_from_id, :account_to_id, :cash, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)
