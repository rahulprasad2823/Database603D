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

    # List of object IDs to find (replace with actual IDs)
    ids_to_find = [
        ObjectId("65d62e9e9e5d0601ae3d684f"),
        ObjectId("65d62e9e9e5d0601ae3d6850"),
        ObjectId("65d62e9e9e5d0601ae3d6851"),
    ]

    # Find documents with the specified IDs
    found_documents = animals_collection.find({"_id": {"$in": ids_to_find}})

    # Check if any documents were found
    if found_documents:
        for document in found_documents:
            pprint.pprint(document)
            print("---")
    else:
        print("No documents found with the specified IDs.")

except Exception as e:
    print("An error occurred:", e)

finally:
    client.close()
