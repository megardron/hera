(ns hera.views
  (:require [re-frame.core :as re-frame]))


(defn user-dropdown
  [current user]
  (if (= current user)
    [:option {:key user :selected true} user]
    [:option {:key user} user]))

(defn landing-page []
  (let [current-user (re-frame/subscribe [:current-user])
        bills (re-frame/subscribe [:bills])
        users (re-frame/subscribe [:users])]
    (prn "why")
    [:div
     [:div "Hello, " @current-user " you have " (count @bills) " bills in the system."]
     [:button {:on-click #(re-frame/dispatch-sync [:update-page :enter-bills])
               :type "button"}
      "Add bills" ]
     [:button {:type "button"
               :on-click (fn [e] (prn "click logout") (re-frame/dispatch-sync [:logout ":("]))}
      "Logout"]]))

(defn enter-bills
  []
  [:div "lol"])

(defn login
  []
  [:div
   [:div "Welcome!"]
   [:form
    "Username"
    [:input {:type "text"
             :name "user"
             :on-change (fn [e] (re-frame/dispatch-sync [:input (-> e .-currentTarget .-value)]))}]]
   [:button
    {:on-click (fn [e]
                 (re-frame/dispatch [:login]))}
    "Submit"]])

(defn main-panel
  []
  (let [logged-in? (re-frame/subscribe [:current-user])
        page (re-frame/subscribe [:current-page])]
    (prn @logged-in? @page)
    (if @logged-in?
      (case @page
        :enter-bills (enter-bills)
        :login (landing-page))
      (login))))
