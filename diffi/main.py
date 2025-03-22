# from fastapi import FastAPI, UploadFile, File, Form, Query
# from fastapi.responses import JSONResponse
# from langchain_community.vectorstores.faiss import FAISS
# from langchain_huggingface.embeddings import HuggingFaceEmbeddings
# import os
# import shutil
# import uuid

# app = FastAPI()

# # Initialize FAISS & Embeddings
# embeddings = HuggingFaceEmbeddings(model_name="thenlper/gte-large")
# index_path = "backend/faiss_index"
# UPLOAD_FOLDER = "backend/uploads"

# # Ensure required directories exist
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# # Load or create FAISS index
# if os.path.exists(index_path):
#     vector_db = FAISS.load_local(index_path, embeddings=embeddings, allow_dangerous_deserialization=True)
# else:
#     vector_db = FAISS.from_texts(["dummy"], embedding=embeddings)
#     vector_db.save_local(index_path)


# @app.get("/")
# async def home():
#     """Root endpoint to check if API is running."""
#     return {"message": "Welcome to the Image Search API!"}


# @app.post("/upload/")
# async def upload_image(file: UploadFile = File(...), tag: str = Form(...)):  # Use Form instead of Query
#     """Upload an image and store its vector representation."""
#     file_extension = file.filename.split(".")[-1].lower()
#     if file_extension not in ["png", "jpg", "jpeg"]:
#         return JSONResponse(content={"error": "Invalid file format"}, status_code=400)

#     file_path = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4()}.{file_extension}")
#     with open(file_path, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     # Add text embedding to FAISS
#     vector_db.add_texts(
#         texts=[tag],  
#         metadatas=[{"tag": tag, "image_path": file_path}],  
#         ids=[str(uuid.uuid4())]
#     )
#     vector_db.save_local(index_path)  # Ensure updates are saved

#     return {"message": "Image uploaded successfully", "image_path": file_path, "tag": tag}


# @app.get("/search/")
# async def search_images(query: str = Query(...), top_k: int = 2):
#     """Retrieve images similar to a text query."""
#     query_vector = embeddings.embed_query(query)  # Correct embedding method for a query
#     results = vector_db.similarity_search_by_vector(query_vector, k=top_k)

#     retrieved_metadata = [{"tag": r.metadata["tag"], "image_path": r.metadata["image_path"]} for r in results]

#     return {"query": query, "results": retrieved_metadata}


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)




###############################################

# from fastapi import FastAPI, UploadFile, File, Form, Query
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
# from langchain_community.vectorstores.faiss import FAISS
# from langchain_huggingface.embeddings import HuggingFaceEmbeddings
# import os
# import shutil
# import uuid
# from fastapi.staticfiles import StaticFiles



# app = FastAPI()

# # app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")
# # app.mount("/uploads", StaticFiles(directory="backend/uploads"), name="uploads")
# UPLOAD_FOLDER = "backend/uploads"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# # Correctly mount the uploads folder
# app.mount("/uploads", StaticFiles(directory=UPLOAD_FOLDER, html=True), name="uploads")


# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Add other origins as needed
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Initialize FAISS & Embeddings
# embeddings = HuggingFaceEmbeddings(model_name="thenlper/gte-large")
# index_path = "backend/faiss_index"
# UPLOAD_FOLDER = "backend/uploads"

# # Ensure required directories exist
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# # Load or create FAISS index
# if os.path.exists(index_path):
#     vector_db = FAISS.load_local(index_path, embeddings=embeddings, allow_dangerous_deserialization=True)
# else:
#     vector_db = FAISS.from_texts(["dummy"], embedding=embeddings)
#     vector_db.save_local(index_path)

# @app.get("/")
# async def home():
#     """Root endpoint to check if API is running."""
#     return {"message": "Welcome to the Image Search API!"}

