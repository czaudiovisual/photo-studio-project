Rails.application.routes.draw do
  
  resources :users, only: [:index, :show, :create]
  resources :clients, except: [:show]
  resources :appointments, except: [:show]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
