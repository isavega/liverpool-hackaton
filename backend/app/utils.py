from pydantic import BaseSettings
import dotenv
import json 



class Settings(BaseSettings):
    aws_access_key_id: str
    aws_secret_access_key: str
    aws_region: str
    aws_s3_bucket: str
    aws_s3_key: str

    class Config:
        env_file = ".env"

settings = Settings()