# @app.post("/upload/")
# async def upload_image(file: UploadFile = File(...), tag: str = Form(...)):
#     """Upload an image and store its vector representation."""
#     file_extension = file.filename.split(".")[-1].lower()
#     if file_extension not in ["png", "jpg", "jpeg"]:
#         return JSONResponse(content={"error": "Invalid file format"}, status_code=400)

#     # Ensure upload folder exists
#     os.makedirs("uploads", exist_ok=True)

#     file_path = os.path.join("uploads", f"{uuid.uuid4()}.{file_extension}")

#     with open(file_path, "wb") as buffer:
#         shutil.copyfileobj(file.file, buffer)

#     print(f"File saved at: {file_path}")  # Debugging print

#     vector_db.add_texts(
#         texts=[tag],
#         metadatas=[{"tag": tag, "image_path": os.path.basename(file_path)}],  # Save only filename
#         ids=[str(uuid.uuid4())]
#     )
#     vector_db.save_local("backend/faiss_index")

#     return {"message": "Image uploaded successfully", "image_path": os.path.basename(file_path), "tag": tag}


# @app.get("/search/")

# async def search_images(query: str = Query(...), top_k: int = 2):
#     """Retrieve images similar to a text query."""
#     query_vector = embeddings.embed_query(query)  # Correct embedding method for a query
#     results = vector_db.similarity_search_by_vector(query_vector, k=top_k)

#     # retrieved_metadata = [{"tag": r.metadata["tag"], "image_path": r.metadata["image_path"]} for r in results]





# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
from fastapi import FastAPI, UploadFile, File, Form, Query
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from langchain_community.vectorstores.faiss import FAISS
from langchain_huggingface.embeddings import HuggingFaceEmbeddings
import os
import shutil
import uuid

app = FastAPI()

# Define upload folder path
# UPLOAD_FOLDER = "backend/uploads"
UPLOAD_FOLDER = "public/backend/uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)  # Ensure the directory exists

# Correctly mount the uploads folder for serving images
app.mount("/uploads", StaticFiles(directory=UPLOAD_FOLDER, html=True), name="uploads")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to restrict access if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize FAISS & Embeddings
embeddings = HuggingFaceEmbeddings(model_name="thenlper/gte-large")
index_path = "backend/faiss_index"

# Load or create FAISS index
if os.path.exists(index_path):
    vector_db = FAISS.load_local(index_path, embeddings=embeddings, allow_dangerous_deserialization=True)
else:
    vector_db = FAISS.from_texts(["dummy"], embedding=embeddings)
    vector_db.save_local(index_path)

@app.get("/")
async def home():
    """Root endpoint to check if API is running."""
    return {"message": "Welcome to the Image Search API!"}

@app.post("/upload/")
async def upload_image(file: UploadFile = File(...), tag: str = Form(...)):
    """Upload an image and store its vector representation."""
    file_extension = file.filename.split(".")[-1].lower()
    if file_extension not in ["png", "jpg", "jpeg"]:
        return JSONResponse(content={"error": "Invalid file format"}, status_code=400)

    # Generate unique filename and save file in uploads folder
    filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = os.path.join(UPLOAD_FOLDER, filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    print(f"File saved at: {file_path}")  # Debugging print

    # Store metadata in FAISS
    vector_db.add_texts(
        texts=[tag],
        metadatas=[{"tag": tag, "image_path": filename}],  # Save only filename
        ids=[str(uuid.uuid4())]
    )
    vector_db.save_local(index_path)

    return {
        "message": "Image uploaded successfully",
        "image_path": filename,
        "tag": tag
    }

@app.get("/search/")
async def search_images(query: str = Query(...), top_k: int = 2):
    """Retrieve images similar to a text query."""
    query_vector = embeddings.embed_query(query)  # Generate query embedding
    results = vector_db.similarity_search_by_vector(query_vector, k=top_k)

    retrieved_metadata = [
        {
            "tag": r.metadata["tag"],
            "image_path": f"/uploads/{r.metadata['image_path']}"  # Ensure correct path
        }
        for r in results
    ]

    return {"query": query, "results": retrieved_metadata}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
