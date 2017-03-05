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
     [:button {:on-click #(re-frame/dispatch-sync [:update-page :view-bills])
               :type "button"}
      "View bills" ]
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

(defn format-bill
  [people bill]
  [:tr
   [:td (:name bill)]
   [:td (:owner bill)]
   [:td (:amount bill)]
   [:td (.toFixed (/ (:amount bill) people) 2)]
   [:td (:date bill)]
   [:td (str (:paid bill))]])

(defn bill-table
  [bills people]
  [:table
   [:tbody
    [:tr
     [:th "Bill"]
     [:th "Owner"]
     [:th "Amount"]
     [:th "I owe"]
     [:th "Due Date"]
     [:th "Paid?"]]
    (map (partial format-bill people) bills)]])

(defn view-bills
  []
  (let [bills (re-frame/subscribe [:bills])
        people (count (deref (re-frame/subscribe [:users])))]
    [:div (if (seq @bills)
            (bill-table @bills people)
            [:div
             [:div "No bills. Would you like to add one now?"]
             [:button {:on-click #(re-frame/dispatch-sync [:update-page :enter-bills])
                       :type "button"}
              "Add bills" ]])
     (back-button)]))

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
                                                             :name (get-by-id "new-user")}]])}
      "submit"]]))

(defn users
  []
  (let [all-users (re-frame/subscribe [:users])]
    [:div
     [:form [:input {:type "text"
                     :id "new-user"}]]
     [:button {:type "button"
               :on-click #(re-frame/dispatch [:send ["user" {:action "create"
                                                             :name (get-by-id "new-user")}]])}
      "submit"]]))

(defn create-house
  []
  [:div
   [:div {:className "test-main"} "Welcome new user! Enter your name below to begin."]
   [:input {:type "text"
            :id "new-user"}]
   [:button {:type "submit"
             :className "button-test"
             :on-click #(re-frame/dispatch [:send ["house" {:action "create"
                                                            :name (get-by-id "new-user")}]])}
    "submit"]])

(defn main-panel
  []
  #_(re-frame/dispatch [:fetch])
  (let [current-user (re-frame/subscribe [:current-user])
        page (re-frame/subscribe [:current-page])
        house (re-frame/subscribe [:house])]
    (cond (and @current-user @house)
          (case @page
            :enter-bills (enter-bills)
            :landing-page (landing-page)
            :view-bills (view-bills)
            :users (users)
            (error))
          @house (login)
          :else (create-house))))
