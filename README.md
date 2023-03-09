# BookShala
# IN THIS WE WILL USE NODE JS

# routes and endpoints

This project aims to buils a book management server/ backend for library records.


Fine System:
eg. issued for 10/03/2023-10/06/2023
retuned on 10/09/2023
fine =50*3=150

## Subscription Types:

Basic: 3 Months
Standard: 6 Months
Premium: 12 Months

If subscription type is standard and subscription date is 06/03/2023
then it will be valid till 06/09/2023

within subscription period>> if reewal of book missed >>50/-day
out of subscription and renewal missed>>100 subs+50/- day

>> book1
>> basic
>> 06/03/2023 -> subscription date
>> 07/03/2023 => borrowed a book from library
>> book1 renewal date is on 21/03/2023
>> 23/03/2023 => we need to pay a fine of 50

>> book2
>> basic
>> 06/03/2023 -> subscription date
>> 07/03/2023 => borrowed a book from library
>> book2 renewal date is on 21/03/2023
>> 23/06/2023 => we need to pay a fine of 100+50

missed by renewal date >> 50/-
missed by subscription date >> 100/-
missed by renewal && subscription date >> 150/-


## /users
POST:Create new user
GET: get all user info here

## /users/{id}

GET: get user of id
PUT: update user of given id
DELETE: delete user of given id (check if user has still any book issued)&(if any fine to be paid)

## /users/subscription-details/{id}
GET: get user sbscription details
     >>Date of Subscription
     >>Valid till
     >>Is their any fine

## /books
GET: Get all books
POST: Create or add new Book

## /books/{id}
GET: Get a book by id 
PUT: Update a book by id

## /books/issued
GET: Get all issued book

## /books/issued/withFine
GET: Get all book issued with fine