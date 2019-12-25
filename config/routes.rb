Rails.application.routes.draw do
  get 'map/home'
  get 'map/app'
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  root to: "map#home"
  resources :merchants
  resources :partners
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
