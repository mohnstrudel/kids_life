Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope module: :front do
    root 'static_pages#home'

    get 'contact', to: 'static_pages#contact'
    get 'ded-moroz-i-snegurochka', to: 'static_pages#new_year', as: 'new_year'
    resources :requests
    resources :services
  end
end
