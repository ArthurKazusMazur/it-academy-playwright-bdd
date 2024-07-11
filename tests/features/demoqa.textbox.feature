Feature: Text form

  Background:
    Given User navigates to the TextBoxPage

  Scenario Outline: Testing text form. Valid data
    When User specifys his data as: "<fullName>", "<email>", "<currentAddress>" in the data form
    And User clicks "<buttonName>" button
    Then User's data form is filled with proper data: "<fullName>", "<email>", "<currentAddress>"

    Examples:
      | fullName              | email              | currentAddress                 | buttonName |
      | Dormidont Podoprigora | my.email@mail.com  | Paris, 18-24, Picadilly circus | Submit     |
      | I'm Groot             | email@mail.com     | London, 756-4, str. Colts      | Submit     |
      | John Doe              | mail@mail.com      | New York, str. the 5th Avenue  | Submit     |
      | Takeshi Kitano        | new.email@mail.com | Tokio, 5-26, str. Youkushima   | Submit     |
# Scenario Outline: Testing text form. Invaild email
#     When User specifys his data as: <fullName>, <email>, <currentAddress> in the data form
#     And User clicks <buttonName> button
#     Then emailInput border should be highlighted with <color>
# Examples:
# |fullName              |email              |currentAddress                  | buttonName | color                    |
# |Dormidont Podoprigora | my.email@mail.com | Paris, 18-24, Picadilly circus | Submit     | 1px solid rgb(255, 0, 0) |
