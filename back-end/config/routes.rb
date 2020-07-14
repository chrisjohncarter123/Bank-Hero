Rails.application.routes.draw do
  resources :counters
  resources :contact_requests
  resources :transactions
  resources :accounts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
