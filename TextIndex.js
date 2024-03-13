db.student.createIndex(
  { "class_id": "text" },
  {
    "name": "class_id_text_index",
    "default_language": "english", // Set the default language if needed
    
  }
);
< class_id_text_index
> db.student.getIndexes(); //to display the output
