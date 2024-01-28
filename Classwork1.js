//Query 1
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
        "Area": "Madapur"}})

// Output: {
  acknowledged: true,
  insertedId: 123
}

//Query 2
//Example for InsertOne()
db.createCollection('Post')
db.Post.insertOne({
    "id": "POST_ID",
    "title": "TITLE_OF_POST",
    "description": "POST_DESCRIPTION",
    "by": "POST_BY",
    "url": "URL_OF_POST",
    "tags": ["TAG1", "TAG2", "TAG3"],
    "likes": "TOTAL_LIKES",
    "comments": [
        {
            "user": "COMMENT_BY",
            "message": "TEXT",
            "dateCreated": "DATE_TIME",
            "like": "LIKES"
        },
        {
            "user": "COMMENT_BY",
            "message": "TEXT",
            "dateCreated": "DATE_TIME",
            "like": "LIKES"
        }
    ]
}
)
//Output: {
  acknowledged: true,
  insertedId: ObjectId('65b5aaddf56d599b95f2576e')
}

//Query 3
//Example for insertMany()
db.Posts.insertMany([
    {
        "id": "POST_ID_1",
        "title": "TITLE_OF_POST_1",
        "description": "POST_DESCRIPTION_1",
        "by": "POST_BY_1",
        "url": "URL_OF_POST_1",
        "tags": ["TAG1", "TAG2", "TAG3"],
        "likes": "TOTAL_LIKES_1",
        "comments": [
            {
                "user": "COMMENT_BY_1",
                "message": "TEXT_1",
                "dateCreated": "DATE_TIME_1",
                "like": "LIKES_1"
            },
            {
                "user": "COMMENT_BY_1",
                "message": "TEXT_1",
                "dateCreated": "DATE_TIME_1",
                "like": "LIKES_1"
            }
        ]
    },
    {
        "id": "POST_ID_2",
        "title": "TITLE_OF_POST_2",
        "description": "POST_DESCRIPTION_2",
        "by": "POST_BY_2",
        "url": "URL_OF_POST_2",
        "tags": ["TAG4", "TAG5", "TAG6"],
        "likes": "TOTAL_LIKES_2",
        "comments": [
            {
                "user": "COMMENT_BY_2",
                "message": "TEXT_2",
                "dateCreated": "DATE_TIME_2",
                "like": "LIKES_2"
            },
            {
                "user": "COMMENT_BY_2",
                "message": "TEXT_2",
                "dateCreated": "DATE_TIME_2",
                "like": "LIKES_2"
            }
        ]
    }
])
//Output: {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65b5afb0f56d599b95f25771'),
    '1': ObjectId('65b5afb0f56d599b95f25772')
  }
}

