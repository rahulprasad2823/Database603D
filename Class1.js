//Query1
//Collection and Document Creation with an Employee Details
db.createCollection('Details')
db.Details.insertOne({
    "_id": 123,
    "Emp_ID": "10025AE336",
    "Personal_details": {
        "First_Name": "Radhika",
        "Last_Name": "Sharma",
        "Date_Of_Birth": "1995-09-26"
    },
    "Contact": {
        "e-mail": "radhika_sharma.123@gmail.com",
        "phone": "9848022338"
    },
    "Address": {
        "city": "Hyderabad",
        "Area": "Madapur",}})

// Output: { "acknowledged" : true, "insertedId" : 123 }
