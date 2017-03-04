(ns hera.events
  (:require [re-frame.core :as re-frame]
            [hera.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))


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
   (assoc db :current-user (:input db) :input nil)))

(re-frame/reg-event-db
 :logout
 (fn [db]
   (prn db)
   (assoc db :current-user "no")
   (assoc db :current-user nil)))
