(ns hera.events
  (:require [re-frame.core :as re-frame]
            [hera.db :as db]
            [hera.config :as config]
            [ajax.core :refer [GET]]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))


(re-frame/reg-event-db
 :send
 (fn [db [_ [type params]]]
   (prn "ME")
   (GET (str "http://172.17.113.125:8080/" type) {:params params
                                                  :headers {:accept "application/json"}
                                                  :handler #(do (prn %) (re-frame/dispatch-sync [:resp [(keyword type) %]]))})
   (re-frame/dispatch [:resp [(keyword type) "lol"]])
   (prn db params config/url)
   db))

(def a (atom 0))

(defn fake-resp-1
  []
  (prn "creating a fake response")
  {:id (swap! a inc)
   :name "Hydro"
   :paid false
   :amount "100"
   :date "2017-03-04"
   :owner "me"})

(defn fake-resp-2
  []
  "word")

(re-frame/reg-event-db
 :resp
 (fn [db [_ [type r]]]
   (prn "GOT A RESPONSE: " type (js->clj r))
   (case type
     :bill (update db :bills #(conj % (fake-resp-1)))
     :user (update db :users #(conj % (fake-resp-2)))
     (assoc db :current-page :error))))

(re-frame/reg-event-db
 :input
 (fn [db [_ b]]
   (prn db b)
   (assoc db :input b)))

(re-frame/reg-event-db
 :login
 (fn [db _]
   (prn db)
   (prn (assoc db :current-user (:input db)))
   (assoc db
          :current-user (:input db)
          :current-page :landing-page
          :input nil)))

(re-frame/reg-event-db
 :add-user
 (fn [db [_ user]]
   (update db :users #(conj % user))))

(re-frame/reg-event-db
 :logout
 (fn [db]
   (prn db)
   (assoc db
          :current-user nil
          :current-page :login)))


(re-frame/reg-event-db
 :update-page
 (fn  [db [_ page]]
   (assoc db :current-page page)))
