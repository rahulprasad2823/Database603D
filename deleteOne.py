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
 # Specify the ID of the document to delete (replace with actual ID)
    id_to_delete = ObjectId("65d62e9e9e5d0601ae3d684f")  

    # Delete the document with the specified ID
    delete_result = animals_collection.delete_one({"_id": id_to_delete})

    if delete_result.deleted_count == 1:
        print("Document deleted successfully!")
    else:
        print("No documents were deleted.")

except Exception as e:
    print("An error occurred:", e)

finally:
    client.close()
