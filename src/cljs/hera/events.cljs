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
 (fn [db [_ b]]
   (prn "ME")
   (GET "http://172.17.113.125:8080")
   (prn db b config/url)
   db))

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
   (assoc db :current-user (:input db) :current-page :landing-page :input nil)))

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
