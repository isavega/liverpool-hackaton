from typing import Optional
import os 
import json
import datetime
import random
import io
import time

from fastapi import FastAPI, Response, status, Request
from fastapi.datastructures import UploadFile
from fastapi.exceptions import HTTPException
from fastapi.param_functions import File, Body

from fastapi.middleware.cors import CORSMiddleware



from .s3_utils import S3_SERVICE
from .utils import settings
from pydantic import BaseModel


s3_client = S3_SERVICE(settings.aws_access_key_id,
                       settings.aws_secret_access_key, settings.aws_region)




app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("adffdds")

@app.post("/upload_code_to_s3", status_code=200, description="***** Upload image file to S3 *****")
async def upload(img_file: UploadFile):
    print("asdfasdf")
    img_extension = os.path.splitext(img_file.filename)[1]
    current_time = datetime.datetime.now()
    file_name_unique = current_time.strftime('%Y-%m-%d-%H-%M-%S') + img_extension

    data = img_file.file._file

    uploads3 = await s3_client.upload_fileobj(bucket=settings.aws_s3_bucket, key=settings.aws_s3_key + "/" + file_name_unique , fileobject=data)

    if uploads3:
        s3_url = f"https://{settings.aws_s3_bucket}.s3.{settings.aws_region}.amazonaws.com/{settings.aws_s3_key}/{file_name_unique}"
        return {"status": "success", "image_url": s3_url}  # response added
    else:
        raise HTTPException(status_code=400, detail="Failed to upload in S3")

