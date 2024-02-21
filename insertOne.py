from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import pprint  # Import pprint module

uri = "mongodb+srv://rahulprasad2823:Rahul28@cluster0.clsgo0z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'animals' database
    db = client.animals

    # Get reference to 'animals' collection
    animals_collection = db.animals

    # Inserting one animal
    new_animal = {
        "name": "JANI",
        "species": "Dog",
        "breed": "Golden Retriever",
        "age": 2,
        "arrival_date": "2023-01-21",
        "adoption_status": "Available",
        "notes": "Friendly and playful.",
    }

    result = animals_collection.insert_one(new_animal)

    document_id = result.inserted_id
    # Use pprint.pprint for printing
    print(f"_id of inserted document: {document_id}")
    

except Exception as e:
    print(e)
finally:
    client.close()
