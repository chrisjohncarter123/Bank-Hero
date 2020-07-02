json.extract! contact_request, :id, :user_id, :title, :content, :created_at, :updated_at
json.url contact_request_url(contact_request, format: :json)
