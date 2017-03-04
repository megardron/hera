(ns hera.views
  (:require [re-frame.core :as re-frame]))

(defn main-panel []
  (let [name (re-frame/subscribe [:name])
        bills (re-frame/subscribe [:bills])]
    (fn []
      [:div
       [:div "Hello, " @name " you have " (count @bills) " bills in the system."]
       [:button {:on-click #(prn %)
                 :type "button"}
        "Add bills" ]
       [:div "Change User:"]
       [:form
        [:input {:type "text"
                 :name "user"}]
        [:input {:type "submit"
                 :on-click #(prn "hello world" %)}]]])))
