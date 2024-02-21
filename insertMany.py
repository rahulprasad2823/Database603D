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

    # Inserting many animals
    new_animal = [
        {
        "name": "JANI",
        "species": "Dog",
        "breed": "Golden Retriever",
        "age": 2,
        "arrival_date": "2023-01-21",
        "adoption_status": "Available",
        "notes": "Friendly and playful.",
    },
    {
            "name": "Luna",
            "species": "Cat",
            "breed": "Siamese",
            "age": 1,
            "arrival_date": "2023-01-24",
            "adoption_status": "Not Available",
            "notes": "Affectionate and playful kitten with kind hearted.",
        },
        {
            "name": "Rex",
            "species": "Dog",
            "breed": "Mixed Breed",
            "age": 2,
            "arrival_date": "2021-06-25",
            "adoption_status": "Available",
            "notes": "Energetic, Playful and friendly dog.",
        }
    ]

    result = animals_collection.insert_many(new_animal)

    document_ids = result.inserted_ids
    print("# of documents inserted: " + str(len(document_ids)))
    print(f"_ids of inserted documents: {document_ids}")
    

except Exception as e:
    print(e)
finally:
    client.close()
