Rails.application.routes.draw do
  get 'map/home'
  get 'map/app'
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  root to: 'map#home'
  # resources :merchants
  # resources :partners
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'merchants/index'
      post 'merchants/create'
      get '/merchants/show/:id', to: 'merchants#show'
      delete '/merchants/destroy/:id', to: 'merchants#destroy'
      get 'partners/index'
      post 'partners/create'
      get '/partners/show/:id', to: 'partners#show'
      delete '/partners/destroy/:id', to: 'partners#destroy'
    end
  end

  get '/*path' => 'map#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
