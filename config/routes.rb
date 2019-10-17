Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope module: :front do
    root 'static_pages#home'

    resource :requests
  end
end
