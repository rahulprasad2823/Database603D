from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint
uri = "mongodb+srv://rahulprasad2823:Rahul28@cluster0.clsgo0z.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'bank' database
    db = client.animals

    # Get reference to 'animals' collection
    animals_collection = db.animals

    document_to_find = {
    "_id": ObjectId("65d630baa9f39a9a994e7251")
}

# Document to find (replace with actual ID)
    document_to_find = {
        "_id": ObjectId("65d630baa9f39a9a994e7251")  # Example ID, replace with actual
    }

    # Find the document with the specified ID
    found_document = animals_collection.find_one(document_to_find)

    if found_document:
        pprint.pprint(found_document)
        print("Document found!")
    else:
        print("Document not found with the specified ID.")

except Exception as e:
    print("An error occurred:", e)

finally:
    client.close()
