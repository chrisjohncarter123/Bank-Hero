Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/login'
  get 'sessions/welcome'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'authorized', to: 'sessions#page_requires_login'

  resources :users
  resources :counters
  resources :contact_requests
  resources :transactions
  resources :accounts





  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
