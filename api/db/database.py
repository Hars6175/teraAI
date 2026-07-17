import os

from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import sessionmaker

_db_url = os.environ["DATABASE_URL"]
if _db_url.startswith("postgresql://"):
    _db_url = _db_url.replace("postgresql://", "postgresql+asyncpg://", 1)
    os.environ["DATABASE_URL"] = _db_url
DATABASE_URL = _db_url

engine = create_async_engine(DATABASE_URL, echo=True)
async_session = sessionmaker(engine)
