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

    # Get reference to 'animals' database
    db = client.animals

    # Get reference to 'animals' collection
    animals_collection = db.animals
 
 # List of object IDs to find and update 
    ids_to_update = [
        ObjectId("65d62e9e9e5d0601ae3d684f"),
        ObjectId("65d62e9e9e5d0601ae3d6850"),
    ]

    # Update fields in the documents
    update_data = {"$set": {"adoption_status": "Adopted"}}

    # Update documents with the specified IDs
    update_result = animals_collection.update_many({"_id": {"$in": ids_to_update}}, update_data)

    if update_result.modified_count > 0:
        print(f"{update_result.modified_count} documents updated successfully!")
    else:
        print("No documents were updated.")

except Exception as e:
    print("An error occurred:", e)

finally:
    client.close()
