Rails.application.routes.draw do
  
  resources :appointments
  resources :clients
  resources :users
  
  get '/order/clients', to: "clients#order_name"
  get '/order/appointments', to: "appointments#order_date"
  get '/count/appointments', to: "clients#appointments_count"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
