(ns hera.views
  (:require [re-frame.core :as re-frame]))


(defn user-dropdown
  [current user]
  (if (= current user)
    [:option {:key user :selected true} user]
    [:option {:key user} user]))

(defn other-panel []
  (let [current-user (re-frame/subscribe [:current-user])
        bills (re-frame/subscribe [:bills])
        users (re-frame/subscribe [:users])]
    (prn "why")
    (when @current-user
      (fn []
        [:div
         [:div "Hello, " @current-user " you have " (count @bills) " bills in the system."]
         [:button {:on-click #(prn %)
                   :type "button"}
          "Add bills" ]
         [:button {:type "button"
                   :on-click (fn [e] (prn "click logout") (re-frame/dispatch [:logout ":("]))}
          "Logout"]]))))


(defn login
  []
  [:div
   [:div "Welcome!"]
   [:form
    "Username"
    [:input {:type "text"
             :name "user"
             :on-change (fn [e] (re-frame/dispatch [:input (-> e .-currentTarget .-value)]))}]]
   [:button
    {:on-click (fn [e]
                 (re-frame/dispatch [:login]))}
    "Submit"]])

(defn main-panel
  []
  (let [logged-in? (re-frame/subscribe [:current-user])]
    (prn @logged-in?)
    (if @logged-in?
      (other-panel)
      (login))))
