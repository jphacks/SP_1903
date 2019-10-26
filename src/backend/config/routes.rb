Rails.application.routes.draw do
  post 'postits/create'
  get 'postits/show'

  post 'papers/create'
  get 'papers/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
