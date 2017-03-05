(ns hera.views
  (:require [re-frame.core :as re-frame]
            [ajax.core :refer [GET]]))

(defn back-button
  []
  [:button {:on-click #(re-frame/dispatch-sync [:update-page :landing-page])
            :type "button"}
   "back"])

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
               :on-click (fn [e] (prn "configure") (re-frame/dispatch-sync [:update-page :users]))}
      "Configure users"]
     [:button {:type "button"
               :on-click (fn [e] (prn "click logout") (re-frame/dispatch-sync [:logout]))}
      "Logout"]]))

(defn get-by-id
  [name]
  (->> name
       (.getElementById js/document)
       .-value))

(defn enter-bills
  []
  (let [current-user (re-frame/subscribe [:current-user])
        house (re-frame/subscribe [:house])]
    [:div
     [:form
      [:div "Add Bill"]
      [:br]
      [:div "Amount"]
      [:input {:type "number"
               :id "amount"}]
      [:br]
      [:div "Bill type"]
      [:input {:type "text"
               :id "bill-name"}]
      [:br]
      [:div "Date"]
      [:input {:type "date"
               :id "due-date"}]]
     [:button {:type "button"
               :on-click (fn [e] (prn ":(")
                           (re-frame/dispatch [:send ["bill" {:action "create"
                                                              :owner @current-user
                                                              :house @house
                                                              :name (get-by-id "bill-name")
                                                              :amount (get-by-id "amount")
                                                              :date (get-by-id "due-date")}]]))}
      "Add"]
     (back-button)]))

(defn login
  []
  [:div
   [:div "Welcome!"]
   [:form
    [:div "Username"]
    [:input {:type "text"
             :name "user"
             :on-change (fn [e] (re-frame/dispatch-sync [:input (-> e .-currentTarget .-value)]))}]]
   [:button
    {:on-click (fn [e]
                 (re-frame/dispatch [:login]))}
    "Submit"]])

(defn error
  []
  [:div
   [:div "something went wrong"]
   (back-button)])

(defn add-user
  []
  (let [house (re-frame/subscribe [:house])]
    [:div
     [:div "Add user"]
     [:form [:input {:type "text"
                     :id "new-user"}]]
     [:button {:type "button"
               :on-click #(re-frame/dispatch [:send ["user" {:action "create"
                                                             :name (get-by-id "new-user")}]] #_[:add-user (get-by-id "new-user")])}
      "submit"]]))

(defn users
  []
  (let [all-users (re-frame/subscribe [:users])]
    [:div
     [:ul (map #(conj [:li] %) @all-users)]
     (add-user)
     (back-button)]))

(defn main-panel
  []
  (let [current-user (re-frame/subscribe [:current-user])
        page (re-frame/subscribe [:current-page])]
    (if @current-user
      (case @page
        :enter-bills (enter-bills)
        :landing-page (landing-page)
        :users (users)
        (error))
      (login))))
