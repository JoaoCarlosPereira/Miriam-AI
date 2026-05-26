import os

# Set Environment Variables BEFORE importing Open-WebUI modules
os.environ["DATA_DIR"] = "/media/joao/Dados/open-webui-service/data"
os.environ["FRONTEND_BUILD_DIR"] = "/media/joao/Dados/open-webui-service/build"

import pysqlite3
import sys
sys.modules["sqlite3"] = sys.modules.pop("pysqlite3")

import uvicorn
from open_webui.main import app

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    uvicorn.run(app, host="0.0.0.0", port=port)
