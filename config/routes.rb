Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :reviews, only: [:create]
    resources :benches, only: [:index, :show, :create]
  end
  root 'static_pages#root'
end
