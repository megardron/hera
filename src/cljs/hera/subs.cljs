(ns hera.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :current-user
 (fn [db]
   (prn "current-user")
   (:current-user db)))

(re-frame/reg-sub
 :bills
 (fn [db]
   (:bills db)))

(re-frame/reg-sub
 :users
 (fn [db]
   (:users db)))
