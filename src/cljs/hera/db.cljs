(ns hera.db)

(def default-db
  {:current-user "me"
   :house nil
   :bills []
   :current-page :enter-bills
   :users ["Nolan"
           "Megan"
           "Pallavi"]}
  #_{:current-user nil
     :bills []
     :current-page :login
     :users ["Nolan"
             "Megan"
             "Pallavi"]})
